import { mongo } from "mongoose"

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require('./queries.ts')
const routes = require('./routes/routes.ts');

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use('/api', routes)

app.get('/', (request: any, response: { json: (arg0: { info: string }) => void }) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.listen(port, () => {
    console.log(`App is running on port ${port}.`)
  })

