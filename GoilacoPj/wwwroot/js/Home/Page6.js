const data = [
    { month: 'Tháng 7', callCount: 10 },
    { month: 'Tháng 8', callCount: 40 },
    { month: 'Tháng 9', callCount: 60 },
];

// Tạo biểu đồ
Highcharts.chart('chartDoanhThu', {
    chart: {
        type: 'column',
    },
    title: {
        text: null
    },
    xAxis: {
        categories: data.map(item => item.month), 
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
        name: 'Doanh số',
        data: data.map(item => item.callCount),
        color: '#54bfc7',
        dataLabels: {
            enabled: true, 
            format: `{point.y} triệu`, 
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

// $(".progressBox").ProgressBar();

// const myTable = document.getElementById('myTableTest');
// if (myTable) {
//     new simpleDatatables.DataTable(myTable);
// }


