# Example Python Project

This repository contains a simple Python module located in the `src/` directory. The
module provides a greeting function and can also be executed as a script.

## Running the Code

Run the `hello.py` script directly to see the greeting:

```bash
python src/hello.py [name]
```

Replace `[name]` with your desired name. If no name is provided, the script
defaults to `World`.

## Backend API

Install dependencies and start the NestJS backend:

```bash
cd backend
npm install
npm start
```

Run tests once dependencies are installed:

```bash
npm test
```

## Frontend App

To run the React/Vite frontend:

```bash
cd frontend
npm install
npm run dev
```

## Makefile Helpers

For convenience, a `Makefile` is provided with shortcuts to common tasks:

```bash
# start the backend server
make backend

# start the React frontend
make frontend

# run backend tests
make test-backend
```

These targets simply wrap the same `npm` commands shown above.
