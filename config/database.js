const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '185.212.70.14'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u871870119_strapi_db'),
      user: env('DATABASE_USERNAME', 'u871870119_khalid_strapi'),
      password: env('DATABASE_PASSWORD', ''),
      ssl : false,
      // ssl: {
      //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      // },
    },
    debug: false,
  },
});
