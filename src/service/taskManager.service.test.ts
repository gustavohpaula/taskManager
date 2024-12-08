import { beforeEach, expect, describe, it, vi } from 'vitest';
import { TaskService } from '../service/taskManager.service';
import { TaskRepository } from '../repository/taskManager.repository';

// Mockando o TaskRepository
vi.mock('../repository/taskManager.repository');

describe('TaskService', () => {
  let taskService: TaskService;

  beforeEach(() => {
    taskService = new TaskService();
    vi.clearAllMocks(); 
  });

  it('should create a new task', async () => {
    const taskData = { id: 1, title: 'New Task', completed: false };
    const taskResponse = { id: 1, title: 'New Task', completed: false };

   vi.mocked(TaskRepository.prototype.createTask).mockResolvedValue(taskData)

    const result = await taskService.createTask(taskData.title);

    console.log(result)
    expect(result).toEqual(taskResponse); 
  });

  it('should return an error when createTask fails', async () => {
    const taskData = { title: 'New Task' };

    vi.mocked(TaskRepository.prototype.createTask).mockResolvedValue(new Error('Database error'));

    try {
      await taskService.createTask(taskData.title);
    } catch (error) {
        if (error instanceof Error) {
            expect(error.message).toBe('Database error');
          } else {
            throw new Error('Unexpected error type');
          }
    }
  });

  it('should get all tasks', async () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    vi.mocked(TaskRepository.prototype.findAllTasks).mockResolvedValue(tasks);

    const result = await taskService.getAllTasks();

    expect(result).toEqual(tasks); 
  });

  it('should update a task', async () => {
    const taskData = { title: 'Updated Task', completed: true };
    const updatedTask = { id: 1, ...taskData };

    vi.mocked(TaskRepository.prototype.updateTask).mockResolvedValue(updatedTask);

    const result = await taskService.updateTask(1, taskData.title, taskData.completed);

    expect(result).toEqual(updatedTask);
  });


  it('should delete a task', async () => {
    vi.mocked(TaskRepository.prototype.deleteTask).mockResolvedValue(undefined);
    const result = await taskService.deleteTask(1);

    expect(result).toBeUndefined(); 
  });

});
