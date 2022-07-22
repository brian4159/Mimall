<!-- eslint-disable prettier/prettier -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index.js'
export default {
  name: "App",
  data(){
    return{

    }
  },
  mounted(){
    // storage.setItem('a',1)
   
    storage.clear('a')
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
