<template>
  <div class="swiper-container" @click="handleGallary">
    <div class="swiper-wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide :key="index" v-for="(item,index) in gallaryImgs">
          <img class="swiper-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "commonGallary",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        observer: true,
        observeParents: true,
        loop: true
      },
      gallaryImgs: []
    };
  },
  mounted() {
    this.getDetailInfo();
  },
  methods: {
    handleGallary() {
      this.$emit("close");
    },
    getDetailInfo() {
      axios.get("/mock/detail.json").then(this.getSuccess);
    },
    getSuccess(res) {
      res = res.data;
      console.log(res);
      if (res.ret && res.data) {
        this.gallaryImgs = res.data.gallaryImgs;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.swiper-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  .swiper-wrapper {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .swiper-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
    }
  }
}
</style>