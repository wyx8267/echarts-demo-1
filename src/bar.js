import * as echarts from 'echarts';
// 基于准备好的dom，初始化echarts实例
export default function() {

    let myChart = echarts.init(document.getElementById('bar'));

    $.getJSON(('./data.json'), function (data) {
        myChart.setOption({
            title: {
                text: 'TOP16'
            },
            tooltip: {},
            legend: {
                data: ['得票数']
            },
            xAxis: {
                data: data.data.list.map(member => member.name)
            },
            yAxis: {},
            series: [{
                name: '得票数',
                type: 'bar',
                data: data.data.list.map(member => member.votes)
            }]
        })
    })
    return myChart
}