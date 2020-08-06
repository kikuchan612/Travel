<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <div class="con">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./detail/Banner";
import DetailHeader from "./detail/Header";
import DetailList from "./detail/List";
import axios from "axios";
export default {
  data() {
    return {
      categoryList: [],
      sightName: "",
      bannerImg: ""
    };
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted() {
    this.getDetailInfo();
  },
  methods: {
    getDetailInfo() {
      axios.get("/mock/detail.json").then(this.getSuccess);
    },
    getSuccess(res) {
      res = res.data;
      if (res.ret && res.data) {
        this.categoryList = res.data.categoryList;
        this.sightName = res.data.sightName;
        this.bannerImg = res.data.bannerImg;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.con {
  height: 50rem;
}
</style>