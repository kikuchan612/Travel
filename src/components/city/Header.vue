<template>
  <div class="header">
    城市选择
    <router-link tag="div" to="/" class="iconfont back-icon">&#xe624;</router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/varible.less";
.header {
  position: relative;
  overflow: hidden;
  text-align: center;
  line-height: @headerHeight;
  height: @headerHeight;
  background-color: @bgColor;
  color: #fff;
  font-size: 0.32rem;
  .back-icon {
    font-size: 0.4rem;
    width: 0.64rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>