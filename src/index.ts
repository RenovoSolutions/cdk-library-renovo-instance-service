import {
  NoIngressCommonManagementPortsAspect,
  NoPublicIngressAspect,
  NoIngressCommonRelationalDBPortsAspect,
} from '@renovosolutions/cdk-aspects-library-security-group';
import { ManagedInstanceRole } from '@renovosolutions/cdk-library-managed-instance-role';
import { aws_ec2 as ec2, aws_iam as iam, Stack, Aspects } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface InstanceServiceProps {
  /**
   * The name of the service this instance service will host
   */
  readonly name: string;
  /**
   * The VPC to launch this service in
   */
  readonly vpc: ec2.Vpc;
  /**
   * The subnet type to launch this service in
   *
   *
   * @default ec2.SubnetType.PRIVATE
   */
  readonly subnetType?: ec2.SubnetType;
  /**
   * The Amazon Machine Image (AMI) to launch the target instance with
   */
  readonly ami: ec2.IMachineImage;
  /**
   * Whether or not to enable logging to Cloudwatch Logs
   *
   *
   * @default true
   */
  readonly enableCloudwatchLogs?: boolean;
  /**
   * Allow all outbound traffic for the instances security group
   *
   *
   * @default true
   */
  readonly allowAllOutbound?: boolean;
  /**
   * Whether to disable inline ingress and egress rule optimization for the instances security group.
   *
   * If this is set to true, ingress and egress rules will not be declared under the SecurityGroup in cloudformation, but will be separate elements.
   *
   * Inlining rules is an optimization for producing smaller stack templates.
   * Sometimes this is not desirable, for example when security group access is managed via tags.
   *
   * The default value can be overriden globally by setting the context variable '@aws-cdk/aws-ec2.securityGroupDisableInlineRules'.
   *
   *
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

  public readonly instanceProfile: ManagedInstanceRole;

  public readonly securityGroup: ec2.SecurityGroup;

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
        os: ec2ImageToOsString(this, props.ami),
      }).policy);
    }

    this.instanceProfile = new ManagedInstanceRole(this, 'instanceRole', {
      domainJoinEnabled: false,
      ssmManagementEnabled: true,
      managedPolicies,
    });

    let allowAllOutbound: boolean = (props.allowAllOutbound === undefined) ? true : props.allowAllOutbound;
    let disableInlineRules: boolean = (props.disableInlineRules === undefined) ? false : props.disableInlineRules;

    this.securityGroup = new ec2.SecurityGroup(this, 'securityGroup', {
      allowAllOutbound: allowAllOutbound,
      vpc: props.vpc,
      description: `The security group applied to the instance service for ${ props.name }`,
      disableInlineRules: disableInlineRules,
    });
  }
}
