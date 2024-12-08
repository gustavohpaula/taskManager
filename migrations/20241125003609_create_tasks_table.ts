import { Knex } from 'knex';


export const up = function(knex: Knex): Promise<void> {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.boolean('completed').defaultTo(false);
    table.timestamps(true, true);
  });
};

export const down = function(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('tasks');
};
