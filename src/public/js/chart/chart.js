
function hightChart(nameChart, title, xAxis, yAxis, nameSeries, unit) {
    Highcharts.chart(nameChart, {
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        title: {
            text: title
        },
        xAxis: {
            categories: xAxis
        },
        yAxis: {
            title: {
                text: unit
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: nameSeries,
            data: yAxis
        }]
    });
};

hightChart('chart1', 'Nhiệt độ khói thải', arrDateTime, nhietDoKhoiThai, 'Nhiệt độ khói thải', '(°C)');
hightChart('chart2', 'Nhiệt độ nước', arrDateTime, nhietDoNuoc, 'Nhiệt độ nước', '(°C)');
hightChart('chart3', 'Áp suất hơi', arrDateTime, apSuatHoi, 'Áp suất hơi', '(Bar)');
hightChart('chart4', 'Chân không buồng đốt', arrDateTime, chanKhongBuongDot, 'Chân không buồng đốt', '(mmH2O)');
hightChart('chart5', 'Buồng đốt TS1', arrDateTime, buongDot_TS1, 'Buồng đốt TS1', '(°C)');
hightChart('chart6', 'Buồng đốt TS2', arrDateTime, buongDot_TS2, 'Buồng đốt TS2', '(°C)');
hightChart('chart7', 'Áp suất gió', arrDateTime, apSuatGio, 'Áp suất gió', '(mmH2O)');