<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader.vue'
import NavFooter from './../components/NavFooter.vue'
export default {
  components: { 
    OrderHeader,
  NavFooter },

}
</script>

<style>

</style>