import { knex } from '../db'; 
export class TaskRepository {
  async createTask(data: { title: string }) {
    const [task] = await knex('tasks').insert(data).returning('*');
    return task;
  }

  async findAllTasks() {
    return knex('tasks').select('*');
  }

  async updateTask(id: number, data: { title: string; completed: boolean }) {
    const [task] = await knex('tasks').where({ id }).update(data).returning('*');
    return task;
  }

  async deleteTask(id: number) {
    await knex('tasks').where({ id }).del();
  }
}
