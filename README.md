## Processo seletivo: Aplicação dashboard de pacientes da Medcloud!

Aplicação fullstack em JavaScript como linguagem, Express para o gerenciamento de rotas e middlewares do backend, MySQL como banco relacional, Prisma como ORM, React no frontend com Axios para o gerenciamento das requisições e Redux para o estado global.

Funcionando em um mono-repo que pode ser executado usando o MySQL localmente, bastando apenas configurar o arquivo .env (a pasta backend possui um arquivo de exemplo), rodar o MySQL com o docker ou rodar o docker-compose para subir ambas as aplicações em containers (banco de dados, frontend e backend).

## Prerequisites

- Node
- MySQL (locally) or Docker

## Tech stack

- Javascript
- Express
- MySQL
- Prisma
- React
- React Router
- Axios
- Redux

## Getting started

- Clone the repository:

```bash
git clone https://github.com/crabominable/medcloud-selective-process
```

- Go to repository root:

```bash
cd medcloud-selective-process
```

- Install the dependencies:

```bash
cd frontend
npm i
cd ..
cd backend
npm i
```

- Start the aplication:

```bash
cd frontend
npm run dev
cd ..
cd backend
npm run dev
```
