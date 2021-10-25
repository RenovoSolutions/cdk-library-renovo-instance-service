import { countResources, expect as expectCDK, haveResourceLike, SynthUtils } from '@aws-cdk/assert';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { ec2ImageToOsString, InstanceService, ManagedLoggingPolicy } from '../src/index';


function setupStack() {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack', {
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

function addTestSgRule(sg:ec2.SecurityGroup) {
  sg.addIngressRule(
    ec2.Peer.ipv4('10.0.0.1/32'),
    ec2.Port.tcp(80),
    'HTTP',
  );
}

const logString = 'arn:aws:logs:us-east-1:123456789012:log-group:';

test('Snapshot', () => {
  let setup = setupStack();
  let stack = setup.stack;
  let vpc = setup.vpc;

  let ami = ec2.MachineImage.lookup({
    name: 'Windows_Server-2022-English-Full-Base',
    windows: true,
  });

  const instance = new InstanceService(stack, 'instanceService', {
    name: 'snapshot',
    ami,
    vpc,
  });

  addTestSgRule(instance.securityGroup);

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});

test('DefaultLinuxService', () => {
  let setup = setupStack();
  let stack = setup.stack;
  let vpc = setup.vpc;

  let ami = ec2.MachineImage.lookup({
    name: 'ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server*',
    owners: ['099720109477'],
    windows: false,
  });

  const instance = new InstanceService(stack, 'instanceService', {
    name: 'linux',
    ami,
    vpc,
  });

  addTestSgRule(instance.securityGroup);

  expectCDK(stack).to(haveResourceLike('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Resource: [
          `${ logString }/linux/logs`,
          `${ logString }/linux/logs/*`,
        ],
      }],
    },
  }));

  // Expect a single egress rule with outbound to all by default
  expectCDK(stack).to(countResources('AWS::EC2::SecurityGroup', 1));
  expectCDK(stack).to(haveResourceLike('AWS::EC2::SecurityGroup', {
    SecurityGroupEgress: [
      {
        CidrIp: '0.0.0.0/0',
        Description: 'Allow all outbound traffic by default',
        IpProtocol: '-1',
      },
    ],
    SecurityGroupIngress: [
      {
        CidrIp: '10.0.0.1/32',
        Description: 'HTTP',
        IpProtocol: 'tcp',
        FromPort: 80,
        ToPort: 80,
      },
    ],
  }));
});

test('DefaultWindowsService', () => {
  let setup = setupStack();
  let stack = setup.stack;
  let vpc = setup.vpc;

  let ami = ec2.MachineImage.lookup({
    name: 'Windows_Server-2022-English-Full-Base',
    windows: true,
  });

  const instance = new InstanceService(stack, 'instanceService', {
    name: 'windows',
    ami: ami,
    vpc,
  });

  addTestSgRule(instance.securityGroup);

  expectCDK(stack).to(haveResourceLike('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Resource: [
          `${ logString }/windows/logs`,
          `${ logString }/windows/logs/*`,
        ],
      }],
    },
  }));

  // Expect a single egress rule with outbound to all by default
  expectCDK(stack).to(countResources('AWS::EC2::SecurityGroup', 1));
  expectCDK(stack).to(haveResourceLike('AWS::EC2::SecurityGroup', {
    SecurityGroupEgress: [
      {
        CidrIp: '0.0.0.0/0',
        Description: 'Allow all outbound traffic by default',
        IpProtocol: '-1',
      },
    ],
    SecurityGroupIngress: [
      {
        CidrIp: '10.0.0.1/32',
        Description: 'HTTP',
        IpProtocol: 'tcp',
        FromPort: 80,
        ToPort: 80,
      },
    ],
  }));
});

test('Logging policy construct can be used independently of an instance', () => {
  let setup = setupStack();
  let stack = setup.stack;

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
          `${ logString }/windows/logs`,
          `${ logString }/windows/logs/*`,
        ],
      }],
    },
  }));

  expectCDK(stack).to(haveResourceLike('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Resource: [
          `${ logString }/linux/logs`,
          `${ logString }/linux/logs/*`,
        ],
      }],
    },
  }));
});

test('Error when os is not windows or linux for managed logging policy creation', () => {
  let setup = setupStack();
  let stack = setup.stack;

  expect(() => {
    new ManagedLoggingPolicy(stack, 'policy', {
      os: 'other',
    });
  }).toThrowError(/The os property for ManagedLoggingPolicy must be windows or linux and you gave:/);
});

test('Setting enableCloudwatchLogs to false does NOT create the logging IAM policy', () => {
  let setup = setupStack();
  let stack = setup.stack;
  let vpc = setup.vpc;

  let ami = ec2.MachineImage.lookup({
    name: 'Windows_Server-2022-English-Full-Base',
    windows: true,
  });

  new InstanceService(stack, 'instanceService', {
    name: 'windows',
    ami: ami,
    vpc,
    enableCloudwatchLogs: false,
  });

  expectCDK(stack).notTo(haveResourceLike('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Resource: [
          `${ logString }/windows/logs`,
          `${ logString }/windows/logs/*`,
        ],
      }],
    },
  }));
});

test('Rules are separate element when inline rules are disabled', () => {
  let setup = setupStack();
  let stack = setup.stack;
  let vpc = setup.vpc;

  let ami = ec2.MachineImage.lookup({
    name: 'Windows_Server-2022-English-Full-Base',
    windows: true,
  });

  const instance = new InstanceService(stack, 'instanceService', {
    name: 'windows',
    ami: ami,
    vpc,
    enableCloudwatchLogs: false,
    allowAllOutbound: false,
    disableInlineRules: true,
  });

  addTestSgRule(instance.securityGroup);

  // Expect a single egress rule with outbound to only the VPC cidr
  expectCDK(stack).to(countResources('AWS::EC2::SecurityGroup', 1));
  expectCDK(stack).to(countResources('AWS::EC2::SecurityGroupEgress', 1));
  expectCDK(stack).to(haveResourceLike('AWS::EC2::SecurityGroupEgress', {
    IpProtocol: 'icmp',
    Description: 'Disallow all traffic',
    CidrIp: '255.255.255.255/32',
    FromPort: 252,
    ToPort: 86,
  }));
  expectCDK(stack).to(countResources('AWS::EC2::SecurityGroupIngress', 1));
  expectCDK(stack).to(haveResourceLike('AWS::EC2::SecurityGroupIngress', {
    IpProtocol: 'tcp',
    Description: 'HTTP',
    CidrIp: '10.0.0.1/32',
    FromPort: 80,
    ToPort: 80,
  }));
});
