import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// ! Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host
    dialect: process.env.DB_DIALECT, // Database dialect (e.g., 'mysql', 'postgres', etc.)

    // Disable logging of SQL queries to the console
    logging: false,

    // Connection pool configuration
    pool: {
      max: 3, // Maximum number of connections in the pool
      min: 0, // Minimum number of connections in the pool
      acquire: 30000, // Maximum time (in milliseconds) to try to get a connection before throwing an error
      idle: 10000, // Maximum time (in milliseconds) that a connection can be idle before being released
    },

    // Synchronization options
    sync: {
      alter: false, // Do not alter existing tables based on model definitions
      force: false, // Do not drop and re-create tables; preserves existing data
    },
  }
);

export default sequelize;
