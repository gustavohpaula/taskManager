import { knex as setupKnex, Knex } from 'knex';
import { env } from './env';

export const knexConfig: Knex.Config = {
  client: 'pg', 
  connection: env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './migrations',
  },
};

export const knex = setupKnex(knexConfig);
