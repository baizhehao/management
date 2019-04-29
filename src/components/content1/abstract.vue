<template>
    <div class="abstract_line">
        <h2>摘要</h2>
        <p>摘要的定义是一个陈述主要观点的陈述。摘要的一个示例是对会议中发生的事情的一种审查。</p>
        <div id="echartId"></div>
    </div>    
</template>

<script>
var echarts = require('echarts');
export default {
    mounted(){
        let myChart = echarts.init(document.getElementById("echartId"));
        let option = {
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ],
                 pie: {
                    center: ['20%', '20%']
                 }
};


        myChart.setOption(option);
    }
}
</script>

<style scoped>
.abstract_line{
    width:413px;
    height: 555px;
    border:1px solid #dbdbdb;
    background: #ffffff;
    border-radius: 3px;
    margin-right: 30px;
    padding:0 25px;
    padding-top: 24px;
}
h2{
    font-size: 16px;
    color:#000000;
    line-height: 16px;
    font-weight: 100;
    margin-bottom: 22px;
}
p{
    font-size: 14px;
    color:#767676;
    line-height: 28px;
}
#echartId{
    width:413px;
    height: 100%;
}
</style>
