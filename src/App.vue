<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/home'

export default {
  name: 'App',
  components:{
    home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*   text-align: center;
color: #2c3e50;
margin-top: 60px; */
}
body,html,div,p,ul,a,span{
  margin:0;padding:0;
}
html{font-size:26.667vw;}
</style>
