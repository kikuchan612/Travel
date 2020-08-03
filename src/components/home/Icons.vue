<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide :key="index" v-for="(page,index) in pages">
        <div class="icon" :key="item.id" v-for="item in page">
          <div class="icon-img">
            <img class="img-content" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{
    iconList:Array
  },
  data() {
    return {
      swiperOptions: {}  
    }
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item)
      })
      return pages;
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/varible.less";
@import "../../assets/mixins.less";
.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons {
  margin-top: 0.1rem;
  .icon {
    position: relative;
    width: 25%;
    float: left;
    padding-bottom: 25%;
    overflow: hidden;
    height: 0;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: @fontColor;
      .ellipsis;
    }
  }
}
</style>