const map = require ('through2-map')
const http = require ('http')
const http = require ('http')
const http = require ('http')


const server = http.createServer ((req,res) => {
        if (req.method === 'POST'){
                req.pipe(map(chunk => chunk.toString().toUppercase())).pipe(res)
        }
})

const port = process.argv[2]



server.listen (port, () => console.log (`http uppercasered liten to the port ${port}`))
