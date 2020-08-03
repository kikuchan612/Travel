<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide :key="item.id" v-for="item in swiperList">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="less" scope>
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  .swiper-img {
    width: 100%;
  }
}
</style>