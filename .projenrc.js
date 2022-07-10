const { awscdk, javascript } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '1.163.1',
  defaultReleaseBranch: 'master',
  majorVersion: '2',
  releaseBranches: {
    v1: {
      majorVersion: '1',
    },
  },
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
    '@renovosolutions/cdk-library-managed-instance-role@^1.0.35',
    '@renovosolutions/cdk-aspects-library-security-group@^1.0.36',
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
      labels: ['auto-approve', 'deps-upgrade'],
    },
    exclude: ['projen'],
  },
  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically approve dependency upgrade PRs if they pass build',
          actions: {
            review: {
              type: 'APPROVE',
              message: 'Automatically approved dependency upgrade PR',
            },
          },
          conditions: [
            'label=auto-approve',
            'label=deps-upgrade',
            '-label~=(do-not-merge)',
            'status-success=build',
            'author=github-actions[bot]',
            'title="chore(deps): upgrade dependencies"',
          ],
        },
      ],
    },
    pullRequestLintOptions: {
      semanticTitle: true,
      semanticTitleOptions: {
        types: [
          'chore',
          'docs',
          'feat',
          'fix',
          'ci',
          'refactor',
          'test',
        ],
      },
    },
  },
  releaseToNpm: true,
  release: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
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

new javascript.UpgradeDependencies(project, {
  include: ['projen'],
  taskName: 'upgrade-projen',
  labels: ['projen-upgrade'],
  workflow: true,
  workflowOptions: {
    schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 2 * * 1']),
  },
  pullRequestTitle: 'upgrade projen',
});

project.synth();