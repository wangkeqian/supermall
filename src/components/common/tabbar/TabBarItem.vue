<template>
  <div class='tab-bar-item' @click='itemClick'>
    <div v-if='!isActive'><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style='isActiveStyle'><slot name='item-text'></slot></div>
    
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    data() {
      return {

      }
    },
    props: {
      path: {
        type: String ,
        default: '/home'
      },
      activeColor: {
        type: String,
        default: '#d81e06'
    }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      isActiveStyle(){
        return this.isActive ? {color : this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path)
      }
    },
    components: {}
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }
  .tab-bar-item img{
    height: 25px;
    width: 25px;
    margin-top: 5px;
    /* 图片下方默认有三个像素，去掉 */
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
