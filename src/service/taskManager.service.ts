import { TaskRepository } from '../repository/taskManager.repository';

export class TaskService {
  private taskRepository = new TaskRepository();

  async createTask(title: string) {
    return this.taskRepository.createTask({ title });
  }

  async getAllTasks() {
    return this.taskRepository.findAllTasks();
  }

  async updateTask(id: number, title: string, completed: boolean) {
    return this.taskRepository.updateTask(id, { title, completed });
  }

  async deleteTask(id: number) {
    return this.taskRepository.deleteTask(id);
  }
}