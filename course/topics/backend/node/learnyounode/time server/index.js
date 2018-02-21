var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
    let vYYYY =  date.getFullYear()
    let vMM =  date.getMonth()     // starts at 0
    let vDD = date.getDate()      // returns the day of month
    let vhh =  date.getHours()
    let vmm =  date.getMinutes()


    const res


    socket.end(console.log(vYYYY + '-' + vMM + '-' + vDD + ' ' + vhh + ':' + vmm))
})
server.listen(8000)



