import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config(); 

const knex = Knex({
  client: 'pg',  
  connection: process.env.DATABASE_URL,
});

export default knex;
