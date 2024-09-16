# `npx nodejs-docker-starter my-app`

# Nodejs-Docker-Postgres-starter

A starter project for building Rest APIs with Node.js, Typescript, PostgreSQL, and Drizzle ORM. It provides a basic folder structure and starter files to help you get started with your own Rest API quickly and easily.

## Features

- Typescript for type safety
- PostgreSQL for data storage
- Drizzle ORM for database operations
- Swagger for API documentation
- Inversify for dependency injection
- Express for handling HTTP requests
- Docker support for easy deployment

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL
- Docker

### Installation

1. Installation command: `npx nodejs-docker-starter my-app`
2. Install necessary dependencies: `cd my-app && pnpm install`
3. Rename `.env.example` to `.env` and update the environment variables:
   ```
   DATABASE_URL=your_database_url
   PORT=your_preferred_port
   NODE_ENV=development
   ```

### Running the Application

1. Start the server: `docker compose up`
2. Access the API documentation: Open `http://localhost:<PORT>/api-docs` in your browser
3. User routes are available at: `http://localhost:<PORT>/api/user`

### Testing

1. Run tests: `pnpm test`

### Folder Structure

```
my-app/
├── src/
│   ├── application/
│   │   ├── dto/
│   │   ├── services/
│   │   └── useCases/
│   ├── common/
│   │   └── config/
│   ├── domain/
│   │   ├── entities/
│   │   └── interfaces/
│   ├── infrastructure/
│   │   ├── adapters/
│   │   │   ├── errors/
│   │   │   ├── inversify/
│   │   │   ├── logger/
│   │   │   └── swagger/
│   │   ├── database/
│   │   │   ├── migration/
│   │   │   ├── repositories/
│   │   │   └── schema/
│   │   └── server.ts
│   ├── presentation/
│   │   ├── http/
│   │   │   ├── controllers/
│   │   │   └── routes/
│   │   └── middlewares/
│   └── index.ts
├── .docker

```

### API Routes

- API Documentation: `/api-docs`
- User Routes: `/api/user`
  - Create User: POST `/api/user/create`

For detailed API documentation and testing, visit the Swagger UI at `/api-docs` after starting the server.

### Contributing

We welcome contributions to improve this starter project. If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with clear, descriptive messages
4. Push your changes to your fork
5. Create a pull request to the main repository

For more detailed information on contributing, please see our [CONTRIBUTING.md](CONTRIBUTING.md) file.

### License

This project is licensed under the GPL-3.0 License - see the [LICENSE](https://github.com/MunavvarSinan/nodejs-prisma-docker-postgres-starter/blob/main/LICENSE) file for details.
