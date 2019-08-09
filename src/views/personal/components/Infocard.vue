<template>
  <div class="infocard">
    <div class="avast-head">
      <router-link to="/editbroker">
        <img src="../../../static/images/avatar.png"
             alt="">
        <span>未认证</span>
      </router-link>
    </div>
    <div class="avast-info">
      <div class="avast-info-title">
        <span>我是代理人</span>
      </div>
      <div class="avast-info-bar">
        <em>V1</em>
        <p class="bind"><span class="iconfont">&#xe635;</span>已绑定</p>
        <p><span class="iconfont">&#xe617;</span>未绑定</p>
      </div>
    </div>
    <div class="avast-btn">
      <a href=""><span class="iconfont">&#xe61d;</span></a>
      <a href=""><span class="iconfont">&#xe610;</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInfocard"
};
</script>

<style lang="stylus" scoped>
.infocard
  width 6.9rem
  height 2rem
  margin 0.2rem 0.3rem
  display flex
  flex-wrap nowrap
  justify-content space-between
  .avast-head
    width 1.3rem
    height 1.5rem
    margin-top 0.3rem
    margin-right 0.2rem
    position relative
    img
      width 1.3rem
      height 1.3rem
      border-radius 50%
    span
      width 1rem
      height 0.3rem
      border-radius 0.15rem
      display block
      line-height 0.3rem
      text-align center
      color #2c2c2c
      position absolute
      bottom 0
      left 50%
      margin-left -0.5rem
      background #ffd095
  .avast-info
    width 3.6rem
    padding-top 0.4rem
    .avast-info-title
      height 0.8rem
      width 100%
      span
        line-height 0.8rem
        font-size 0.36rem
        font-weight 600
        color #020204
    .avast-info-bar
      width 100%
      height 0.6rem
      margin-top 0.2rem
      display flex
      justify-content space-between
      flex-wrap nowrap
      em
        width 0.6rem
        height 0.3rem
        display block
        line-height 0.3rem
        font-size 0.22rem
        color #fff
        font-weight 600
        border-radius 0.15rem
        text-align center
        background #7c56f1
      p
        line-height 0.3rem
        font-size 0.24rem
        color #9c9c9c
        span
          margin-right 0.1rem
      p.bind
        color #020204
  .avast-btn
    width 1.2rem
    padding-top 1.2rem
    display flex
    a
      width 0.6rem
      height 0.4rem
      font-size 0.4rem
      color #020204
      display block
      text-align center
</style>
