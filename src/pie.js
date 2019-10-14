import * as echarts from 'echarts';
export default function () {

    let myChart = echarts.init(document.getElementById('pie'));

    $.getJSON(('./data.json'), function (data) {
        myChart.setOption({
            title: {
                text: 'TOP16',
                left: 'center',
                top: 20,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [{
                name: '得票数',
                type: 'pie',
                radius: '75%',
                data: data.data.list.map(member => {
                    return {
                        value: member.votes,
                        name: member.name
                    }
                })
            }]
        })
    })
    return myChart
}