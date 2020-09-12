
// function hightChart(nameChart, title, xAxis, yAxis, nameSeries, unit) {
//     Highcharts.chart(nameChart, {
//         chart: {
//             type: 'line',
//             zoomType: 'x',
//             backgroundColor:'#0c0b0b40', 
//         },
//         title: {
//             text: title,
//             style: {
//                 color: "#fff"
//              }
//         },
//         xAxis: {
//             categories: xAxis,
//             style: {
//                 color: "#fff"
//              }
//         },
//         yAxis: {
//             title: {
//                 text: unit,
//                 style: {
//                     color: "#fff"
//                  }
//             }
//         },
//         plotOptions: {
//             line: {
//                 dataLabels: {
//                     enabled: true
//                 },
//                 enableMouseTracking: false,
             
//             },
//             style: {
//                 color: "#fff"
//              }
//         },
//         toolTip: {
//             headerFormat: '<b>{series.name}</b><br/>',
//             pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
//         },
//         legend: {
//             enabled: false
//         },
    
//         exporting: {
//             enabled: false
//         },
//         series: [{
//             name: nameSeries,
//             data: yAxis,
//             style: {
//                 color: "#fff"
//              }
//         }]
//     });
// };

// hightChart('chart1', 'Nhiệt độ khói thải', arrDateTime, nhietDoKhoiThai, 'Nhiệt độ khói thải', '(°C)');
// hightChart('chart2', 'Nhiệt độ nước', arrDateTime, nhietDoNuoc, 'Nhiệt độ nước', '(°C)');
// hightChart('chart3', 'Áp suất hơi', arrDateTime, apSuatHoi, 'Áp suất hơi', '(Bar)');
// hightChart('chart4', 'Chân không buồng đốt', arrDateTime, chanKhongBuongDot, 'Chân không buồng đốt', '(mmH2O)');
// hightChart('chart5', 'Buồng đốt TS1', arrDateTime, buongDot_TS1, 'Buồng đốt TS1', '(°C)');
// hightChart('chart6', 'Buồng đốt TS2', arrDateTime, buongDot_TS2, 'Buồng đốt TS2', '(°C)');
// hightChart('chart7', 'Áp suất gió', arrDateTime, apSuatGio, 'Áp suất gió', '(mmH2O)');

Highcharts.chart('chart1', {
    chart: {
        backgroundColor:'#0c0b0b40', 
    },
    title: {
        text: 'Combination chart',
        style: {
        color: "#fff"
        }
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    },
    labels: {
        items: [{
            html: 'Total fruit consumption',
            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Jane',
        data: [3, 2, 1, 3, 4]
    }, {
        type: 'column',
        name: 'John',
        data: [2, 3, 5, 7, 6]
    }, {
        type: 'column',
        name: 'Joe',
        data: [4, 3, 3, 9, 0]
    }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Jane',
            y: 13,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'John',
            y: 23,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'Joe',
            y: 19,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});