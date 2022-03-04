import {
  NoIngressCommonManagementPortsAspect,
  NoPublicIngressAspect,
  NoIngressCommonRelationalDBPortsAspect,
} from '@renovosolutions/cdk-aspects-library-security-group';
import { ManagedInstanceRole } from '@renovosolutions/cdk-library-managed-instance-role';
import {
  aws_ec2 as ec2,
  aws_iam as iam,
  Stack,
  Aspects,
  aws_route53 as route53,
  Tags,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface InstanceServiceProps {
  /**
   * The type of instance to launch.
   */
  readonly instanceType: ec2.InstanceType;
  /**
   * AMI to launch
   */
  readonly machineImage: ec2.IMachineImage;
  /**
   * The name of the service the instance is for.
   */
  readonly name: string;
  /**
   * The VPC to launch the instance in.
   */
  readonly vpc: ec2.IVpc;
  /**
   * Whether the instance could initiate connections to anywhere by default.
   */
  readonly allowAllOutbound?: boolean;
  /**
   * Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes
   */
  readonly blockDevices?: ec2.BlockDevice[];
  /**
   * Name of the SSH keypair to grant access to the instance.
   */
  readonly keyName?: string;
  /**
   * Defines a private IP address to associate with the instance.
   */
  readonly privateIpAddress?: string;
  /**
   * The subnet type to launch this service in
   *
   *
   * @default ec2.SubnetType.PRIVATE_WITH_NAT
   */
  readonly subnetType?: ec2.SubnetType;
  /**
   * Select subnets only in the given AZs
   */
  readonly availabilityZones?: string[];
  /**
   * Whether or not to enable logging to Cloudwatch Logs
   *
   *
   * @default true
   */
  readonly enableCloudwatchLogs?: boolean;
  /**
   * Whether to disable inline ingress and egress rule optimization for the instances security group.
   *
   * If this is set to true, ingress and egress rules will not be declared under the SecurityGroup in cloudformation, but will be separate elements.
   *
   * Inlining rules is an optimization for producing smaller stack templates.
   * Sometimes this is not desirable, for example when security group access is managed via tags.
   *
   * The default value can be overriden globally by setting the context variable '@aws-cdk/aws-ec2.securityGroupDisableInlineRules'.
   * @default false
   */
  readonly disableInlineRules?: boolean;
  /**
   * Whether or not to prevent security group from containing rules that allow access to remote management ports:
   * SSH, RDP, WinRM, WinRM over HTTPs
   *
   * If these ports are opened when this is enabled an error will be added to CDK metadata and deployment and synth will fail.
   *
   *
   * @default true
   */
  readonly enableNoRemoteManagementPortsAspect?: boolean;
  /**
   * Whether or not to prevent security group from containing rules that allow access to relational DB ports:
   * MySQL, PostgreSQL, MariaDB, Oracle, SQL Server
   *
   * If these ports are opened when this is enabled an error will be added to CDK metadata and deployment and synth will fail.
   *
   *
   * @default true
   */
  readonly enableNoDBPortsAspect?: boolean;
  /**
   * Whether or not to prevent security group from containing rules that allow access from the public internet:
   * Any rule with a source from 0.0.0.0/0 or ::/0
   *
   * If these sources are used when this is enabled and error will be added to CDK metadata and deployment and synth will fail.
   */
  readonly enabledNoPublicIngressAspect?: boolean;
  /**
   * The parent domain of the service.
   */
  readonly parentDomain: string;
  /**
   * The user data to apply to the instance.
   */
  readonly userData?: ec2.UserData;
  /**
   * The role to use for this instance
   *
   * @default ManagedInstanceRole
   */
  readonly instanceRole?: iam.Role;
}

export interface ManagedLoggingPolicyProps {
  /**
   * The OS of the instance this policy is for.
   */
  readonly os: string;
}

export interface AmiLookup {
  /**
   * The name string to use for AMI lookup
   */
  readonly name: string;
  /**
   * The owners to use for AMI lookup
   */
  readonly owners?: string[];
  /**
   * Is this AMI expected to be windows?
   */
  readonly windows?: boolean;
}

export function ec2ImageToOsString(stack:Construct, image:ec2.IMachineImage) {
  return ec2.OperatingSystemType[image.getImage(stack).osType].toLowerCase();
}

export class ManagedLoggingPolicy extends Construct {

  public readonly policy: iam.ManagedPolicy;

  constructor(scope: Construct, id: string, props: ManagedLoggingPolicyProps) {
    super(scope, id);

    if (!(props.os.toLowerCase() == 'windows') && !(props.os.toLowerCase() == 'linux')) {
      throw new Error(`The os property for ManagedLoggingPolicy must be windows or linux and you gave: ${ props.os.toLowerCase() }`);
    }

    let logResources:string[] = [];

    const logGroups:string[] = [
      `/${ props.os }/logs`,
      `/${ props.os }/logs/*`,
    ];

    logGroups.forEach( (g) => {
      logResources.push(`arn:aws:logs:${ Stack.of(this).region }:${ Stack.of(this).account }:log-group:${ g }`);
    });

    this.policy = new iam.ManagedPolicy(this, 'loggingPolicy', {
      description: 'Allow instance to log system logs to Cloudwatch',
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            'logs:PutLogEvents',
            'logs:CreateLogGroup',
            'logs:CreateLogStream',
          ],
          resources: logResources,
        }),
      ],
    });
  }
}

