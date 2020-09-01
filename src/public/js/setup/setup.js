setInterval(function() {
    $.ajax({
        url: 'http://10.10.11.222:1880/diagram_plc_mitsubishi',
        complete: function(json) {
            data = JSON.parse(json.responseText);
    
        },
        error: function() {
            console.log('There was an error!');
        }
    })
}, 500)


Highcharts.chart('container', {
    chart: {
        type: 'spline',
        zoomType: 'x',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {

                    var x = (new Date()).getTime(), // current time
                        y = data.resetThanCongDon;
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },

    time: {
        useUTC: false
    },

    title: {
        text: 'Live random data'
    },

    accessibility: {
        announceNewData: {
            enabled: true,
            minAnnounceInterval: 15000,
            announcementFormatter: function (allSeries, newSeries, newPoint) {
                if (newPoint) {
                    return 'New point added. Value: ' + newPoint.y;
                }
                return false;
            }
        }
    },

    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },

    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },

    legend: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -500; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: data.resetThanCongDon
                });
            }
            return data;
        }())
    }]
});
// function liveChart(nameId, timeRequest, nameChart, unitValue, color, data) {
    
// }

