# Micro Frontend Module Federation

Aplicação em ReactJS com micro front-end utilizando Module Federation.

## 📂 Estrutura do projeto

```bash
├── apps
│   ├── shell
│   ├── header
│   ├── cards
│   └── footer
└── packages
    ├── context
    ├── types
    └── ui
```

- apps: Micro front-ends
- shell: Aplicação que gerencia os micro front-ends
- header: Aplicação que contém o header
- cards: Aplicação que contém os cards dos produtos
- footer: Aplicação que contém o footer
- packages: Pacotes compartilhados entre os micro front-ends
- context: Aplicação que compartilha a store entre os micro front-ends
- types: Aplicação que compartilha a tipagem entre os micro front-ends
- ui: Aplicação que compartilha os componentes entre os micro front-ends

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

- NodeJS 22.12.0 ou maior instalado na máquina local

### 🔧 Rodar o projeto localmente

Clonar ou baixar o projeto

```bash
git clone https://github.com/rafaelodassi/micro-frontend-module-federation.git
```

Ir para a pasta do projeto

```bash
cd micro-frontend-module-federation
```

Instalar dependências

```bash
npm install
```

Rodar o projeto local

```bash
npm run serve
```

Abrir a url do projeto no navegador

```bash
http://localhost:3000/
```

### 📦 Rodar cada micro front-end separadamente

```bash
cd micro-frontend-module-federation/apps/shell
npm install
npm run start # Rodar para dev
npm run serve # Rodar para prod
# Abrir http://localhost:3000/

cd micro-frontend-module-federation/apps/header
npm install
npm run start # Rodar para dev
npm run serve # Rodar para prod
# Abrir http://localhost:3001/

cd micro-frontend-module-federation/apps/cards
npm install
npm run start # Rodar para dev
npm run serve # Rodar para prod
# Abrir http://localhost:3002/

cd micro-frontend-module-federation/apps/footer
npm install
npm run start # Rodar para dev
npm run serve # Rodar para prod
# Abrir http://localhost:3003/
```

## 🛠️ Construído com

Principais ferramentas utilizadas no projeto

- [React](https://react.dev/) - Biblioteca para web e interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) - Tipagem e padrão de código
- [Module Federation](https://module-federation.io/) - Arquitetura Micro-frontend
- [Vite](https://vite.dev/) - Ferramenta para a construção da estrutura da aplicação
- [Tailwindcss](https://tailwindcss.com/) - CSS
- [ESLint](https://eslint.org/) - Análise de código
- [Prettier](https://prettier.io/) - Formatação de código
- [Jest](https://jestjs.io/pt-BR/) - Framework de Testes
