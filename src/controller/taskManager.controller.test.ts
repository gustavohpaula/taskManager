import { beforeEach, expect, describe, it, vi } from 'vitest';
import request from 'supertest';
import express from 'express';
import { taskController } from './taskManager.controller'; 
import { TaskService } from '../service/taskManager.service';

vi.mock('../service/taskManager.service'); 


const app = express();
app.use(express.json());
app.use(taskController);

describe('taskController', () => {
  beforeEach(() => {
    vi.clearAllMocks(); 
  });

  it('should create a new task and return 201 status', async () => {
    const taskData = { title: 'New Task' };
    const taskResponse = { id: 1, title: 'New Task', completed: false };

    vi.mocked(TaskService.prototype.createTask).mockResolvedValue(taskResponse)
    const response = await request(app)
      .post('/tasks')
      .send(taskData) 
      .expect(201); 

    expect(response.body).toEqual(taskResponse);
  });

  it('should get all tasks and return 200 status', async () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    vi.mocked(TaskService.prototype.getAllTasks).mockResolvedValue(tasks)
    const response = await request(app)
      .get('/tasks')
      .expect(200); 

    expect(response.body).toEqual(tasks); 
  });

  
  it('should update a task and return 200 status', async () => {
    const taskData = { title: 'Updated Task', completed: true };
    const updatedTask = { id: 1, ...taskData };

    vi.mocked(TaskService.prototype.updateTask).mockResolvedValue(updatedTask)
    const response = await request(app)
      .put('/tasks/1')
      .send(taskData)
      .expect(200);

    expect(response.body).toEqual(updatedTask);
  });

  it('should delete a task and return 200 status', async () => {
    vi.mocked(TaskService.prototype.deleteTask).mockResolvedValue(undefined)
    const response = await request(app)
      .delete('/tasks/1')
      .expect(200);

    expect(response.body).toEqual({ message: 'Tarefa deletada com sucesso.' });
  });


});
