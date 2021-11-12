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
      labels: ['auto-approve', 'deps-upgrade'],
    },
  },
  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically merge dependency upgrade PRs without approval if they pass build',
          actions: {
            merge: {
              method: 'squash',
              commit_message: 'title+body',
              strict: 'smart',
              strict_method: 'merge',
            },
            delete_head_branch: {},
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
        {
          name: 'Conventional Commit',
          conditions: [
            'title~=^(fix|feat|docs|style|refactor|perf|test|build|ci|chore|revert|release)(?:\\(.+\\))?:',
          ],
          actions: {
            post_check: {
              title: [
                '{% if check_succeed %}',
                'Title follows Conventional Commit',
                '{% else %}',
                'Title does not follow Conventional Commit',
                '{% endif %}',
              ].join('\n'),
              summary: [
                '{% if not check_succeed %}',
                'Your pull request title must follow [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/).',
                '{% endif %}',
              ].join('\n'),
            },
          },
        },
      ],
    },
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