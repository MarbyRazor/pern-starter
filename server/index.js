const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./database')
const internal_port = 3000 // defined in docker compose file


app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/pool', db.getPool)

app.listen(internal_port, () => {
  console.log(`App is running on port ${process.env.SERVER_PORT}.`)
});
