<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue'
import OrderHeader from '@/components/OrderHeader.vue'

export default {
    name:'order',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>

<style>

</style>