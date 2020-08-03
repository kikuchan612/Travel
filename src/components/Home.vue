<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <recommend></recommend>
      <weekend></weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/home/Header'
import HomeSwiper from '../components/home/Swiper'
import HomeIcons from '../components/home/Icons'
import Recommend from '../components/home/Recommend'
import Weekend from '../components/home/Weekend'
export default {
  name: "Home",
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      Recommend,
      Weekend
  }
};
</script>
<style lang='less' scoped>
</style>