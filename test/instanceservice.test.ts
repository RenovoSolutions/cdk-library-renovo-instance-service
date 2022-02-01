import { App, Stack, aws_ec2 as ec2 } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ec2ImageToOsString, InstanceService, ManagedLoggingPolicy } from '../src/index';


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
    machineImage: ami,
    vpc,
    parentDomain: 'example.com',
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
  });

  addTestSgRule(instance.securityGroup);

  expect(Template.fromStack(stack)).toMatchSnapshot();
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
    machineImage: ami,
    vpc,
    parentDomain: 'example.com',
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
  });

  addTestSgRule(instance.securityGroup);

  Template.fromStack(stack).hasResourceProperties('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Action: [
          'logs:PutLogEvents',
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
        ],
        Effect: 'Allow',
        Resource: [
          `${ logString }/linux/logs`,
          `${ logString }/linux/logs/*`,
        ],
      }],
    },
  });

  // Expect a single egress rule with outbound to all by default
  Template.fromStack(stack).resourceCountIs('AWS::EC2::SecurityGroup', 1);
  Template.fromStack(stack).hasResourceProperties('AWS::EC2::SecurityGroup', {
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
  });
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
    machineImage: ami,
    vpc,
    parentDomain: 'example.com',
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
  });

  addTestSgRule(instance.securityGroup);

  Template.fromStack(stack).hasResourceProperties('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Action: [
          'logs:PutLogEvents',
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
        ],
        Effect: 'Allow',
        Resource: [
          `${ logString }/windows/logs`,
          `${ logString }/windows/logs/*`,
        ],
      }],
    },
  });

  // Expect a single egress rule with outbound to all by default
  Template.fromStack(stack).resourceCountIs('AWS::EC2::SecurityGroup', 1);
  Template.fromStack(stack).hasResourceProperties('AWS::EC2::SecurityGroup', {
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
  });
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

  Template.fromStack(stack).hasResourceProperties('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Action: [
          'logs:PutLogEvents',
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
        ],
        Effect: 'Allow',
        Resource: [
          `${ logString }/windows/logs`,
          `${ logString }/windows/logs/*`,
        ],
      }],
    },
  });

  Template.fromStack(stack).hasResourceProperties('AWS::IAM::ManagedPolicy', {
    PolicyDocument: {
      Statement: [{
        Action: [
          'logs:PutLogEvents',
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
        ],
        Effect: 'Allow',
        Resource: [
          `${ logString }/linux/logs`,
          `${ logString }/linux/logs/*`,
        ],
      }],
    },
  });
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
    machineImage: ami,
    vpc,
    parentDomain: 'example.com',
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
    enableCloudwatchLogs: false,
  });

  Template.fromStack(stack).resourceCountIs('AWS::IAM::ManagedPolicy', 0);
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
    machineImage: ami,
    vpc,
    parentDomain: 'example.com',
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
    enableCloudwatchLogs: false,
    allowAllOutbound: false,
    disableInlineRules: true,
  });

  addTestSgRule(instance.securityGroup);

  // Expect a single egress rule with outbound to only the VPC cidr
  Template.fromStack(stack).resourceCountIs('AWS::EC2::SecurityGroup', 1);
  Template.fromStack(stack).resourceCountIs('AWS::EC2::SecurityGroupEgress', 1);
  Template.fromStack(stack).hasResourceProperties('AWS::EC2::SecurityGroupEgress', {
    IpProtocol: 'icmp',
    Description: 'Disallow all traffic',
    CidrIp: '255.255.255.255/32',
    FromPort: 252,
    ToPort: 86,
  });
  Template.fromStack(stack).resourceCountIs('AWS::EC2::SecurityGroupIngress', 1);
  Template.fromStack(stack).hasResourceProperties('AWS::EC2::SecurityGroupIngress', {
    IpProtocol: 'tcp',
    Description: 'HTTP',
    CidrIp: '10.0.0.1/32',
    FromPort: 80,
    ToPort: 80,
  });
});
