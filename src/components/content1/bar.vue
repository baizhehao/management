<template>
    <div class="clo1 echartContainer">
    </div>
</template>

<script>
var echarts = require('echarts');
export default {
     mounted(){
        let dome = document.getElementsByClassName('echartContainer');
        let barColor = ["#007bff","#560bd0","#560bd0","#007bff"]
        let barTit = ['今日销售','本周销售','本月销售','今年销售',]
        for(let i=0;i<dome.length;i++){

        
        var myChart = echarts.init(dome[i]);
        //绘制图表、
         var option = {
            title: {
                text:` ${barTit[i]}`,    //主标题
                subtext:'2,369.78',   //副标题
                x:"20px",                //主标题位置
                y:"24px",
                itemGap:15,
                textStyle:{              //主标题的样式
                    fontSize:16,
                    fontWeight:400,
                    lineHight:16
                },
                subtextStyle:{             //副标题的样式
                    fontSize:14,
                    fontWeight:600,
                    color:"#414249"
                }
            },
            tooltip: {},
            legend: {
                data:[]
            },
            label:{},
            grid:{                    //改变图与容器之间的距离
                left:42,
                bottom:28
            },
            xAxis: { 
                data: ["","","","","",""],
                max:13,               //调整X轴的间距
                show:false           //隐藏X轴的坐标
            },
            yAxis: {
                show:false           //隐藏Y轴的坐标
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [3,4,5,7,4,20,9,5,15,4,3,4,8,4],
                barWidth:10,
                // color:function(params){     //给每个柱子设置不同的颜色；
                //     var colorList=["#007bff"];
                //     return colorList[params.dataIndex]
                // }
                color:[` ${barColor[i]}`]//改变柱子的颜色
            }],
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    }
}
</script>

<style scoped>
.clo1{
    width:216px;
    height: 190px;
    border:1px solid #dbdbdb;
    background: #ffffff;
    border-radius: 3px;
}

</style>
