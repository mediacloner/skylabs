const http = require('http')
const url = process.argv[2]

http.get (url, res => {
    res.setEncoding('utf-8')


    res.pipe (bl (err, data) =>{

        console.log ('res.pipe -> on data'
   
        if (err) throw err

console.log(data.toString())
    })

})
