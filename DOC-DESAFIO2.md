# Cloudged - Desafio Técnico Desenvolvedor

## Backend

Desenvolvimento de uma API RESTful utilizando Node.js e Express para gerenciar operações CRUD (Create, Read, Update, Delete) em uma entidade chamada "User". Cada User é definido pelos campos: id, fullName, email e data de criação.

## Arquitetura e Princípios Adotados:

A API segue os padrões de arquitetura MVC para uma organização estruturada e manutenível do código, além de adotar os princípios RESTful para oferecer uma interface consistente e previsível para interações com os recursos.

## Estrutura de pasta do Backend

```bash
backend/
│
├── node_modules/          # Diretório das dependências do Node.js
├── src/
│   ├── controllers/       # Contém os controladores da aplicação
│   │   └── users/
│   │       └── CreateUserController.ts
│   │       └── ListUsersController.ts
│   │       └── GetByIdUserController.ts
│   │       └── UpdateUserController.ts
│   │       └── DeleteUserController.ts
│   ├── database/          # Contém os arquivos de configuração do db
│   │   └── db.ts
│   ├── middleware/        # Contém middleware para a aplicação
│   │   └── validationMiddleware.ts
│   ├── models/            # Contém os modelos da aplicação
│   │   └── userModel.ts
│   ├── services/          # Contém os serviços da aplicação
│   │   └── users/
│   │       └── CreateUserService.ts
│   │       └── ListUsersService.ts
│   │       └── GetByIdUserService.ts
│   │       └── UpdateUserService.ts
│   │       └── DeleteUserService.ts
│   ├── validators/        # Contém os validadores
│   │   └── userValidator.ts
│   ├── routes.ts          # Contém as definições das rotas
│   ├── server.ts          # Inicialização do servidor / Arquivo principal
│
├── .env                   # Arquivo de variáveis de ambiente
├── .gitignore             # Arquivo para ignorar arquivos/pastas no Git
├── eslint.config.mjs      # Arquivo contém regras do eslint
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
└── tsconfig.json          # Configurações do TypeScript

```

## Explicação da Estrutura

-  controllers/: Diretório para os controladores que gerenciam a lógica de negócio e a interação entre os modelos e as rotas.
   -  users/: Subdiretório para controladores específicos da entidade User.
-  database/: Diretório para arquivos de configuração do banco de dados.
-  middleware/: Diretório para middlewares que processam requisições antes de chegarem aos controladores.
-  models/: Diretório para os modelos que representam a estrutura dos dados.
-  services/: Diretório para serviços que contêm a lógica de negócio.
   -  users/: Subdiretório para serviços específicos da entidade User.
-  validators/: Diretório para validadores que garantem a integridade dos dados.
-  routes.ts: Arquivo de definição das rotas da aplicação.
-  server.ts: Arquivo principal de inicialização do servidor.

## Frontend com Reactjs

Desenvolvimento de uma aplicação frontend utilizando React.js para consumir a API desenvolvida. A aplicação permite que o usuário visualize a lista de usuários, adicione um novo usuário, atualize um usuário existente e delete um usuário.

## Estrutura do Frontend

```bash
frontend/
│
├── node_modules/          # Diretório das dependências do Node.js
├── public/                # Diretório para arquivos públicos
├── src/
│   ├── assets/            # Contém os arquivos estáticos como imagens
│   │   └── cloudged.png
│   │   └── react.svg
│   ├── components/        # Contém os componentes reutilizáveis
│   │   ├── inputField/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── inputSearch/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── loadingSpinner/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── modal/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── submitButton/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── userForm/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── userFormEdit/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── userRow/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   ├── ui/              # Contém componentes de UI que aparecem em toda a aplicação
│   │   ├── footer/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── header/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── layout/
│   │       └── index.tsx
│   │       └── styles.module.css
│   ├── contexts/          # Contém os contextos do React
│   │   └── UserContext.tsx
│   ├── pages/             # Contém as páginas da aplicação
│   │   ├── home/
│   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   ├── services/          # Contém os serviços da aplicação
│   │   └── api/
│   │       └── api.ts
│   ├── utils/             # Contém utilitários e helpers
│   │   └── dateUtils.ts
│   ├── App.tsx            # Componente principal da aplicação
│   ├── index.css          # Estilos globais da aplicação
│   ├── main.tsx           # Ponto de entrada principal
│   ├── vite-env.d.ts      # Tipos para o Vite
│
├── .env                   # Arquivo de variáveis de ambiente
├── .env.example           # Exemplo de arquivo de variáveis de ambiente
├── .eslintrc.cjs          # Configuração do ESLint
├── .gitignore             # Arquivo para ignorar arquivos/pastas no Git
├── index.html             # Arquivo HTML principal
├── package-lock.json      # Arquivo de lock do npm
├── package.json           # Gerenciador de dependências do Node.js
├── README.md              # Documentação do projeto
├── tsconfig.app.json      # Configurações do TypeScript para a aplicação
├── tsconfig.json          # Configurações do TypeScript
├── tsconfig.node.json     # Configurações do TypeScript para Node
└── vite.config.ts         # Configurações do Vite

```

## Explicação da Estrutura

