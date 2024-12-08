import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { taskController } from './controller/taskManager.controller';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(taskController);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
