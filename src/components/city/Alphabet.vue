<template>
  <div>
    <ul class="list">
      <li
        class="item"
        :key="item"
        :ref="item"
        v-for="item in letters"
        @click="findLetter"
        @touchstart.prevent="handleStart"
        @touchmove="handleMove"
        @touchend="handleEnd"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Alphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    findLetter(e) {
      this.$emit("change", e.target.innerText);
    },
    handleStart() {
      this.touchStatus = true;
    },
    handleMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/varible.less";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  right: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: @bgColor;
  }
}
</style>