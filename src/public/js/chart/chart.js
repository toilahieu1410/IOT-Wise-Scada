
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

// Buong dot
Highcharts.chart('chart1', {
    chart: {
        backgroundColor:'#0c0b0b40', 
        defaultSeriesType: 'areaspline',
        zoomType: 'x'
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
        categories: arrDateTime,
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
            html: '',
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
        data: nhietDoKhoiThai,
        color:'#09564594',
    }, {
        type: 'column',
        name: 'Nhiệt độ nước',
        data: nhietDoNuoc,
        color:'#666aea85'
    }, {
        type: 'column',
        name: 'Áp suất hơi',
        data: apSuatHoi,
        color:'#b7ea669e'
    }, {
        type: 'spline',
        name: 'Áp suất gió',
        color:'#f7a35c',
        data: apSuatGio,
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
            y: sumNhietDoKhoiThai,
            color:'#09564594',
        }, {
            name: 'Nhiệt độ nước',
            y: sumNhietDoNuoc,
            color:'#666aea85'
        }, {
            name: 'Áp suất hơi',
            y: sumApSuatHoi,
            color:'#b7ea669e'
        }],
        center: [100, 0],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});

// Bieu do nhiet do
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
        pointFormat: '<b>{point.y:.2f}'
    },

    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "Nhiệt độ khói thải",
                    y: sumNhietDoKhoiThai,
                    drilldown: "Nhiệt độ khói thải",
                    color:'#09564594',
                },
                {
                    name: "Nhiệt độ nước",
                    y: sumNhietDoNuoc,
                    drilldown: "Nhiệt độ nước",
                    color:'#666aea85'
                },
              
                {
                    name: "Áp suất hơi",
                    y: sumApSuatHoi,
                    drilldown: 'Áp suất hơi',
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

// Bieu do ap suat
Highcharts.chart('chart3', {
    chart: {
        type: 'column',
         backgroundColor:'#0c0b0b40',
         defaultSeriesType: 'areaspline',
         zoomType: 'x'
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
        categories: arrDateTime,
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
        data: nhietDoNuoc,
        color:'#2ecc50a6',
    }, {
        name: 'Nhiệt độ khói thải',
        data: nhietDoKhoiThai,
        color:'#ea843cb5'
    }, {
        name: 'Áp suất hơi',
        data: apSuatHoi,
        color:'#464fb96e'
    }]
});

// Bieu do chan khong buong dot
Highcharts.chart('chart4', {
    chart: {
        zoomType: 'x',
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
        categories: arrDateTime,
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
            text: 'Áp suất gió',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Chân không buồng đốt',
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
    // legend: {
    //     layout: 'vertical',
    //     align: 'left',
    //     x: 120,
    //     verticalAlign: 'top',
    //     y: 100,
    //     floating: true,
    //     backgroundColor:
    //         Highcharts.defaultOptions.legend.backgroundColor ||
    //         'rgba(255,255,255,0.25)'
    // },
    series: [{
        name: 'Chân không buồng đốt',
        type: 'column',
        yAxis: 1,
        data: chanKhongBuongDot,
        tooltip: {
            valueSuffix: '°C'
        },
        color:'#52bb3f7a'

    }, {
        name: 'Áp suất gió',
        type: 'spline',
        data: apSuatGio,
        tooltip: {
            valueSuffix: '°C'
        },
        color:'#f7a35c'
    }]
});

// Buong dot TS1
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