<template>
  <div id='home'>
    <nav-bar class='home-nav'><div slot='nav-center'>首页</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view></feature-view>
    <tab-control class='tab-control'
      :titles="['流行','新款','精选']"
      @tabClick=tabClick />
    <goods-list :goods="currentGoods" />
  </div>
</template>

<script>
  

  import HomeSwiper     from './childComps/HomeSwiper'
  import RecommendView  from './childComps/RecommendView'
  import FeatureView    from './childComps/FeatureView'

  import NavBar     from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl';
  import GoodsList  from 'components/content/goods/GoodsList'

  import { getHomeMultidata, getHomeGoods } from 'network/home';
  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0,list: [] },
          'new': {page: 0,list: [] },
          'sell': {page: 0,list: [] }
        },
        currentType: 'pop'
      }
    },
    created() {
      this.getHomeMultidata()
      //
      this.getHomeGoods('pop')
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
    },
    computed: {
      currentGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods: {
      //事件监听的方法

      tabClick(index){
        this.currentType = Object.keys(this.goods)[index]
        
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      // 网络相关的方法
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        console.log(this.currentType);
        console.log('-------');
        
        console.log(type);
        
        const page2 = this.goods[type].page + 1
        getHomeGoods(type,page2).then(res =>{ 
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page ++;
      })
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: #f2f2f2;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }

</style>
