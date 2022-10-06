var chart1 = new SmoothieChart({interpolation:'step',millisPerPixel:1,maxValue:300,minValue:50});
var L1 = new TimeSeries();

var chart2 = new SmoothieChart({interpolation:'step',millisPerPixel:1,maxValue:300,minValue:50});
var L2 = new TimeSeries();

var chart3 = new SmoothieChart({interpolation:'step',millisPerPixel:1,maxValue:300,minValue:50});
var L3 = new TimeSeries();

var chart4 = new SmoothieChart({interpolation:'step',millisPerPixel:1,maxValue:300,minValue:50});
var L4 = new TimeSeries();

var chart5 = new SmoothieChart({interpolation:'step',millisPerPixel:1,maxValue:300,minValue:50});
var L5 = new TimeSeries();

var chart6 = new SmoothieChart({interpolation:'step',millisPerPixel:1,maxValue:300,minValue:50});
var L6 = new TimeSeries();

var chart7 = new SmoothieChart({interpolation:'step',millisPerPixel:1,maxValue:300,minValue:50});
var L7 = new TimeSeries();

var chart8 = new SmoothieChart({interpolation:'step',millisPerPixel:1,maxValue:300,minValue:50});
var L8 = new TimeSeries();


const socket = io('http://localhost:3000');
curr = parseInt(Date.now())

socket.on('data', function(data){   
    var parsedData = data.split(',')
    var timestamp = curr+parseInt(parsedData[0])
        // console.log("System Date:", Date.now())
        // console.log("arduino date:", timestamp)
        

        // L1.append(timestamp.toString(), parsedData[1])
    L1.append(Date.now(), parsedData[1])
    L2.append(Date.now(), parsedData[1])
    L3.append(Date.now(), parsedData[1])
    L4.append(Date.now(), parsedData[1])
    L5.append(Date.now(), parsedData[1])
    L6.append(Date.now(), parsedData[1])
    L7.append(Date.now(), parsedData[1])
    L8.append(Date.now(), parsedData[1])  
    })

chart1.addTimeSeries(L1, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
chart1.streamTo(document.getElementById("chart1"),0,curr);
chart2.addTimeSeries(L1, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
chart2.streamTo(document.getElementById("chart2"),0,curr);
chart3.addTimeSeries(L1, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
chart3.streamTo(document.getElementById("chart3"),0,curr);
chart4.addTimeSeries(L1, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
chart4.streamTo(document.getElementById("chart4"),0,curr);
chart5.addTimeSeries(L1, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
chart5.streamTo(document.getElementById("chart5"),0,curr);
chart6.addTimeSeries(L1, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
chart6.streamTo(document.getElementById("chart6"),0,curr);
chart7.addTimeSeries(L1, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
chart7.streamTo(document.getElementById("chart7"),0,curr);
chart8.addTimeSeries(L1, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
chart8.streamTo(document.getElementById("chart8"),0,curr);

