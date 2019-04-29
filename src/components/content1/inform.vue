<template>
    <div class="informBox">
        <h2>通知<i class="el-icon-more-outline"></i></h2>
        <div class="inform_content">
            <div class="inform_one">
                <span class="imform_tit_text"><i class="el-icon-user-solid"></i>我们有适合你的东西!</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="inform_one">
                <span class="imform_tit_text"><i class="el-icon-user-solid"></i>我们有适合你的东西!</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="inform_one">
                <span class="imform_tit_text"><i class="el-icon-user-solid"></i>我们有适合你的东西!</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="inform_one">
                <span class="imform_tit_text"><i class="el-icon-user-solid"></i>我们有适合你的东西!</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="inform_one">
                <span class="imform_tit_text"><i class="el-icon-user-solid"></i>我们有适合你的东西!</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="inform_one">
                <span class="imform_tit_text"><i class="el-icon-user-solid"></i>我们有适合你的东西!</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="inform_one">
                <span class="imform_tit_text"><i class="el-icon-user-solid"></i>我们有适合你的东西!</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.informBox{
    width:464px;
    height: 391px;
    border:1px solid #dbdbdb;
    border-radius: 3px;
    padding:0 20px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
}
h2{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    height: 70px;
    line-height: 70px;
}
h2 .el-icon-more-outline{
    font-size: 28px;
    color:#4089fd;
    line-height: 70px;
}
.inform_content{
    height:100%;
    flex:1;
    overflow-y:auto;
}
.inform_one{
    height:62px;
    border-top:1px solid #dee2e6;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    
}
.el-icon-user-solid{
    font-size: 30px;
    color:#28a745;
    line-height: 62px;
    padding-left: 16px;
    padding-right: 10px;
    vertical-align: middle;
}
.imform_tit_text{
    font-size: 16px;
    color:#9b9b9b;
    line-height: 62px;
}
.el-icon-arrow-right{
    font-size: 18px;
    color:#4c4d4d;
    line-height: 62px;
    font-weight: 600;
    padding-right: 26px;
}
</style>
