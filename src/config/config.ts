import * as dotenv from 'dotenv';
dotenv.config();

export default {
  APP: process.env.APP || 'development',
  PORT: process.env.PORT || '3000',
  NAME: process.env.APP_NAME || 'REST_APP',

  DB_DIALECT: process.env.DB_DIALECT || 'mongo',
  DB_HOST: process.env.DB_HOST || 'mongodb://localhost:27017/example_db',
  DB_NAME: process.env.DB_NAME || 'example_db',
  DB_PASSWORD: process.env.DB_PASSWORD || 'db-password',
  DB_PORT: process.env.DB_PORT || '27017',
  DB_USER: process.env.DB_USER || 'root',

  CACHE_HOST: process.env.CACHE_HOST || '127.0.0.1',
  CACHE_PORT: Number(process.env.CACHE_PORT || 6379),
  CACHE_PASSWORD: process.env.CACHE_PASSWORD || null,

  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || 'jwt_please_change',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10
};
