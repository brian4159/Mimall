<template>
  <div class="modal">
    <div class="mask"></div>
    <div class="modal-dialog">
        <div class="modal-header">
            <span>标题</span>
            <a href="javascript:;" class="icon-close"></a>
        </div>
        <div class="modal-body">
            <slot name="body"> </slot>
        </div>
        <div class="modal-body"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @import './../assets/scss/reset.scss';
  @import './../assets/scss/modal.scss';

</style>