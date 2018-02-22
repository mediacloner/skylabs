const express = require('express')
const moment = require ('moment')
const bodyParser = require ('body-parser')

const app = express()

app.get('/', (req, res) => res.send('Hello, World'))

app.post('/', (req, res) => res.send('Hello, World'))

app.put('/', (req, res) => res.send('Hello, World'))

app.get('/api/parsetime', (req, res) => {

    const date = moment (req.query.iso)

    const data = {
        hour: date.hours(),
        minute: date.minutes(),
        second: date.seconds()
    }

    res.json(data)

})

const textBodyParser = bodyParser.text()
app.post('/helloworld',textBodyParser, (req, res) => {

    res.send(req.body)
})

const jsonBodyParser = bodyParser.json()
app.post('/helloworld/json',jsonBodyParser, (req, res) => {

    res.json(req.body)
})

const urlencodedParser = bodyParser.urlencoded({extended:false})


app.post('/helloworld/login',urlencodedParser, (req, res) => {

    res.send(`${req.body.username}: ${req.body.password}`)
})



const port = process.argv[2]

app.listen(port, () => console.log (`landing server running on port ${port}`))

// TEST http://localhost:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z
// TEST http://localhost:8000/api/unixtime?iso=2013-08-10T12:10:15.474Z