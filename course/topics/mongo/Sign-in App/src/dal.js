const { MongoClient } = require('mongodb')


const dal = {
    submit(objUser){
        MongoClient.connect('mongodb://localhost:27017', (err, conn) 
            if (err) throw err    
            const db = conn.db('signinapp')  
          return  db.collection('users').insert( { objUser } ).then (obj)

    }
  
)}}


module.exports = dal