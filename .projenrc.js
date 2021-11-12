const { AwsCdkConstructLibrary, NpmAccess } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '1.132.0',
  defaultReleaseBranch: 'master',
  name: '@renovosolutions/cdk-library-renovo-instance-service',
  description: 'CDK Construct Library to create instance based services utilizing default configurations for Renovo Solutions.',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-library-renovo-instance-service.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/cloud-assembly-schema',
  ],
  deps: [
    '@renovosolutions/cdk-library-managed-instance-role',
    '@renovosolutions/cdk-aspects-library-security-group',
  ],
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve'],
    },
  },
  autoApproveUpgrades: true,
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['github-actions[bot]'],
    label: 'auto-approve',
  },
  releaseToNpm: true,
  releaseWorkflow: true,
  npmAccess: NpmAccess.PUBLIC,
  cdkAssert: true,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-renovo-instance-service',
    module: 'renovo-instance-service',
  },
  publishToNuget: {
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.RenovoInstanceService',
  },
});
project.synth();