export class InstanceService extends Construct {
  /**
   * The instance profile associated with this instance.
   */
  public readonly instanceProfile: iam.CfnInstanceProfile;
  /**
   * The instance role associated with this instance.
   */
  public readonly instanceRole: iam.Role;
  /**
   * The security group associated with this instance.
   */
  public readonly securityGroup: ec2.SecurityGroup;
  /**
   * The underlying instance resource
   */
  public readonly instance: ec2.Instance;
  /**
   * The underlying CfnInstance resource
   */
  public readonly instanceCfn: ec2.CfnInstance;
  /**
   * The availability zone of the instance
   */
  public readonly instanceAvailabilityZone: string;
  /**
   * The instance's ID
   */
  public readonly instanceId: string;
  /**
   * Private DNS name for this instance assigned by EC2
   */
  public readonly instanceEc2PrivateDnsName: string;
  /**
   * Private IP for this instance
   */
  public readonly instancePrivateIp: string;
  /**
   * Public DNS name for this instance assigned by EC2
   */
  public readonly instanceEc2PublicDnsName: string;
  /**
   * DNS record for this instance created in Route53
   */
  public readonly instanceDnsName: route53.ARecord;
  /**
   * The type of OS the instance is running
   */
  public readonly osType: ec2.OperatingSystemType;

  constructor(scope: Construct, id: string, props: InstanceServiceProps) {
    super(scope, id);

    let enableNoRemoteManagementPortsAspect: boolean = props.enableNoRemoteManagementPortsAspect ?? true;
    let enableNoDBPortsAspect: boolean = props.enableNoDBPortsAspect ?? true;
    let enabledNoPublicIngressAspect: boolean = props.enabledNoPublicIngressAspect ?? true;

    if (enableNoRemoteManagementPortsAspect) Aspects.of(this).add(new NoIngressCommonManagementPortsAspect());
    if (enableNoDBPortsAspect) Aspects.of(this).add(new NoIngressCommonRelationalDBPortsAspect());
    if (enabledNoPublicIngressAspect) Aspects.of(this).add(new NoPublicIngressAspect());

    let managedPolicies = [];

    // Logging configuration
    let enableCloudwatchLogs: boolean = (props.enableCloudwatchLogs === undefined) ? true : props.enableCloudwatchLogs;

    if (enableCloudwatchLogs) {
      managedPolicies.push(new ManagedLoggingPolicy(this, 'loggingPolicy', {
        os: ec2ImageToOsString(this, props.machineImage),
      }).policy);
    }

    if (props.instanceRole) {
      this.instanceRole = props.instanceRole;
    } else {
      this.instanceRole = new ManagedInstanceRole(this, 'instanceRole', {
        domainJoinEnabled: false,
        ssmManagementEnabled: true,
        managedPolicies,
        createInstanceProfile: false,
      }).role;
    }

    let allowAllOutbound: boolean = (props.allowAllOutbound === undefined) ? true : props.allowAllOutbound;
    let disableInlineRules: boolean = (props.disableInlineRules === undefined) ? false : props.disableInlineRules;

    this.securityGroup = new ec2.SecurityGroup(this, 'securityGroup', {
      allowAllOutbound: allowAllOutbound,
      vpc: props.vpc,
      description: `The security group applied to the instance service for ${ props.name }`,
      disableInlineRules: disableInlineRules,
    });

    this.instance = new ec2.Instance(this, 'instance', {
      instanceType: props.instanceType,
      machineImage: props.machineImage,
      vpc: props.vpc,
      allowAllOutbound: allowAllOutbound,
      blockDevices: props.blockDevices,
      keyName: props.keyName,
      privateIpAddress: props.privateIpAddress,
      propagateTagsToVolumeOnCreation: true,
      requireImdsv2: true,
      securityGroup: this.securityGroup,
      userData: props.userData,
      userDataCausesReplacement: false,
      vpcSubnets: {
        subnetType: props.subnetType ?? ec2.SubnetType.PRIVATE_WITH_NAT,
        onePerAz: true,
        availabilityZones: props.availabilityZones,
      },
      role: this.instanceRole,
    });

    this.instanceProfile = this.instance.node.tryFindChild('InstanceProfile') as iam.CfnInstanceProfile;
    this.instanceCfn = this.instance.instance;
    this.instanceAvailabilityZone = this.instance.instanceAvailabilityZone;
    this.instanceId = this.instance.instanceId;
    this.instanceEc2PrivateDnsName = this.instance.instancePrivateDnsName;
    this.instancePrivateIp = this.instance.instancePrivateIp;
    this.instanceEc2PublicDnsName = this.instance.instancePublicDnsName;
    this.osType = this.instance.osType;

    Tags.of(this.instance.instance).add('Name', props.name + '.' + props.parentDomain);

    this.instanceDnsName = new route53.ARecord(this, 'A', {
      recordName: props.name + '.' + props.parentDomain,
      zone: route53.HostedZone.fromLookup(this, 'zone', {
        domainName: props.parentDomain,
      }),
      target: route53.RecordTarget.fromIpAddresses(this.instance.instancePrivateIp),
    });
  }
}
