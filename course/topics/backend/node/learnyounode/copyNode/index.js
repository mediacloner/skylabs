const http = require('http')
const url = require ('url')


const server = http.createServer ((req, res) => {
        const _url = url.parse(req.url)

        if (_url.pathname === 'api/parsetime'){
                const date = new Date (_url.query.iso)

                const data = {
                        hour: date.getHours(),
                        minute: date.getMinutes(),
                        seconds: date.getSeconds()

                }

                res.end(JSON.stringify('data'))
                res.writeHead(200, {'Content-Type': 'alication/json'})
        }else{
                res.writeHead { 405, 'Hello I cannot process that request :C'}
        }





        const date = new Date (_url.query.iso)

        res.write ('<h1> Hello world </h1>')
         res.end('ok')



})


const port = process.argv[2]

server.listen (port, () => console.log(`I listen you request on ${port}`))
