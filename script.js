// const { TimeSeries } = require("smoothie")

// import { TimeSeries, SmoothieChart } from "node_modules/smoothie/smoothie.js";

const socket = io('http://localhost:3000')

var chart = new SmoothieChart();

function createTimeline() {
    var random = new TimeSeries();
    setInterval(function() {
        random.append(Date.now(), Math.random() * 10000);
    }, 500);
    // var chart = new SmoothieChart();
    chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
    chart.streamTo(document.getElementById("chart"), 500);
}

function init() {
    socket.on('message', data => {
        console.log(data)
        createTimeline()
        // var random = new TimeSeries();
        // setInterval(function() {
        //     random.append(Date.now(), data)
        // }, 500);
        // var chart = new SmoothieChart();
        // chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
        // chart.streamTo(document.getElementById("chart"), 500);
    })
}

socket.on('message', data => {
    console.log(data)
    createTimeline()
    // var random = new TimeSeries();
    // setInterval(function() {
    //     random.append(Date.now(), data)
    // }, 500);
    // var chart = new SmoothieChart();
    // chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
    // chart.streamTo(document.getElementById("chart"), 500);
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