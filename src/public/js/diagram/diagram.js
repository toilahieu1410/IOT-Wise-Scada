/******************************* JS click move item  *************************************/
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


Highcharts.chart('chart-diagram1', {
    chart: {
        type: 'spline',
        zoomType: 'x',
        backgroundColor:'#0c0b0b40', 
      
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {

                    var x = (new Date()).getTime(), // current time
                        y = data.nhietDoKhoiThai;
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },

    time: {
        useUTC: false
    },

    // title: {
    //     text: 'Live random data'
    // },

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
        tickPixelInterval: 150,
        style: {
            color: "#fff"
         }
    },

    yAxis: {
        title: {
            text: 'Value',
            style: {
                color: "#fff"
             }
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
      
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
                    y: data.nhietDoKhoiThai
                });
            }
            return data;
        }())
    }]
});

Highcharts.chart('chart-diagram2', {
    chart: {
        type: 'spline',
        zoomType: 'x',
        backgroundColor:'#0c0b0b40', 
      
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {

                    var x = (new Date()).getTime(), // current time
                        y = data.nhietDoNuoc;
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },

    time: {
        useUTC: false
    },

    // title: {
    //     text: 'Live random data'
    // },

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
        tickPixelInterval: 150,
        style: {
            color: "#fff"
         }
    },

    yAxis: {
        title: {
            text: 'Value',
            style: {
                color: "#fff"
             }
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
      
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
                    y: data.nhietDoNuoc
                });
            }
            return data;
        }())
    }]
});

Highcharts.chart('chart-diagram3', {
    chart: {
        type: 'spline',
        zoomType: 'x',
        backgroundColor:'#0c0b0b40', 
      
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {

                    var x = (new Date()).getTime(), // current time
                        y = data.nhietDoNuoc;
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },

    time: {
        useUTC: false
    },

    // title: {
    //     text: 'Live random data'
    // },

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
        tickPixelInterval: 150,
        style: {
            color: "#fff"
         }
    },

    yAxis: {
        title: {
            text: 'Value',
            style: {
                color: "#fff"
             }
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
      
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
                    y: data.nhietDoNuoc
                });
            }
            return data;
        }())
    }]
});

Highcharts.chart('chart-diagram4', {
    chart: {
        type: 'spline',
        zoomType: 'x',
        backgroundColor:'#0c0b0b40', 
      
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {

                    var x = (new Date()).getTime(), // current time
                        y = data.nhietDoNuoc;
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },

    time: {
        useUTC: false
    },

    // title: {
    //     text: 'Live random data'
    // },

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
        tickPixelInterval: 150,
        style: {
            color: "#fff"
         }
    },

    yAxis: {
        title: {
            text: 'Value',
            style: {
                color: "#fff"
             }
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
      
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
                    y: data.nhietDoNuoc
                });
            }
            return data;
        }())
    }]
});

$(document).ready(function(){
    $(".click-btn1").click(function(){
        $(".hidden-form1").toggle();

    });
    $(".click-btn2").click(function(){
        $(".hidden-form2").toggle();
    });
    $(".click-btn3").click(function(){
        $(".hidden-form3").toggle();
    });
    $(".click-btn4").click(function(){
        $(".hidden-form4").toggle();
    });
});

var items = document.querySelectorAll('.item');
for ( var i=0, len = items.length; i < len; i++ ) {
  var item = items[i];
  // make element draggable with Draggabilly
  var draggie = new Draggabilly( item,  {
    handle: '.handle'
  });
}
