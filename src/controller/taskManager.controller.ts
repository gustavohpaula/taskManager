import express, { Request, Response } from 'express';
import { TaskService } from '../service/taskManager.service';

const taskService = new TaskService();
export const taskController = express.Router();

taskController.post('/tasks', async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const task = await taskService.createTask(title);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa.' });
  }
});

taskController.get('/tasks', async (_req: Request, res: Response) => {
    try {
      const tasks = await taskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar tarefas.' });
    }
  });
  
  taskController.put('/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
      const task = await taskService.updateTask(parseInt(id, 10), title, completed);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar tarefa.' });
    }
  });

  taskController.delete('/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await taskService.deleteTask(parseInt(id, 10));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar tarefa.' });
    }
  });