-  assets/: Diretório para arquivos estáticos como imagens.
-  components/: Diretório para componentes reutilizáveis.
   -  inputField/, inputSearch/, loadingSpinner/, modal/, submitButton/, userForm/, userFormEdit/, userRow/: Subdiretórios para componentes específicos.
-  ui/: Diretório para componentes de UI que aparecem em toda a aplicação.
   -  footer/, header/, layout/: Subdiretórios para componentes de UI.
-  contexts/: Diretório para contextos do React.
   -  UserContext.tsx: Contexto para gerenciamento de estados de usuário.
-  pages/: Diretório para as páginas da aplicação.
   -  home/: Subdiretório para a página inicial.
-  services/: Diretório para serviços da aplicação.
   -  api/: Subdiretório para serviços de API.
-  utils/: Diretório para utilitários e helpers.
-  App.tsx: Componente principal da aplicação.
-  index.css: Estilos globais da aplicação.
-  main.tsx: Ponto de entrada principal.

</br>

<div align="center">
   
![0806 (1)](https://github.com/user-attachments/assets/949e2c2a-f1f1-432c-983c-9076260198c8)

</div>

## Como rodar localmente na sua máquina

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

-  [Node.js](https://nodejs.org/en/download/) (Versão 18 ou superior)
-  [NPM](https://www.npmjs.com/get-npm) ou [YARN](https://yarnpkg.com/getting-started/install)
-  [MySQL](https://dev.mysql.com/downloads/mysql/)

### Configuração do MySQL

Após instalar o MySQL, crie um banco de dados e guarde as informações de acesso.

## Como clonar o repositório

Para clonar o repositório, execute o seguinte comando no terminal:

```bash
git clone https://github.com/Denis-moreira98/teste-dev-jr.git
```

Depois de clonar o repositório, navegue até o diretório do projeto:

```bash
cd teste-dev-jr
```

Logo em seguida acesse a branch "developer" com seguinte comando:

```bash
git checkout developer
```

## Instalando as dependências </br>

Acesse o diretório do backend

```bash
cd backend
```

Para instalar as dependências do projeto, execute:

```bash
npm install
```

ou

```bash
yarn add
```

Acesse o diretório do frontend

```bash
cd ..
```

```bash
cd frontend
```

Execute:

```bash
npm install
```

ou

```bash
yarn add
```

## Configurando as variáveis de ambiente

Tanto na pasta raiz do backend quanto no frontend, há um arquivo `.env.example.`

É necessario renomear ambos arquivo para `.env`

### Backend

Configure o arquivo de acordo com as informações do banco de dados que foi criado.

![Captura de tela 2024-07-13 204801](https://github.com/user-attachments/assets/621810dc-c229-4b14-8241-ac6a2a301d3d)

### Frontend

No frontend, apenas passe a URL da API.

![Captura de tela 2024-07-13 204826](https://github.com/user-attachments/assets/8c6da94f-bf99-4b08-be57-116e920d4fbb)

## Rodando a aplicação

Abra dois terminais, um em cada diretório (frontend e backend), e inicie o servidor em cada um.

### backend

```bash
npm run dev
```

ou

```bash
yarn run dev
```

### frontend

```bash
npm run dev
```

ou

```bash
yarn run dev
```

### Para acessar o Frontend, acesse essa URL no navegador

```bash
http://localhost:5173
```

### Para acessar Api utilize

```bash
http://localhost:3000
```

### Rotas da API

-  POST /users: Cria um novo usuário. </br>

   -  Utilize esse payload: </br>

      ```json
      {
         "fullName": "João Pereira da Silva",
         "email": "joao.silva@gmail.com"
      }
      ```

-  GET /users: Retorna todos os Usuários.
-  GET /users/:id: Retorna um usuário específico pelo ID.
-  PUT /users/:id: Atualiza um usuário específico pelo ID. </br>
   -  Utilize esse payload: </br>
      ```json
      {
         "fullName": "João Pereira da Silva",
         "email": "joao.silva@gmail.com"
      }
      ```
-  DELETE /users/:id: Deleta um usuário específico pelo ID.

## Tecnologias Utilizadas

### Backend

-  Node.js com Express.js: Utilizei Node.js para o servidor devido à sua escalabilidade e processamento assíncrono. O Express.js facilitou a criação de rotas e middleware.

-  TypeScript: Adotei TypeScript para adicionar tipagem estática ao código JavaScript, aumentando a segurança e robustez.

-  MySQL com Sequelize: O MySQL foi escolhido como banco de dados relacional. O Sequelize ORM simplificou as operações de banco de dados com uma interface orientada a objetos.

### Frontend

-  React.js com TypeScript: Utilizei React.js para criar componentes reutilizáveis e TypeScript para tipagem estática e segurança do código.

-  Vite: Escolhi Vite como build tool para desenvolvimento rápido e eficiente.

-  Axios: A biblioteca Axios foi usada para requisições HTTP à API, facilitando a comunicação entre frontend e backend.

-  React Hook Form com Zod: Utilizei React Hook Form para gerenciamento de formulários e Zod para validação de dados.

-  React Toastify: Implementei React Toastify para exibir mensagens toast personalizadas, fornecendo feedback visual aos usuários.
