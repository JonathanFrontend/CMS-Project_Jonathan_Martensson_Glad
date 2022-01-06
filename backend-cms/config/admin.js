module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cd855b4073b91812d0848c294fc95d05'),
  },
});
