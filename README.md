# RESTAURANT BACKEND

## Description

This is the backend for a system to manage orders in a restaurant.

The goal is to optimize the activities of waiters and the kitchen, making the service process more efficient and organized.

## Technologies Used

- **Language:** TypeScript
- **Framework:** Node.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Dependencies:**
    - bcryptjs
    - cors
    - dotenv
    - express
    - express-async-errors
    - jsonwebtoken
    - multer

**DevDependencies:**

```json
{
  "ts-node-dev": "^2.0.0",
  "typescript": "^5.7.2",
  "@types/bcrypt": "^5.0.2",
  "@types/bcryptjs": "^2.4.6",
  "@types/cors": "^2.8.17",
  "@types/express": "^4.17.13",
  "@types/jsonwebtoken": "^9.0.7",
  "@types/multer": "^1.4.12"
}
```

## Requirements for Execution
- Node.js (version 16 or higher)
- Yarn (or npm)
- PostgreSQL

## Installation

### Steps to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/restaurant-backend.git
    cd restaurant-backend
    ```

2. Install dependencies:

    If using Yarn:
    ```bash
    yarn install
    ```

    Or with npm:
    ```bash
    npm install
    ```

3. Environment setup

    Create a `.env` file in the project root and configure environment variables, such as:
    ```txt
    DATABASE_URL="postgresql://user:password@localhost:5432/pizzeria"
    JWT_SECRET="your-secret-key"
    ```

4. Run Prisma migrations to set up the database:
    ```bash
    npx prisma migrate dev
    ```

5. Run the application:

    To run the server locally, execute:
    ```bash
    yarn dev
    ```

    Or with npm:
    ```bash
    npm run dev
    ```

## Project Structure

- **src/**
    - **controllers/**: Controllers for each resource
    - **middlewares/**: Custom middlewares
    - **services/**: Business logic
    - **prisma/**: Prisma client and schema files
    - **config/**: Global configurations
    - **routes.ts**: API route definitions
    - **server.ts**: Server initialization

## Features

- **User**
    - Register new users
    - Log in users and generate JWT token
    - Verify authentication for private routes
    - Show logged-in user details

- **Category**
    - Create a new category
    - List all categories

- **Product**
    - Create a product linked to a category
    - List products from a specific category

- **Order**
    - Open and close an order
    - Add and remove items from the order
    - Send the order to production
    - List all sent orders
    - Show details of a sent order
    - Complete an order








