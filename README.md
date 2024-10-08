# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# Gerenciador de Tarefas - Front-End

Este é o front-end do Gerenciador de Tarefas, uma aplicação web desenvolvida com **React**, **TypeScript**, e **Material UI**. A aplicação permite que os usuários gerenciem tarefas (criar, editar, deletar, e categorizar) de forma prática e intuitiva.

## Funcionalidades

- Login e cadastro de usuários
- Criação, edição, e exclusão de tarefas
- Categorização e filtragem de tarefas
- Modal de criação/edição de tarefas
- Feedback visual com estados vazios e prioridades coloridas
- Interface responsiva e moderna

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática
- **Material UI (MUI)**: Biblioteca de componentes de UI prontos para React
- **Axios**: Biblioteca para realizar requisições HTTP
- **React Router**: Gerenciamento de rotas no front-end
- **Vite**: Ferramenta de build rápida para o desenvolvimento de front-end

## Requisitos

- **Node.js**: v14 ou superior
- **npm** ou **yarn**: para gerenciar pacotes

## Instalação

1. Clone o repositório:

git clone https://github.com/larissabpaz/to-do-list.git

2. Acesse a pasta do projeto:

3. Instale as dependências:
npm install

4. Inicie o servidor de desenvolvimento:

Acesse a aplicação em http://localhost:{porta}.

## Estrutura do Projeto
A estrutura básica do projeto é a seguinte:

bash
Copiar código
src/
│
├── components/       # Componentes reutilizáveis da aplicação
├── pages/            # Páginas da aplicação (Login, Cadastro, Gerenciamento de Tarefas)
├── services/         # Integração com API e métodos auxiliares
├── App.tsx           # Componente raiz da aplicação
└── main.tsx          # Arquivo de entrada da aplicação
Rotas
/login: Página de login
/register: Página de cadastro
/tasks: Página de gerenciamento de tarefas (rota protegida, disponível apenas para usuários autenticados)

## Como Usar
Login/Cadastro
Acesse a tela de Login ou Cadastro para registrar-se ou fazer login.
Após o login, você será redirecionado para a página de tarefas.
Gerenciamento de Tarefas
Você pode criar, editar, deletar e categorizar tarefas.
A página de tarefas exibe um Empty State quando não há tarefas cadastradas.
As tarefas podem ser filtradas por prioridade ou categoria.
Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

VITE_API_BASE_URL=https://sua-api-url
Essa variável será usada para definir a URL base da API que o front-end consumirá.

## Contribuição
Sinta-se à vontade para abrir issues e enviar pull requests. Sugestões de melhoria e correções de bugs são sempre bem-vindas!

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.