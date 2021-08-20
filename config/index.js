require('dotenv').config();

const config = {
  env: process.env.ENV,
  port: process.env.PORT,
};

module.exports = { config };
