import { expect as expectCDK, haveResourceLike, SynthUtils } from '@aws-cdk/assert';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { ec2ImageToOsString, InstanceService, ManagedLoggingPolicy } from '../src/index';

test('Snapshot', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack', {
    env: {
      account: '123456789012', // not a real account
      region: 'us-east-1',
    },
  });

  const ami = ec2.MachineImage.lookup({
    name: 'Windows_Server-2022-English-Full-Base',
    windows: true,
  });

  new InstanceService(stack, 'instanceService', {
    ami,
  });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});

test('DefaultLinuxService', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack', {
    env: {
      account: '223456789012', // not a real account
      region: 'us-east-1',
    },
  });

  const amiLinux = ec2.MachineImage.lookup({
    name: 'ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server*',
    owners: ['099720109477'],
    windows: false,
  });

  new InstanceService(stack, 'instanceService', {
    ami: amiLinux,
  });

  expectCDK(stack).to(haveResourceLike('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Resource: [
          'arn:aws:logs:us-east-1:223456789012:log-group:/linux/logs',
          'arn:aws:logs:us-east-1:223456789012:log-group:/linux/logs/*',
        ],
      }],
    },
  }));
});

test('DefaultWindowsService', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack', {
    env: {
      account: '123456789012', // not a real account
      region: 'us-east-1',
    },
  });

  const amiWin = ec2.MachineImage.lookup({
    name: 'Windows_Server-2022-English-Full-Base',
    windows: true,
  });

  new InstanceService(stack, 'instanceService', {
    ami: amiWin,
  });

  expectCDK(stack).to(haveResourceLike('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Resource: [
          'arn:aws:logs:us-east-1:123456789012:log-group:/windows/logs',
          'arn:aws:logs:us-east-1:123456789012:log-group:/windows/logs/*',
        ],
      }],
    },
  }));
});

test('Policies only', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack', {
    env: {
      account: '123456789012', // not a real account
      region: 'us-east-1',
    },
  });

  new ManagedLoggingPolicy(stack, 'policy', {
    os: 'windows',
  });

  const amiLinux = ec2.MachineImage.lookup({
    name: 'ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server*',
    owners: ['099720109477'],
    windows: false,
  });

  new ManagedLoggingPolicy(stack, 'linuxpolicy', {
    os: ec2ImageToOsString(stack, amiLinux),
  });

  expectCDK(stack).to(haveResourceLike('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Resource: [
          'arn:aws:logs:us-east-1:123456789012:log-group:/windows/logs',
          'arn:aws:logs:us-east-1:123456789012:log-group:/windows/logs/*',
        ],
      }],
    },
  }));

  expectCDK(stack).to(haveResourceLike('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Resource: [
          'arn:aws:logs:us-east-1:123456789012:log-group:/linux/logs',
          'arn:aws:logs:us-east-1:123456789012:log-group:/linux/logs/*',
        ],
      }],
    },
  }));
});
