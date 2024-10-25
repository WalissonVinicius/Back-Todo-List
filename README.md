
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Descrição

O **Back-End Todo-List** é uma API RESTful desenvolvida com **NestJS** e **Prisma**, utilizando **PostgreSQL** como banco de dados e hospedado no **NeonDB**. Este projeto foi criado para gerenciar listas de tarefas de forma eficiente, escalável e segura.

## Funcionalidades

- **Gerenciamento de Tarefas**: Permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) para gerenciar tarefas.
- **Persistência de Dados**: Armazena dados de forma duradoura utilizando **PostgreSQL**.

## Tecnologias Utilizadas

- **NestJS**: Framework para a construção de aplicações escaláveis em Node.js.
- **Prisma**: ORM para facilitar a manipulação do banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **NeonDB**: Hospedagem para o banco de dados PostgreSQL.

## Configuração do Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) e um gerenciador de pacotes como [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) instalados.

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/back-end-todo-list.git
cd back-end-todo-list
npm install
```

### Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL no **NeonDB**.
2. Configure as variáveis de ambiente no arquivo `.env`:

   ```env
   DATABASE_URL="sua-url-do-neondb"
   JWT_SECRET="seu-segredo"
   ```

### Execução do Projeto

Para iniciar o servidor:

```bash
# Modo de desenvolvimento
npm run start:dev

# Modo de produção
npm run start:prod
```

## Execução de Testes

Para executar os testes:

```bash
# Testes unitários
npm run test

# Testes de integração
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga os seguintes passos:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:

    ```bash
    git checkout -b feature/nova-feature
    ```

3. Faça commit das suas alterações:

    ```bash
    git commit -m 'Adiciona nova feature'
    ```

4. Envie para o branch principal:

    ```bash
    git push origin feature/nova-feature
    ```

5. Crie um Pull Request.


## Contato

- Autor - Walisson Vinicius
- Website - https://walissonportfolio.vercel.app/
- Instagra, - [@wv_sccp](https://www.instagram.com/wv.sccp/)


