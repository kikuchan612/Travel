<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeader from "../components/home/Header";
import HomeSwiper from "../components/home/Swiper";
import HomeIcons from "../components/home/Icons";
import Recommend from "../components/home/Recommend";
import Weekend from "../components/home/Weekend";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios.get("/mock/index.json?city=" + this.city).then(this.getSuccess);
    },
    getSuccess(res) {
      res = res.data;
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
      }
    }
  },
  activated() {
    if (this.city !== this.lastCity) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>
<style lang='less' scoped>
</style>