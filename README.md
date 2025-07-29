# Example Python Project

This repository contains a simple Python module located in the `src/` directory.
The module provides a greeting function and can also be executed as a script.

## Running the Code

Run the `hello.py` script directly to see the greeting:

```bash
python src/hello.py [name]
```

Replace `[name]` with your desired name. If no name is provided, the script
defaults to `World`.

## Backend Setup

Install dependencies and start the NestJS backend:

```bash
cd backend
npm install
npm start
```

The backend expects a PostgreSQL database and reads connection details from environment variables:

- `DB_HOST` (default `localhost`)
- `DB_PORT` (default `5432`)
- `DB_USERNAME` (default `postgres`)
- `DB_PASSWORD` (default `postgres`)
- `DB_NAME` (default `fieldservice`)

## Frontend Setup

Install dependencies and run the React app with Vite:

```bash
cd frontend
npm install
npm run dev
```
