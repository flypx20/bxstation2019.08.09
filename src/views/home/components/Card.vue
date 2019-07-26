<template>
  <div class="card">
    <div class="avatar">
      <img class="avatarImg"
           src="@/static/images/avatar.png"
           alt="">
    </div>
    <div class="title">
      <h4>资深代理人<img src="@/static/images/icon_level.png"
             alt=""></h4>
      <p>良心推荐性价比最高的产品</p>
    </div>
    <router-link to='/editbroker'>
      <div class="editor">
        <span>编辑</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeCard"
};
</script>

<style lang="stylus" scoped>
.card
  width 6.9rem
  height 0.6rem
  padding 0.2rem 0.3rem
  overflow hidden
  background #fff
  .avatar
    float left
    .avatarImg
      height 0.6rem
  .title
    float left
    padding-left 0.2rem
    h4
      font-size 0.24rem
      line-height 0.36rem
      color #222
      font-weight 600
      img
        width 0.3rem
        margin 0 0.1rem
    p
      font-size 0.2rem
      color #9b9b9b
      line-height 0.2rem
  .editor
    float right
    width 0.6rem
    height 0.6rem
    border-radius 50%
    border 1px solid #d1d1d1
    text-align center
    span
      line-height 0.6rem
      display block
      color #d1d1d1
      font-size 0.24rem
</style>
