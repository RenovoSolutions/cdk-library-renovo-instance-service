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

export class InstanceService extends cdk.Construct {

  // public readonly instance: ec2.Instance

  constructor(scope: cdk.Construct, id: string, props: IInstanceServiceProps) {
    super(scope, id);

    let managedPolicies = [];

    // Logging configuration
    props.enableCloudwatchLogs = (props.enableCloudwatchLogs === undefined) ? true : props.enableCloudwatchLogs;

    if (props.enableCloudwatchLogs) {
      let logResources:string[] = [];
      let os:string = ec2.OperatingSystemType[props.ami.getImage(this).osType].toLowerCase();
      console.log(os);
      const logGroups:string[] = [
        `/${ os }/logs`,
        `/${ os }/logs/*`,
      ];
      logGroups.forEach( (g) => {
        logResources.push(`arn:aws:logs:${ cdk.Stack.of(this).region }:${ cdk.Stack.of(this).account }:log-group:${ g }`);
      });

      managedPolicies.push(new iam.ManagedPolicy(this, 'loggingPolicy', {
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
      }));
    }

    new ManagedInstanceRole(this, 'instanceRole', {
      domainJoinEnabled: false,
      ssmManagementEnabled: true,
      managedPolicies,
    });
  }
}
