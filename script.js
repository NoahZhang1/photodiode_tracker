const socket = io('http://localhost:3000')

var chart = new SmoothieChart();

function createTimeline(data) {
    var random = new TimeSeries();
    console.log(data)
    setInterval(function() {
        random.append(Date.now(), data+Math.random()*100);
    }, 500);
    // var chart = new SmoothieChart();
    chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
    chart.streamTo(document.getElementById("chart"), 500);
}


socket.on('message', data => {

    //verify data reading
    // console.log(data)

    //create timeseries with passed in data
    createTimeline(data)
})

// function createTimeline() {
//     var random = new TimeSeries();
//     setInterval(function() {
//         random.append(Date.now(), Math.random() * 10000);
//     }, 500);
//     var chart = new SmoothieChart();
//     chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
//     chart.streamTo(document.getElementById("chart"), 500);
// }