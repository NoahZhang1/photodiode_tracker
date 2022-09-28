// const { TimeSeries } = require("smoothie");

const socket = io('http://localhost:3000')

var chart = new SmoothieChart();

function createTimeline() {
    var random = new TimeSeries();

    // var now = Date.now();
    // for (var t = now - 1000 * 50; t <= now; t += 1000) {
    //     addValueToDataSets(t, random, data);
    // }

    random.append(Date.now(), 0);

    // setInterval(function() {
    //     addValueToDataSets(Date.now(), random, data);
    // }, 1000);

    // console.log(data)
    // setInterval(function() {
    //     random.append(Date.now(), data);
    // },0);
    // var chart = new SmoothieChart();
    chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
    chart.streamTo(document.getElementById("chart"), 1000);
    // return random
}

var reading = new TimeSeries();


socket.on('message', data => {

    // chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
    // chart.streamTo(document.getElementById("chart"), 1000);
    //verify data reading


    
    setInterval(function() {
        reading.append(new Date().getTime(), Math.random());
    }, 1000);
    
    // console.log(data)
    

    //create timeseries with passed in data
    // createTimeline()
    // chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
    // chart.streamTo(document.getElementById("chart"), 1000);
    chart.addTimeSeries(reading, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
    chart.streamTo(document.getElementById("chart"), 1000);
})



function addValueToDataSets(time, dataSets, data) {
    dataSets.append(time, data);
  }