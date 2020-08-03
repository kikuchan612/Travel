<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <div>text</div>
  </div>
</template>

<script>
import HomeHeader from '../components/home/Header'
import HomeSwiper from '../components/home/Swiper'
export default {
  name: "Home",
  components:{
      HomeHeader,
      HomeSwiper
  }
};
</script>
<style lang='less' scoped>
</style>