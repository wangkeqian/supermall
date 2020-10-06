<template>
  <div class='nav-bar'>
    <div class='left'><slot name='nav-left'></slot></div>
    <div class='center'><slot name='nav-center'></slot></div>
    <div class='right'><slot name='nav-right' ></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {

      }
    },
    methods: {},
    components: {}
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    /* 导航高度一般是44px */
    line-height: 44px; 
    text-align: center;
    box-shadow: 0 1px 1px rpba(100,100,100,.1);
  }
  .left, .right{
    width: 60px;
    
  }
  .center{
    /* 将剩余布局全部占据 */
    flex: 1;
  }
</style>
