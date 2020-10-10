<template>
  <div id='category'>
    <nav-bar class='category-nav'><div slot='nav-center'>分类购物</div></nav-bar>
    <div class='side-bar'>
      <side-bar :categorys=categorys @sideClick=sideClick />
    </div>
    <category-goods-view :categorys=categorys :currentTitle=currentTitle />
  </div>
</template>

<script>
  import SideBar from './sidebar/SideBar'
  import CategoryGoodsView from './categoryitem/CategoryGoodsView.vue'

  import {getGoodsByCategory} from 'network/category'

  import NavBar     from 'components/common/navbar/NavBar'
  export default {
    name: 'Category',
    data() {
      return {
        categorys: {
          'Java': {page: 0,list: []},
          '王者荣耀': {page: 0,list: []},
          '英雄联盟': {page: 0,list: []},
          'Python': {page: 0,list: []},
          '男装': {page: 0,list: []},
          '女装': {page: 0,list: []},
          '钟南山': {page: 0,list: []},
          'GO语言': {page: 0,list: []},
          '童装': {page: 0,list: []},
        },
        currentTitle: 'Java'
      }
    },
    methods: {
      sideClick(index){
        this.getGoodsByCategory(Object.keys(this.categorys)[index])
      },
      getGoodsByCategory(keys){
        getGoodsByCategory(keys).then(res => {
          this.categorys[keys].list.push(...res.content)
          this.currentTitle = keys;
        })
      }
    },
    components: {
      SideBar,
      NavBar,
      CategoryGoodsView
    }
  }
</script>

<style scoped>
  #category{
    padding-top: 44px;
    display: flex;

  }
  .category-nav{
    background-color: #f2f2f2;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .side-bar{
    width: 20%;
    
  }
  .right-div{
    width: 79%;
    line-height: 300px;
    background-color: red;
  }
</style>
