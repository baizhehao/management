<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
}
body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
html,body{
  height: 100%;
}
body{
	font-family:'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', 'sans-serif','微软雅黑';
}
ul,ol{
	list-style:none;
}
img{
	border: 0;
}
a{
    text-decoration: none;
}
</style>
