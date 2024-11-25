import dotenv from 'dotenv';

dotenv.config(); 
module.exports = {
    client: 'pg',  
    connection: process.env.DATABASE_URL;,
    migrations: {
      directory: './migrations', 
    },
    seeds: {
      directory: './seeds', 
    },
  };
  