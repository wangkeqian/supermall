<template>
  <div class='side-bar'>
    <ul>
      <li>分类</li>
      <li v-for="(item,index) in sideCategorys" @click='itemClick(index)'>{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      categorys: Object
    },
    computed: {
      sideCategorys(){
        return Object.keys(this.categorys)
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
        this.$emit('sideClick',index)
      }
    },
    components: {}
  }
</script>

<style scoped>
  li{
    height: 40px;
    width: 70px;
  
    border: 1px solid black;
    text-align: center;
    padding-top: 10px;
  }
  li:hover{
    background-color: cyan;
  }
  /* .side-bar{
    width: 20%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
  } */
</style>
