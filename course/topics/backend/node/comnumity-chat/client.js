/* const net = require ('net')

const server = net.createServer(socket => {

    socket.on('data', data => console.log (data.toString))
})

const port = process.argv[2]

server.listen (port, () => console.log (`chat server running on port ${port}`)) */



var {socket} = require('net');

var client = new Socket();
client.connect(3000, '192.168.0.16', () => {
	console.log('Connected');
    client.write(`Es una broma! ACK ACK ACK !!!!`);
});

client.on('data', data => console.log(data.toString()))