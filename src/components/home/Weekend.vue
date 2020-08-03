<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" :key="item.id" v-for="item in weekendList">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    weekendList:Array
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/mixins.less";
.title {
  line-height: 0.8rem;
  background-color: #ccc;
  margin-top: 0.2rem;
  text-indent: 0.2rem;
}
.item {
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    .item-img {
      width: 100%;
      padding-top: 0.1rem;
    }
  }
  .item-info {
    padding: 0.1rem;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      .ellipsis;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      .ellipsis;
    }
  }
}
</style>