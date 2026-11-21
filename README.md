# Express.js Backend Architecture

A foundational Express.js project focused on understanding and implementing a modular, maintainable backend architecture using Node.js and ES Modules.

## Overview

This project demonstrates how to structure an Express application using separation of concerns and reusable components. Instead of placing all application logic inside a single server file, responsibilities are divided into dedicated modules.

The application currently uses an in-memory array as its data source to demonstrate basic CRUD operations.

## Project Structure

```text
src/
├── controllers/
│   └── controller.js
├── data/
│   └── data.js
├── middlewares/
│   └── errorHandler.js
│   └── logger.js
├── routes/
│   └── routes.js
├── utils/
│   └── AppError.js
│   └── asyncCatcher.js
├── app.js
└── server.js
```

## Concepts Implemented

- **Separation of Concerns:** Dividing application logic into controllers, routes, middleware, and configuration files.
- **Modular Routing:** Using Express Router to define and organize API endpoints.
- **Controller Pattern:** Keeping request-handling logic separate from route definitions.
- **Global Middleware:** Implementing request logging and JSON body parsing.
- **Async Error Handling:** Using a reusable `asyncCatcher` wrapper to forward asynchronous errors.
- **Centralized Error Handling:** Managing application errors through a dedicated error-handling middleware.
- **ES Modules:** Using modern JavaScript `import` and `export` syntax.
- **Server Configuration:** Separating Express application configuration (`app.js`) from server initialization (`server.js`).

## API Endpoints

Base URL: `/api/v1/hello`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Retrieve all objects |
| GET | `/:id` | Retrieve an object by ID |
| POST | `/` | Create a new object |
| PUT | `/:id` | Update an existing object |
| DELETE | `/:id` | Delete an object by ID |

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
cd express-architecture
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The server runs on port `5000`.

## Current Limitations

- Data is stored in memory and resets whenever the server restarts.
- Database integration and persistent storage are not implemented yet.

## Future Scope

The project serves as a foundation for further backend development, including MongoDB integration, improved validation, scalable error handling, and a more robust application architecture.
