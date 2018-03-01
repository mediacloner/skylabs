require('dotenv').config()
const { MongoClient } = require('mongodb')
const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()


 MongoClient.connect('mongodb://localhost:27017', (err, conn) => {
   if (err) throw err    
   const dbConn = conn.db('signinapp')    
   app.set('view engine', 'pug')
   app.get('/', (req, res) => {
   res.render('index')
   }) 
   const formBodyParser = bodyParser.urlencoded({ extended: false })
 
   app.post('/submit',formBodyParser,(req, res) =>{
        console.log(req.body)
        // const objUser= 
        //              {
        //                  "name": req.body.name, 
        //                  "surname": req.body.surname,
        //                  "email": req.body.email, 
        //                  "username": req.body.username, 
        //                  "password": req.body.password
        //              } 
                     
        // db.users.insert({objUser}, {w: 1}, function(err, records){
        //     console.log("Record added as "+records[0]._id);
        //     });

        dbConn.collection('users').insertOne(req.body)
        res.render('index')
       })
                

   const port = process.env.PORT    
   app.listen(port, () => console.log(`server runnning on port ${port}`))    
   process.on('SIGINT', () => {
       console.log('stopping server')        
       conn.close()        
       process.exit()
   })

})