# Full Stack Example Project

This repository includes a few small pieces of a full stack application:

- **Python module** in `src/` which exposes a simple greeting function.
- **NestJS backend** located in `backend/`.
- **React frontend** created with Vite under `frontend/`.

## Python Module

Run the `hello.py` script to see the greeting:

```bash
python src/hello.py [name]
```

Replace `[name]` with the desired name. When omitted, the script prints `Hello, World!`.

## Backend (NestJS)

The backend is a basic NestJS application that uses PostgreSQL via TypeORM.

### Setup

```bash
cd backend
npm install
```

Ensure a PostgreSQL database is available and adjust the connection settings in `src/modules/app.module.ts` if necessary.

### Running the server

```bash
npm run start
```

## Frontend (React + Vite)

### Setup

```bash
cd frontend
npm install
```

### Launching the development server

```bash
npm run dev
```

This will start Vite and serve the React application.
