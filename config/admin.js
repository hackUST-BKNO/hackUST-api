module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dad060acb15d7fada5bc6d9c62f2b44d'),
  },
});
