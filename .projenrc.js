const { awscdk, javascript } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '2.10.0',
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
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  deps: [
    '@renovosolutions/cdk-library-managed-instance-role@^2.1.42',
    '@renovosolutions/cdk-aspects-library-security-group@^2.0.43',
  ],
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'deps-upgrade'],
    },
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
  workflowNodeVersion: '14.17.0',
});
project.synth();