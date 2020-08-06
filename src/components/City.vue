<template>
  <div>
    <city-header></city-header>
    <search :cities="cities"></search>
    <list :hotCities="hotCities" :cities="cities" :letter="letter"></list>
    <alphabet :cities="cities" @change="handleLetter"></alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "../components/city/Header";
import Search from "../components/city/Search";
import List from "../components/city/List";
import Alphabet from "../components/city/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    Search,
    List,
    Alphabet
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      letter: ""
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get("/mock/city.json").then(this.getSuccess);
    },
    getSuccess(res) {
      res = res.data;
      if (res.ret && res.data) {
        this.hotCities = res.data.hotCities;
        this.cities = res.data.cities;
      }
    },
    handleLetter(index) {
      this.letter = index;
    }
  }
};
</script>
<style lang='less' scoped>
</style>