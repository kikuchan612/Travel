<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" v-show="keyword">
      <ul>
        <li :key="item.id" v-for="item of list" class="search-item border-bottom" @click="changeCity(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="show">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {mapMutations} from 'vuex'
export default {
  name: "Search",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed:{
      show(){
          return !this.list.length
      }
  },
  watch: {
    keyword() {
      if (this.time) {
        clearTimeout(timer);
      }
      if(!this.keyword){
          this.list=[]
          return
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  methods:{
    changeCity(name){
      this.changeItem(name)
      this.$router.push('/')
    },
    ...mapMutations(['changeItem'])
  },
  mounted() {
    this.scroll = new BScroll(".search-content");
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/varible.less";
.search {
  height: 0.72rem;
  background-color: @bgColor;
  padding: 0 0.1rem;
  .search-input {
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
  }
}
.search-content {
  position: absolute;
  top: 1.58rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: 999;
  background-color: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: #fff;
  }
}
</style>