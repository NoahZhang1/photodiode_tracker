const socket = io('http://localhost:3000')


socket.on('connection', socket => {
    console.log("connected")

})

function createTimeline() {
    var random = new TimeSeries();
    setInterval(function() {
        random.append(Date.now(), Math.random() * 10000);
    }, 500);
    var chart = new SmoothieChart();
    chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
    chart.streamTo(document.getElementById("chart"), 500);
}