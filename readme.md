# Teste dev Fullstack QAVI

## Descrição

O teste consiste em criar uma aplicação web que permita o cadastro de anotações.
A aplicação deve permitir o cadastro, edição e exclusão de anotações.

## Tecnologias

- Next.js
- Typescript
- TRPC
- Prisma
- TailwindCSS
- Shadcn UI
- NextAuth.js

## Preparação

Acesse o diretório do projeto

```bash
cd app-notes
```

### Intalação de dependências

```bash
npm install
```

### Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis de ambiente:

```bash
DATABASE_URL="file:./db.sqlite"
NEXTAUTH_URL="http://localhost:3000"
```

### Envs de autenticação Github

Acesse sua conta do Github e crie um OAuth App em: [OAuth Apps](https://github.com/settings/developers). Após criar o app, adicione as seguintes variáveis de ambiente no arquivo .env

```bash
GITHUB_ID="seu_github_id"
GITHUB_SECRET="seu_github_secret"
```

### Popule o banco de dados

```bash
npm run db:push
```

## Execução

```bash
npm run dev
```

## Reposta das questões

Acesso o aquivo [answers.md](answers.md) para visualizar as respostas das questões.
