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

## Configuring the Backend

The NestJS backend uses environment variables for its Postgres connection. For
local development, create a `.env` file in the project root based on the
provided example:

```bash
cp .env.example .env
```

Edit `.env` and set the following variables to match your local database:

- `DB_HOST` – database host
- `DB_PORT` – database port
- `DB_USER` – database username
- `DB_PASS` – database password
- `DB_NAME` – name of the database

When these variables are set, running the backend with `npm start` will connect
to your configured Postgres instance.
