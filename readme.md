# Teste dev Fullstack QAVI

## Descrição

O teste consiste em criar uma aplicação web que permita o cadastro de anotações.
A aplicação deve permitir o cadastro, edição e exclusão de anotações.

## App em produção
Acesse [esse link](https://qavi-test.vercel.app/) para visualizar ver o app em produção.
> Como a Vercel não suporta SQLite, foi feita uma integração com o [Postgres da Vercel](https://vercel.com/docs/storage/vercel-postgres)

## Screenshots
![qavi-test vercel app_home](https://github.com/frankllin15/qavi-test-/assets/65142775/87b2dc2f-da1d-4d08-8730-eb3ff09a316d)
![qavi-test vercel app_](https://github.com/frankllin15/qavi-test-/assets/65142775/44a8357e-9f76-48d9-8502-b0a33b0ce78a)
![qavi-test vercel app_ edit](https://github.com/frankllin15/qavi-test-/assets/65142775/dcc625a5-3acd-48e2-8e49-b04eb6856123)
![qavi-test vercel app_ delete](https://github.com/frankllin15/qavi-test-/assets/65142775/6f41e6bc-e52d-44f1-822b-1c2e0a785664)

## Respostas das questões
Acesso o aquivo [answers.md](answers.md) para visualizar as respostas das questões.

## Tecnologias
- Next.js
- Typescript
- TRPC
- Prisma
- TailwindCSS
- Shadcn UI
- NextAuth.js

## Execução local

### Intalação de dependências

```bash
npm install
```

### Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

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
