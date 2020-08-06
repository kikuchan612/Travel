<template>
  <div>
    <div class="banner" @click="handleBanner">
      <img class="banner-img" :src="bannerImg" alt />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe64b;</span>
          39
        </div>
      </div>
    </div>
    <fade>
      <common-gallary v-show="showGallary" @close="handleGallary"></common-gallary>
    </fade>
  </div>
</template>

<script>
import commonGallary from "../Gallary";
import Fade from "../Fade";
export default {
  props: {
    bannerImg: String,
    sightName: String
  },
  data() {
    return {
      showGallary: false
    };
  },
  components: {
    commonGallary,
    Fade
  },
  methods: {
    handleBanner() {
      this.showGallary = true;
    },
    handleGallary() {
      this.showGallary = false;
    }
  }
};
</script>
<style lang='less' scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>