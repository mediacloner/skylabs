require('dotenv').config()
const { MongoClient } = require('mongodb')
const express = require ('express')
const bodyParser = require ('body-parser')

const app = express()


app.set('view engine', 'pug')
app.get('/', (req, res) => {
res.render('index')

})
const formBodyParser = bodyParser.urlencoded({ extended: false })
app.post('/submit',formBodyParser,(req, res) =>{
    const objUser= 
                    {
                        "name": req.body.name, 
                        "surname": req.body.surname,
                        "email": req.body.email, 
                        "username": req.body.username, 
                        "password": req.body.password
                    } 

    //dal.submit(objUser).then(res.redirect('/'))


    MongoClient.connect('mongodb://localhost:27017', (err, conn) =>{
    if (err) throw err    
    const db = conn.db('signinapp')  
    db.collection('users').insert( { objUser } )}
    
 )})



const port = process.env.PORT

app.listen (port, ()=> console.log(`Web server is running on port ${port}`))