<template>
  <div>
    <router-link to="/" tag="div" class="header-abs" v-show="showabs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showabs" :style="opacityStyle">
      <router-link to="/" tag="div"></router-link>景点详情
      <div class="iconfont header-fixed-back">&#xe624;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailHeader",
  data() {
    return {
      showabs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showabs = false;
      } else {
        this.showabs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/varible.less";
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
  background-color: rgba(0, 0, 0, 0.5);
  .header-abs-back {
    font-size: 0.4rem;
    color: #fff;
  }
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: @headerHeight;
  height: @headerHeight;
  background-color: @bgColor;
  color: #fff;
  font-size: 0.32rem;
  z-index: 2;
  .header-fixed-back {
    font-size: 0.4rem;
    width: 0.64rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>