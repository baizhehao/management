<template>
    <div class="content1_box">
        <div class="content1_tit">
            <h3>仪表盘</h3>
            <p>欢迎回来,萨马拉拉拉</p>
        </div>
        <div class="echart_box">
            <div class="echart_row1" >
                <bar v-for="itme in 4" :key='itme.index'></bar>
            </div>
            <div class="echart_row2">
                <div class="row2_left">
                    <div class="col2_top">
                        <lines v-for='itmes in 2' :key='itmes.index'></lines>
                    </div>
                    <div class="col2_bottom">
                        <div class="col2_box1">
                            <h2>总利润</h2>
                            <p>客户价值</p>
                            <el-progress :percentage="70" color="#71c016" :show-text="false"></el-progress>
                            <p>增加75%</p>
                        </div>
                        <div class="col2_box1">
                             <h2>总利润</h2>
                            <p>客户价值</p>
                            <el-progress :percentage="100" color="#2478fd" :show-text="false"></el-progress>
                            <p>增加100%</p>
                        </div>
                    </div>
                </div>
                <!-- 通知 -->
                <inform />  
            </div>
            <div class="echart_row3">
                <abstract/>
            </div>
        </div>
    </div>
</template>

<script>
import bar from './content1/bar';
import lines from './content1/line';
import inform from './content1/inform';
import abstract from './content1/abstract';

export default {
   components:{
       bar,lines,inform,abstract
   }

}
</script>

<style scoped>
.content1_box{
    padding-left:30px;
    padding-right: 30px;
    flex:1;
    height: 100%;
    overflow-y:auto;
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
    margin-bottom:30px;
}
.row2_left{
    display: flex;
    flex-direction: column;
    width:492px;
}
.col2_top{
    display: flex;
    margin-bottom: 30px;
}
.col2_bottom{
    display:flex;
    margin-bottom:30px;   
}
.col2_box1{
    width:216px;
    height: 92px;
    border:1px solid #dbdbdb;
    margin-right:30px;
    background: #ffffff;
    padding:35px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.echart_row2{
    display:flex;
}
.echart_row3{

}
</style>
