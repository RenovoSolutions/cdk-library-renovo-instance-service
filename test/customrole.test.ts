import { ManagedInstanceRole } from '@renovosolutions/cdk-library-managed-instance-role';
import { App, Stack, aws_ec2 as ec2 } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { InstanceService } from '../src/index';


function setupStack() {
  const app = new App();
  const stack = new Stack(app, 'TestStack', {
    env: {
      account: '123456789012', // not a real account
      region: 'us-east-1',
    },
  });

  const vpc = new ec2.Vpc(stack, 'vpc');

  return {
    stack: stack,
    vpc: vpc,
  };
}

test('Snapshot', () => {
  let setup = setupStack();
  let stack = setup.stack;
  let vpc = setup.vpc;

  let ami = ec2.MachineImage.lookup({
    name: 'Windows_Server-2022-English-Full-Base',
    windows: true,
  });

  const role = new ManagedInstanceRole(stack, 'role', {});

  new InstanceService(stack, 'instanceService', {
    name: 'snapshot',
    machineImage: ami,
    vpc,
    parentDomain: 'example.com',
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
    instanceRole: role,
  });

  expect(Template.fromStack(stack)).toMatchSnapshot();
});
