import dotenv from 'dotenv';
dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST || "localhost",
  dbUser: process.env.DB_USER || "username",
  dbPassword: process.env.DB_PASSWORD || "password",
  mongodbUrl: process.env.MONGODB_URL || "mongodb",
  databaseMongoName : process.env.DATABABAE_NAME || "pokemon"
};
