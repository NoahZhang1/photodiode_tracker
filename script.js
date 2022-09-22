const socket = io('http://localhost:3000')

var chart = new SmoothieChart(),
canvas = document.getElementById('smoothie-chart'),
series = new TimeSeries();

chart.addTimeSeries(series, {lineWidth:2,strokeStyle:'#00ff00'});
chart.streamTo(canvas, 500);

