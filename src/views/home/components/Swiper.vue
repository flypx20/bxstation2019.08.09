<template>
  <div class="wrapper">
    <van-swipe :autoplay="3000"
               indicator-color="white">
      <van-swipe-item v-for="item in list"
                      :key="item.id">
        <img class="swipe-img"
             v-lazy="item.bannerImg" />
      </van-swipe-item>
    </van-swipe>
    <router-link to='/editbanner'>
      <div class="editor">
        <span class="iconfont">&#xe872;</span>
        编辑
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  overflow hidden
  position relative
  width 100%
  height 0
  padding-bottom 45.33%
  background #eee
  .van-swipe
    .van-swipe-item
      .swipe-img
        width 7.5rem
        height 3.4rem
  .editor
    position absolute
    right 0
    top 0.16rem
    width 1rem
    height 0.4rem
    border-top-left-radius 0.2rem
    border-bottom-left-radius 0.2rem
    background #2e5bff
    color #fff
    font-size 0.24rem
    line-height 0.4rem
    .iconfont
      font-size 0.2rem
      margin-left 0.08rem
</style>
