
const fakeCallData = [
    { date: '09-25', callCount: 120 },
    { date: '09-26', callCount: 150 },
    { date: '09-27', callCount: 180 },
    { date: '09-28', callCount: 100 },
    { date: '09-29', callCount: 200 },
    { date: '09-30', callCount: 220 },
    { date: '10-01', callCount: 170 },
    { date: '10-02', callCount: 190 },
    { date: '10-03', callCount: 160 }
];

function renderCallChart(data) {
    const dates = data.map(item => item.date);
    const callCounts = data.map(item => item.callCount);

    Highcharts.chart('chartContainer', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: dates,
            title: {
                text: null
            }
        },
        yAxis: {
            title: {
                text: 'Số cuộc gọi'
            }
        },
        series: [{
            name: 'Số cuộc gọi',
            data: callCounts,
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, 'rgba(69, 114, 167, 1)'],
                    [1, 'rgba(69, 114, 167, 0.1)']
                ]
            }
        }],
        tooltip: {
            shared: true,
            valueSuffix: ' cuộc gọi'
        }
    });
}

renderCallChart(fakeCallData);

const data = [
    { name: 'Team VV', value: 4000 },
    { name: 'Team GLC', value: 6000 },
    { name: 'Team TW', value: 10000 }
];

// Tạo biểu đồ
Highcharts.chart('chartCheckCard', {
    chart: {
        type: 'column',
    },
    title: {
        text: null
    },
    xAxis: {
        categories: data.map(item => item.name), 
        title: {
            text: null
        },
        labels: {
            style: {
                color: '#c10000', 
                fontWeight: 'bold' 
            }
        }
    },
    yAxis: {
        min: 0,
        max: null, 
        title: {
            text: null 
        },
        labels: {
            enabled: false 
        },
        gridLineWidth: 0 
    },
    series: [{
        name: 'Số vé',
        data: data.map(item => item.value),
        color: '#54bfc7',
        dataLabels: {
            enabled: true, 
            format: `{point.y} vé`, 
            style: {
                fontWeight: 'bold', 
                color: '#000' 
            }
        }
    }],
    plotOptions: {
        column: {
            pointPadding: 0.05,
            groupPadding: 0.1,
            borderWidth: 0
        }
    },
    tooltip: {
        enabled: false 
    }
});


