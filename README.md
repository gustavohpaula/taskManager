# Projeto de Gerenciamento de Tarefas
Projeto de conclusão da matéria de nodeJs

## Decrição
Este projeto é uma API RESTful de gerenciamento de tarefas, com suporte para criação, leitura, atualização e exclusão de tarefas. A API utiliza Knex.js para gerenciamento de banco de dados, Express como servidor web e Typescript para garantir um código fortemente tipado.

## Tecnologias Utilizadas
* Knex.js: Query builder para Node.js, utilizado para realizar operações de banco de dados.
* PostgreSQL: Banco de dados relacional.
* Express: Framework web para Node.js.
* Typescript: Para garantir um código fortemente tipado.
* Migrations: Para controle de versão do banco de dados.

## Ambiente de produção
O projeto está rodando no render pela url https://taskmanager-kxmm.onrender.com/tasks

## Configuração
### Clonando o Repositório
Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/gustavohpaula/taskManager.git
cd taskManager
```
### Instalação de Dependências
Instale as dependências do projeto utilizando npm ou yarn:

```bash
npm install
e 
yarn install
```
### Configuração do Banco de Dados
Para este projeto, utilizamos PostgreSQL. Certifique-se de ter o PostgreSQL instalado e configurado na sua máquina.

Crie o banco de dados:
```bash
createdb taskManager
```

Configure a conexão com o banco de dados no arquivo .env:
```bash
DATABASE_URL=postgresql://usuario:senha@localhost:5432/taskManager
```

### Configuração do Knex.js
O Knex.js é usado para fazer consultas e migrações no banco de dados. Certifique-se de ter o Knex.js e o PostgreSQL instalados:

Instale o Knex.js e o driver do PostgreSQL:
```bash
npm install knex pg
```

### Rodando as Migrações
O Knex.js utiliza migrações para criar e gerenciar o esquema do banco de dados. Você pode rodar as migrações com o comando:

```bash
npx knex migrate:latest
#ou
npm run migrate
```

Isso criará a tabela tasks no seu banco de dados com os campos id, title e completed.

### Rodando o Projeto
Execute o servidor com o comando abaixo. O servidor estará disponível em http://localhost:3000.

```bash
npm run dev
```
### Endpoints da API
A API RESTful oferece os seguintes endpoints:

#### POST /tasks
Cria uma nova tarefa.

##### Request Body:

```bash
{
  "title": "Nova tarefa"
}
```
###### Resposta:

```bash
{
  "id": 1,
  "title": "Nova tarefa",
  "completed": false,
  "created_at": "2024-11-25T01:06:53.803Z",
  "updated_at": "2024-11-25T01:06:53.803Z"
}
```

#### GET /tasks
Lista todas as tarefas.

###### Resposta:

```bash
[
  {
    "id": 1,
    "title": "Nova tarefa",
    "completed": false,
    "created_at": "2024-11-25T01:06:53.803Z",
    "updated_at": "2024-11-25T01:06:53.803Z"
  }
]
```

#### PUT /tasks/:id
Atualiza uma tarefa pelo id.

##### Request Body:

```bash
{
  "title": "Tarefa atualizada",
  "completed": true
}
```

###### Resposta:

```bash 
{
  "id": 1,
  "title": "Tarefa atualizada",
  "completed": true,
  "created_at": "2024-11-25T01:06:53.803Z",
  "updated_at": "2024-11-25T01:06:53.803Z"
}
```

#### DELETE /tasks/:id
Deleta uma tarefa pelo id.

##### Resposta:

```bash
{
  "message": "Tarefa deletada com sucesso."
}
```