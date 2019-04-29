<template>
    <el-container class="maxBox">
        <el-aside class="boxLeft">
            <el-header class="left_tit"><span class="tit_text">A</span>ADMETRO</el-header>
            <!-- <el-input
                placeholder="Dachbostd"
                prefix-icon="el-icon-s-home"
                v-model="input2">
            </el-input> -->
            <el-col :span="24">
                <el-menu
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#1a1d27"
                    text-color="#8c8f9a"
                    active-text-color="#ffffff"
                    unique-opened:true
                    >
                    <router-link to="/content1">
                        <el-menu-item index="1">
                            <i class="el-icon-location"></i>
                            <span>Dachbostd</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/content2">
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">Widget</span>
                        </el-menu-item>
                    </router-link>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">Timeline</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">UI Element</span>
                    </el-menu-item>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Dachbostd</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Dachbostd</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Dachbostd</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="8">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Dachbostd</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-aside>
        <el-main class="boxRight">
            <div class="right_header">
                <div>
                    <i class="el-icon-s-operation"></i>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            Actions<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="right_header_right">
                    <i class="el-icon-search"></i>
                    <i class="el-icon-message"></i>
                    <i class="el-icon-bell"></i>
                    <span class="usPic"></span>
                </div>
            </div>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>


export default {
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.maxBox{
    height: 100%;
}
.boxLeft{
    background:#1a1d27;
    width:240px !important;
}
.boxRight{
    padding:0;
    background:#f0f0f0;
    display:flex;
    flex-direction: column;
}
.left_tit{
    color:#ffffff;
    line-height: 60px;
    padding:0;
    display:flex;
    align-items: center;
    font-weight: 600;
    letter-spacing: 2px;
}
.tit_text{
    display: block;
    width:35px;
    height:35px;
    background:#2478fd;
    font-size: 16px;
    color:#ffffff;
    border-radius: 50%;
    text-align: center;
    line-height:35px;
    margin-left: 15px;
    margin-right: 11px;
}
.el-menu{
    border:none;
}
.right_header{
    display:flex;
    height:60px;
    background:#ffffff;
    align-items: center;
    justify-content: space-between;
    box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);
}
.el-icon-s-operation{
    font-size:18px;
    color:#9b9b9b;
    margin:0 30px;
    line-height: 60px;
}
.el-dropdown{
    line-height: 60px;
}
.popper__arrow{
    display: none !important;
}
.el-popper{
    margin:0;
}
.right_header_right{
    display:flex;
}
.right_header_right i{
    font-size:22px;
    margin:0 15px;
    line-height: 33px;
}
.usPic{
    display: block;
    width:29px;
    height: 29px;
    border-radius: 50%;
    border:2px solid #2478fd;
    margin:0 15px;
}
</style>
