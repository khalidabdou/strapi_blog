const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', ''),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', ''),
      user: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', ''),
      ssl : false,
      
      // ssl: {
      //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      // },
    },
    debug: false,
  },
});
