<p align="center">
    <img src="https://github.com/Artursrossi/template-frontend-nextjs/blob/main/readme-logo.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">TEMPLATE-FRONTEND-NEXTJS</h1></p>
<p align="center">
	<em><code>❯ Template developed by Artur Schincariol Rossi</code></em>
</p>

##  Table of Contents

- [ Overview](#overview)
- [ Features](#features)
- [ Project Structure](#project-structure)
- [ Technologies](#technologies)
- [ Pages](#pages)
- [ Getting Started](#getting-started)
  - [ Prerequisites](#prerequisites)
  - [ Installation](#installation)
  - [ Configuration](#configuration)
  - [ Usage](#usage)

##  Overview

<code>❯ Base frontend template for building application with the NextJS framework.</code>

##  Features

- Code formatters && Linters (Eslint + Prettier)
- Forms Validations
- Theme selector (Light/Dark Mode)
- User Context
- Notification System
- Pre-built Components: Input (using Composition Pattern), Button, Header, Footer

##  Project Structure

```sh
└── template-frontend-nextjs/
    ├── LICENSE
    ├── README.md
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── favicon.ico
    │   ├── logo-quadrada.png
    │   └── logo.png
    ├── src
    │   ├── @types
    │   ├── app
    │   ├── components
    │   ├── contexts
    │   ├── layouts
    │   ├── styles
    │   └── utils
    ├── tailwind.config.ts
    └── tsconfig.json
```

## Technologies

- NextJS
- ReactJS
- TailwindCSS
- React Hook Form
- RadixUI
- Zod
- Prettier && Eslint

## Pages

| Pages     | Access Type                                              |
| --------- | -------------------------------------------------------- |
| Index     | Public Route                                             |
| Register  | Public Route                                             |
| Login     | Public Route                                             |
| Dashboard | Protected Route, Only logged users can access this route |

##  Getting Started

###  Prerequisites

Before getting started with template-frontend-nextjs, ensure your runtime environment meets the following requirements:

- **Version Control System:** [Git](https://git-scm.com/downloads)
- **Javascript Runtime:** [NodeJS](https://nodejs.org/en/download)
- **Package Manager:** [Npm](https://nodejs.org/en/download) (Installed with NodeJS)
- **Backend:** [template-backend-nodejs](https://github.com/Artursrossi/template-backend-nodejs) (Needs to be running for use all functionalities)

###  Installation

1. Clone the template-frontend-nextjs repository:
```sh
❯ git clone https://github.com/Artursrossi/template-frontend-nextjs
```

2. Navigate to the project directory:
```sh
❯ cd template-frontend-nextjs
```

3. Install the project dependencies:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### Configuration

Set the environment variables by creating a .env file using .env.example

###  Usage

Run template-frontend-nextjs using one of the following methods:

**Development environment:**

1. Start project without generating a build:
   **Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```

**Production environment:**

1. Generate a optimized build version:
   **Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run build
```

2. Start project using the optimized build version:
   **Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run start
```