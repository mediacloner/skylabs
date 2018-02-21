const http = require('http');
const fs = requiere ('fs')

var server = http.createServer(function (req, res) {
        fs.createReadStream(file).pipe(res)
        res.end ('ok :)')
})

const port = process.argv[2]
const file = process.argv[3]
server.listen(port, () => console.log (`file server running on port ${port}`))

server.listen(8000)