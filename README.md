# Template developed by Artur Schincariol Rossi

## Technologies

- NextJS
- ReactJS
- TailwindCSS
- React Hook Form
- RadixUI
- Zod
- Prettier && Eslint

## Features

- Code formatters && Linters (Eslint + Prettier)
- Forms Validations
- Theme selector (Light/Dark Mode)
- User Context
- Notification System
- Pre-built Components: Input (using Composition Pattern), Button, Header, Footer

## 🚀 Pages

| Pages     | Access Type                                              |
| --------- | -------------------------------------------------------- |
| Index     | Public Route                                             |
| Register  | Public Route                                             |
| Login     | Public Route                                             |
| Dashboard | Protected Route, Only logged users can access this route |

## Installation

Requisites

[Backend](https://github.com/Artursrossi/template-backend-nodejs)

Clone Project

```bash
  git clone https://github.com/Artursrossi/template-backend-nodejs.git
  cd template-backend-nodejs
```

Install all dependencies

```bash
  npm install
```

Create .env using .env.example

## Initialization

Development environment

```bash
  npm run dev
```

Production environment

```bash
  npm run build
  npm run start
```
