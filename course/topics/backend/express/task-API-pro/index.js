require('dotenv').config()

const express = require('express')

const taskRouter = require('./scr/api/taskRouter')

const app = express()

app.use('./scr/api', taskRouter)

const port = process.env.PORT

app.listen(port, () => console.log(`Users API running on port ${port}`))