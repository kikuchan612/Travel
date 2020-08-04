<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" :key="item.id" v-for="item in hotCities" @click="changeCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" :key="items.id" v-for="(items,index) in cities" :ref="index">
        <div class="title border-topbottom">{{index}}</div>
        <ul class="item-list">
          <li class="item border-bottom" :key="item.id" v-for="item in items" @click="changeCity(item.name)">{{item.name}}</li>
         </ul> 
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import {mapState,mapMutations} from 'vuex'
export default {
  name: "List",
  props: {
    hotCities: Array,
    cities: Object,
    letter:String
  },
  computed:{
    ...mapState(['city'])
  },
  data() {
    return {};
  },
  mounted() {
    this.scroll = new BScroll(".list");
  },
  watch:{
      letter(){
          if(this.letter){
              const element=this.$refs[this.letter][0]
              this.scroll.scrollToElement(element)
          }
      }
  },
  methods:{
    changeCity(name){
      this.changeItem(name)
      this.$router.push('/')
    },
    ...mapMutations(['changeItem'])
  }
}
</script>
<style lang='less' scoped>
@import "../../assets/varible.less";
.border-topbottom {
  &::before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}
.border-bottom {
  &::before {
    border-color: #ccc;
  }
}
.list {
  position: absolute;
  top: 1.56rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .title {
    line-height: 0.54rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem;
        border: 0.02rem solid #ccc;
        text-align: center;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>