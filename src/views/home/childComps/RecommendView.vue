<template>
  <div class='recommend'>
    <div class='recommend-item' v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props: {
      recommends: Array
    },
    data() {
      return {

      }
    },
    methods: {},
    components: {}
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;

    padding: 10px 0 20px ;
    border-bottom: 8px solid #f2f2f2;
  }
  .recommend-item{
    flex: 1
  }
  .recommend-item img{
    margin-bottom: 10px;
    height: 80px;
    width: 80px;
  }
</style>
