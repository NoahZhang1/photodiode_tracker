
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html')

var SerialPort = require("serialport");


const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter:'\r\n'
})

var port = new SerialPort('COM4',{
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
})

port.pipe(parser);

var app = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(index);
})

var io  = require('socket.io').listen(app);


io.on('connection', function(socket) {
    console.log("connected")
    // socket.emit('message', rand)

})

parser.on('data', function(data){

    // socket.emit('message',data)
    // var parsedData = data.split(',')
    // console.log("system time", Date.now())
    // console.log(parsedData[0]);

    io.emit('data', data)

    // io.on('connection', socket => {

    //     socket.emit('message', data)
    // })
})

app.listen(3000);