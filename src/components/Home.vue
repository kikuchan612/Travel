<template>
  <div>
      <home-header :city="city"></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <recommend :recommendList="recommendList"></recommend>
      <weekend :weekendList="weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/home/Header'
import HomeSwiper from '../components/home/Swiper'
import HomeIcons from '../components/home/Icons'
import Recommend from '../components/home/Recommend'
import Weekend from '../components/home/Weekend'
import axios from 'axios'
export default {
  name: "Home",
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      Recommend,
      Weekend
  },
  mounted(){
      this.getHomeInfo()
  },
  data(){
      return{
          city:'',
          swiperList:[],
          iconList:[],
          recommendList:[],
          weekendList:[]
      }
  },
  methods:{
      getHomeInfo(){
          axios.get('/mock/index.json').then(this.getSuccess)
      },
      getSuccess(res){
          res=res.data
          if(res.ret&&res.data){
              this.city=res.data.city
              this.swiperList=res.data.swiperList
              this.iconList=res.data.iconList
              this.recommendList=res.data.recommendList
              this.weekendList=res.data.weekendList
          }

      }
  }
}
</script>
<style lang='less' scoped>
</style>