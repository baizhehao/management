<template>
    <div class="clo1 echartLines">

    </div>
</template>

<script>
var echarts = require('echarts');
export default {
    mounted(){
        let domes = document.getElementsByClassName("echartLines")
        for(let i=0;i<domes.length;i++){
            let myChart = echarts.init(domes[i]);
            let option = {
                    title:{
                        text:'应收账款',
                        x:20,
                        y:126
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        show:false
                        
                    },
                    yAxis: {
                        type: 'value',
                        show:false
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
            };
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
    margin-right: 31px;
}
</style>
