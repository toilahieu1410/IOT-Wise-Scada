
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
        defaultSeriesType: 'areaspline'
    },
    title: {
        text: 'Buồng đốt',
        style: {
        color: "#fff"
        }
    },
    legend: {
        itemStyle: {
           color: '#fff'
        },

     
  },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums'],
        labels: {
            style: {
                color: '#fff'
            }
        },
    },
    yAxis: {
        labels: {
            style: {
                color: '#fff'
            }
        },
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
                ) || 'white'
            }
        }]
    },
    exporting: {
        buttons: {
            contextButton: {
                symbol: 'url(../images/icons/icon_wise-white/icon-download.png)',
                symbolSize: 38,
                symbolY: 30,
                symbolX: 32
            }
        }
    },
    series: [{
        type: 'column',
        name: 'Nhiệt độ khói thải',
        data: [3, 2, 1, 3, 4],
        color:'#09564594',
    }, {
        type: 'column',
        name: 'Nhiệt độ nước',
        data: [2, 3, 5, 7, 6],
        color:'#666aea85'
    }, {
        type: 'column',
        name: 'Áp suất hơi',
        data: [4, 3, 3, 9, 0],
        color:'#b7ea669e'
    }, {
        type: 'spline',
        name: 'Áp suất gió',
        color:'#f7a35c',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: '#f7a35c'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Nhiệt độ khói thải',
            y: 13,
            color:'#09564594',
        }, {
            name: 'Nhiệt độ nước',
            y: 23,
            color:'#666aea85'
        }, {
            name: 'Áp suất hơi',
            y: 19,
            color:'#b7ea669e'
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});

// Create the chart
Highcharts.chart('chart2', {

    chart: {
        type: 'pie',
        backgroundColor:'#0c0b0b40', 
        defaultSeriesType: 'areaspline'
    },

    title: {
        text: 'Biểu đồ nhiệt độ',
        style: {
            color: "#fff"
        }
    },

    exporting: {
        buttons: {
            contextButton: {
                symbol: 'url(../images/icons/icon_wise-white/icon-download.png)',
                symbolSize: 38,
                symbolY: 30,
                symbolX: 32
            }
        }
    },
    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: false,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        // headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "Nhiệt độ khói thải",
                    y: 62.74,
                    drilldown: "Nhiệt độ khói thải",
                    color:'#09564594',
                },
                {
                    name: "Nhiệt độ nước",
                    y: 10.57,
                    drilldown: "Nhiệt độ nước",
                    color:'#666aea85'
                },
              
                {
                    name: "Chân không buồng đốt",
                    y: 7.62,
                    drilldown: 'Chân không buồng đốt',
                    color:'#b7ea669e'
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "Nhiệt độ khói thải",
                id: "nhietdokhoithai",
                data: [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                   
                ]
            },
        
            {
                name: "Nhiệt độ nước",
                id: "nhietdonuoc",
                data: [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }
});


Highcharts.chart('chart3', {
    chart: {
        type: 'column',
         backgroundColor:'#0c0b0b40',
         defaultSeriesType: 'areaspline'
    },
    title: {
        text: 'Biểu đồ áp suất',
        style: {
            color: "#fff"
        }
    },
    legend: {
        itemStyle: {
           color: '#fff'
        },

     
  },
    exporting: {
        buttons: {
            contextButton: {
                symbol: 'url(../images/icons/icon_wise-white/icon-download.png)',
                symbolSize: 38,
                symbolY: 30,
                symbolX: 32
            }
        }
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
        labels: {
            style: {
                color: '#fff'
            }
        },
    },
    yAxis: {
        min: 0,
        labels: {
            style: {
                color: '#fff'
            }
        },

    },
    labels: {
        style: {
            color: '#fff'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Nhiệt độ nước',
        data: [5, 3, 4, 7, 2],
        color:'#2ecc50a6',
    }, {
        name: 'Nhiệt độ khói thải',
        data: [2, 2, 3, 2, 1],
        color:'#ea843cb5'
    }, {
        name: 'Áp suất hơi',
        data: [3, 4, 4, 2, 5],
        color:'#464fb96e'
    }]
});

Highcharts.chart('chart4', {
    chart: {
        zoomType: 'xy',
        backgroundColor:'#0c0b0b40',
    },
    title: {
        text: 'Biểu đồ chân không buồng đốt',
        style: {
            color: "#fff"
        }
    },
    legend: {
        itemStyle: {
           color: '#fff'
        },

     
  },
    exporting: {
        buttons: {
            contextButton: {
                symbol: 'url(../images/icons/icon_wise-white/icon-download.png)',
                symbolSize: 38,
                symbolY: 30,
                symbolX: 32
            }
        }
    },

    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true,
        labels: {
            style: {
                color: '#fff'
            }
        },
    }],
    
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: '#fff'
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Rainfall',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: '#fff'
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        },
        color:'#52bb3f7a'

    }, {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: '°C'
        },
        color:'#f7a35c'
    }]
});

Highcharts.chart('chart5', {
    chart: {
        type: 'area',
        backgroundColor:'#0c0b0b40',
        defaultSeriesType: 'areaspline'
    },
    legend: {
        itemStyle: {
           color: '#fff'
        },

     
  },
    title: {
        text: 'Buồng đốt TS1',
        style: {
            color: "#fff"
            }
    },
    // subtitle: {
    //     text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
    //         'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
    //         'armscontrol.org</a>'
    // },
    exporting: {
        buttons: {
            contextButton: {
                symbol: 'url(../images/icons/icon_wise-white/icon-download.png)',
                symbolSize: 38,
                symbolY: 30,
                symbolX: 32
            }
        }
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            style: {
                color: '#fff'
            }
        },
        accessibility: {
            rangeDescription: 'Range: 1940 to 2017.'
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states',
            style: {
                color: "#fff"
                }
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
              
        },
        style: {
            color: '#fff'
        },
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Buồng đốt TS1',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ],
        color:'#2ecc50a6',
    }, {
        name: 'Buồng đốt TS2',
        data: [ null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
        ],
        color:'#ea843cb5'
    },
]
   
});