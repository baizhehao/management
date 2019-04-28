<template>
    <div class="content1_box">
        <div class="content1_tit">
            <h3>仪表盘</h3>
            <p>欢迎回来,萨马拉拉拉</p>
        </div>
        <div class="echart_box">
            <div class="echart_row1" >
                <div class="clo1" id="echartContainer">

                </div>
                <div class="clo1" id="echartContainer">

                </div>
                <div class="clo1" id="echartContainer">

                </div>
                <div class="clo1" id="echartContainer">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
var echarts = require('echarts');

export default {
    mounted(){
        var myChart = echarts.init(document.getElementById('echartContainer'));
        //绘制图表、
         var option = {
            title: {
                text: '今日销售'
            },
            tooltip: {},
            legend: {
                data:[]
            },
            xAxis: {
                data: ["","","","","",""],
                show:false
            },
            yAxis: {
                show:false
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [3,4,5,7,4,10,9,5,8,4,3,4]
            }],
            pointWidth: 10
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

}
</script>

<style scoped>
.content1_box{
    padding-left:30px;
    padding-right: 30px;
}
.content1_tit h3{
    font-size: 16px;
    color:#3f4047;
    line-height: 34px;

} 
.content1_tit p{
    font-size: 12px;
    color:#a6a6a6;
    line-height: 28px;
}
.echart_row1{
    display:flex;
    justify-content: space-between;
}
.clo1{
    width:216px;
    height: 190px;
    border:1px solid #dbdbdb;
    background: #ffffff;
}
</style>
