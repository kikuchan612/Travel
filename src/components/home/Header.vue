<template>
  <div>
      <div class="header">
          <div class="header-left">
              <div class='iconfont back-icon'>&#xe624;</div>
          </div>
          <div class="header-input">
              <span class='iconfont'>&#xe632;</span>
              输入城市/景点/游玩主题
          </div>
          <div class="header-right">
              城市
               <span class='iconfont arrow-icon'>&#xe665;</span>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "HomeHeader"
};
</script>
<style lang='less' scoped>
    @import '../../assets/varible.less';
  .header{
      line-height: 0.86rem;
      display: flex;
      background-color: @bgColor;
      color:#fff;
      .header-left{
          width: 0.64rem;
          float: left;
          text-align: center;
          .back-icon{
              font-size: 0.4rem;
          }
      }
      .header-input{
          flex:1;
          height: 0.64rem;
          line-height: 0.64rem;
          margin-top: 0.12rem;
          margin-left: 0.2rem;
          padding-left: 0.2rem;
          background-color: #fff;
          border-radius:0.08rem ;
          color:#ccc;
      }
      .header-right{
          width: 1.24rem;
          float: right;
          text-align: center;
          .arrow-icon{
              font-size: .2rem;
              margin-left: -0.05rem;
          }
      }
  }
</style>