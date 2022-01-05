module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '11a8ce7ac9cb19a325a965c9c4919294'),
  },
});
