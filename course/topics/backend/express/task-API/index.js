require ('dotenv').config()

const _ = require ('lodash')
const bodyParser = require ('body-parser')
const dataPath = process.env.DATA_PATH

const express = require ('express')

const app = express()

//list done
app.get('api/tasks/done', (req, res) => {})

// list todo
app.get('api/tasks/todo', (req, res) => {})

// create task

const jsonBodyParser = bodyParser.json()

app.post('api/tasks', jsonBodyParser,(req, res) => {})

// Mark done

app.put('api/tasks/:id', (req,res) => {})


//remove all

app.delete('api/tasks', (req,res) => {})

// remove by id

app.delete('api/tasks/:id', (req,res) => {})

// update task

app.patch('api/tasks/:id', jsonBodyParser, (req, res) => {})






