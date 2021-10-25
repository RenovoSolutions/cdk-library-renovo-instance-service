import * as ec2 from '@aws-cdk/aws-ec2';
import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
import { ManagedInstanceRole } from '@renovosolutions/aws-cdk-managed-instance-role';

export interface IInstanceServiceProps {
  /**
   * The name of the service this instance service will host
   */
  name: string;
  /**
   * The VPC to launch this service in
   */
  vpc: ec2.Vpc;
  /**
   * The subnet type to launch this service in
   *
   *
   * @default ec2.SubnetType.PRIVATE
   */
  subnetType?: ec2.SubnetType;
  /**
   * The Amazon Machine Image (AMI) to launch the target instance with
   */
  ami: ec2.IMachineImage;
  /**
   * Whether or not to enable logging to Cloudwatch Logs
   *
   *
   * @default true
   */
  enableCloudwatchLogs?: boolean;
  /**
   * Allow all outbound traffic for the instances security group
   *
   *
   * @default true
   */
  allowAllOutbound?: boolean;
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
  disableInlineRules?: boolean;
  // Add domain join
  // Add SSM
}

export interface IManagedLoggingPolicyProps {
  /**
   * The OS of the instance this policy is for.
   */
  os: string;
}

export interface IAmiLookup {
  /**
   * The name string to use for AMI lookup
   */
  name: string;
  /**
   * The owners to use for AMI lookup
   */
  owners?: string[];
  /**
   * Is this AMI expected to be windows?
   */
  windows?: boolean;
}

export function ec2ImageToOsString(stack:cdk.Construct, image:ec2.IMachineImage) {
  return ec2.OperatingSystemType[image.getImage(stack).osType].toLowerCase();
}

export class ManagedLoggingPolicy extends cdk.Construct {

  public readonly policy: iam.ManagedPolicy;

  constructor(scope: cdk.Construct, id: string, props: IManagedLoggingPolicyProps) {
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
      logResources.push(`arn:aws:logs:${ cdk.Stack.of(this).region }:${ cdk.Stack.of(this).account }:log-group:${ g }`);
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

export class InstanceService extends cdk.Construct {

  public readonly instanceProfile: ManagedInstanceRole;

  public readonly securityGroup: ec2.SecurityGroup;

  constructor(scope: cdk.Construct, id: string, props: IInstanceServiceProps) {
    super(scope, id);

    let managedPolicies = [];

    // Logging configuration
    props.enableCloudwatchLogs = (props.enableCloudwatchLogs === undefined) ? true : props.enableCloudwatchLogs;

    if (props.enableCloudwatchLogs) {
      managedPolicies.push(new ManagedLoggingPolicy(this, 'loggingPolicy', {
        os: ec2ImageToOsString(this, props.ami),
      }).policy);
    }

    this.instanceProfile = new ManagedInstanceRole(this, 'instanceRole', {
      domainJoinEnabled: false,
      ssmManagementEnabled: true,
      managedPolicies,
    });

    props.allowAllOutbound = (props.allowAllOutbound === undefined) ? true : props.allowAllOutbound;
    props.disableInlineRules = (props.disableInlineRules === undefined) ? false : props.disableInlineRules;

    this.securityGroup = new ec2.SecurityGroup(this, 'securityGroup', {
      allowAllOutbound: props.allowAllOutbound,
      vpc: props.vpc,
      description: `The security group applied to the instance service for ${ props.name }`,
      disableInlineRules: props.disableInlineRules,
    });
  }
}
