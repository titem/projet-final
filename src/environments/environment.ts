// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '4443',
    endpoints: {
      allUsers: '/api/users',
      oneUser: '/api/users/:id',
      allNurseries: '/api/nurseries',
      oneNursery: '/api/nurseries/:id',
      allComments: '/api/nurseries/:id/comments',
      oneComment: '/api/nurseries/:id/comments/:commentId'
    }
  }
};
