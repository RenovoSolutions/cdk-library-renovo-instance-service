import * as ec2 from '@aws-cdk/aws-ec2';
import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
import { ManagedInstanceRole } from '@renovosolutions/aws-cdk-managed-instance-role';

export interface IInstanceServiceProps {
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
  // Add domain join
  // Add SSM
}

export interface IManagedLoggingPolicyProps {
  /**
   * The OS of the instance this policy is for.
   */
  os: string;
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
  // public readonly instance: ec2.Instance

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

    new ManagedInstanceRole(this, 'instanceRole', {
      domainJoinEnabled: false,
      ssmManagementEnabled: true,
      managedPolicies,
    });
  }
}
