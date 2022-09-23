
const io  = require('socket.io')(3000)




//generate random data, this will later be the reading of photodiode
var rand = 100

io.on('connection', socket => {
    console.log("connected")
    socket.emit('message', rand)

})