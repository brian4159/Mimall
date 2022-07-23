<!-- eslint-disable prettier/prettier -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    // this.axios.get("/mock/user/login.json").then((res) =>{
    //   this.res = res;

    //通过easy-mock平台实现mock
    // this.axios.get("/mock/user/login.json").then((res) =>{
    //   this.res = res;

    //本地集成mockjs
    // this.axios.get("/mock/user/login.json").then((res) =>{
    // this.res = res;
    // })
  }
};
</script>

<style>
@import './assets/scss/reset.scss';
</style>
