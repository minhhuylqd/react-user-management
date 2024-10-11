# User Data Management

## Table of contents
- [Introduction](#introduction)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup .env](#setup-env)
  - [Install dependencies](#install-dependencies)
  - [Run the application](#run-the-application)
- [Technical description](#technical-description)
  - [External libraries](#external-libraries)

## Introduction

Live application: [https://user-management.jonathando.dev/](https://user-management.jonathando.dev/)

The User Data Management application is designed to display user data in a card format with capabilities for both filtering and sorting. This provides an intuitive and accessible interface to manage and view user details effectively.

## Installation

### Prerequisites
Before installing the application, ensure you have the following installed:
- Node.js (recommended version 14.x or above)
- npm (typically comes with Node.js)
- Git (for cloning the repository)

### Setup .env
To run the application locally, you'll need to set up environment variables:
1. Clone the repository:
  ```bash
  git clone https://github.com/your-repository/user-data-management.git
  ```

2.	Navigate into the project directory:
  ```bash
  cd user-data-management
  ```

3. Copy the .env.example file to a new file named .env and update the API URL according to the .env.example template.

### Install dependencies

Install the project dependencies by running the following command:
```bash
npm install
```

### Run the application

To run the application locally, use the following command:
```bash
npm run dev
```

## Technical description

### External libraries


- **Heroicons**: Heroicons provides a comprehensive collection of accessible, high-quality SVG icons designed for web projects. Maintained by the Tailwind CSS team, Heroicons is a great choice for adding icons to your project without worrying about deprecated technologies or accessibility issues.

- **Axios**: Axios is a promise-based HTTP client for the browser and Node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations on data.

- **Zod**: Zod is a TypeScript-first schema declaration and validation library. It allows defining schemas for data and validate it against those schemas. Zod is a great choice for ensuring data integrity and type safety in the application.

- **Prettier**: Prettier is an opinionated code formatter that ensures consistent code style across the project. It automatically formats code according to predefined rules, making it easier to maintain and collaborate on the codebase.