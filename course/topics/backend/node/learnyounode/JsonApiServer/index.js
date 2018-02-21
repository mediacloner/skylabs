


function cp (from, to){
        const http = require('fs')
        const from = process.argv[2]
        const to = process.argv[3]
        
        if (!from) throw Error ('no origin path specified')
  clearScreenDown      if (!to) throw Error ('no destiny path specified')
        
        fs.readFile (from, function(err, data){
        if (err) throw err
        
                fs.writteFile(to, data, function (err){
                        if (err) throw err               
                })
        })
}

server.listen (8080)


