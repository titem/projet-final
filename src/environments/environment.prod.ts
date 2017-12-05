export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '4443',
    endpoints: {
      allUsers: '/api/users',
      oneUser: '/api/users/:id',
      allOrgs: '/api/nurseries',
      oneOrg: '/api/nurseries/:id',
      allComments: '/api/nurseries/:id/comments',
      oneComment: '/api/nurseries/:id/comments/:commentId'
    }
  }
};
