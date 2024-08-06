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
