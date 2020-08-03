<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" :key="item.id" v-for="item in recommendList">
        <img
          class="item-img"
          :src="item.imgUrl"
          alt
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommendList:Array
  },
  data() {
    return {
      
    }
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
  display: flex;
  overflow: hidden;
  height: 1.9rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
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
    .item-button {
      background-color: #ff9300;
      padding: 0.05rem 0.1rem;
      border-radius: 0.06rem;
      margin-top: 0.2rem;
      color: #fff;
      font-size: 0.2rem;
    }
  }
}
</style>