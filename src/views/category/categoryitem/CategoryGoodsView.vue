<template>
  <div class='item'>
    <div class=item-goods v-for='item in currentCategory' >
      <img :src="`http:${item.img}`" alt="">
      <span>{{item.name | titleFilter}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CategoryGoodsView',
    props: {
      categorys: Object,
      currentTitle: {
        type: String,
        default: 'Java'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      currentCategory(){ 
        console.log('currentCategorys:'+this.categorys);
        console.log('currentTitle:'+this.currentTitle);
        
        return this.categorys[this.currentTitle].list;
      }
    },
    methods: {
     
    },
    filters:{
      titleFilter(str){if(str.length == 0) return ''
        return str.length > 12 ? str.substring(0,12) : str
      }
    },
    components: {
      
    }
  }
</script>

<style scoped>
  .item{
    flex-wrap: wrap;
    display: flex;
    overflow: scroll;
    height: 700px;
  }
  .item-goods{
    margin-left: 10px;
    float: left;
    width: 45%;
    box-shadow: 0 0 5 0;
    
  }
  .item-goods img{
    width: 90%;
  }
</style>
