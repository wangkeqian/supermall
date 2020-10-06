<template>
  <div class='tab-control'>
    <div v-for='(item,index) in titles' class='tab-control-item'
        :class="{active : index === currentIndex}" @click='itemClick(index)'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default: () => ['空白1','空白2','空白3']
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
      }
    },
    components: {}
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;

    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
    line-height: 40px;
    width: 40px;
  }
  .active{
    color: red;
  }
  .active span {
    border-bottom: 3px solid red;
    padding: 5px;
  }
</style>
