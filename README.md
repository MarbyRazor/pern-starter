# Pern-Starter

## Table of Contents

- [Pern-Starter](#pern-starter)
  - [Table of Contents](#table-of-contents)
- [What is PERN](#what-is-pern)
- [First Start](#first-start)
- [Node settings](#node-settings)
- [License](#license)
- [Thank you to related projects](#thank-you-to-related-projects)

# What is PERN

PERN is a stack of

- <ins>P</ins>ostgres Database
- <ins>E</ins>xpress
- <ins>R</ins>eact
- <ins>N</ins>ode.js

# First Start

Change the default settings for the `.env` File to your needs

```
SERVER_PORT=3000

ADMINER_PORT=8080

POSTGRES_DB=exampledb
POSTGRES_USER=root
POSTGRES_PASSWORD=example
POSTGRES_PORT=5432
```

Install all dependencies for the Node.js Server

```console
$ cd server
$ npm install
```

You can then run using Docker Compose in the root folder

```console
$ docker-compose up
```

# Node settings

Setting up docker-compose file for production environment
```dockerfile
server:
...
  command: "npm run start"
...
```

Setting up docker-compose file for development environment
```dockerfile
server:
...
  command: "npm run dev"
...
```

# License

MIT

# Thank you to related projects

- [Postgres on Docker](https://hub.docker.com/_/postgres)
- [Adminer on Docker](https://hub.docker.com/_/adminer)
- [Node.js on Docker](https://github.com/nodejs/docker-node)