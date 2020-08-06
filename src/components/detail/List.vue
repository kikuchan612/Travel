<template>
  <div>
    <div class="item" :key="index" v-for="(item,index) in categoryList">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    categoryList: Array
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0.02rem;
  .item-title-icon {
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    position: relative;
    top: 0.06rem;
    left: 0.06rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
      no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
  }
}
.item-children {
  padding: 0 0.2rem;
}
</style>