/* const net = require ('net')

const server = net.createServer(socket => {

    socket.on('data', data => console.log (data.toString))
})

const port = process.argv[2]

server.listen (port, () => console.log (`chat server running on port ${port}`)) */



var net = require('net');

var client = new net.Socket();
client.connect(3000, '192.168.0.16', function() {
	console.log('Connected');
    client.write(`ACK ACK ACK !!!!`);
});

client.on('data', data => console.log(data.toString()))