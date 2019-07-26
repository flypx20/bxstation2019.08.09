<template>
  <div>
    <van-nav-bar title="代理人信息"
                 left-text="返回"
                 right-text="确定"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="avast">
      <div class="avast-head">
        <img src="../../static/images/avatar.png"
             alt="">
      </div>
      <div class="avast-nick">
        卖保险的小火柴
        <span class="iconfont">&#xe872;</span>
      </div>
    </div>
    <div class="info">
      <div class="info-title">个人信息</div>
      <div class="info-box">
        <div class="info-head">一句话简介</div>
        <van-field placeholder="请输入一句话介绍" />
      </div>
      <div class="info-box">
        <div class="info-head">自我介绍</div>
        <van-field type="textarea"
                   placeholder="请输入介绍"
                   rows="5"
                   autosize />
      </div>
      <div class="info-box">
        <div class="info-head">公众号</div>
        <div class="info-code">
          <img src="../../static/images/code.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editbroker",
  components: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../static/varibles.styl'
.van-nav-bar
  height $headerHeight
  line-height $headerHeight
.avast
  width 7.5rem
  height 2.8rem
  background #fff
  .avast-head
    height 1.4rem
    padding-top 0.4rem
    text-align center
    img
      width 1.2rem
      height 1.2rem
      border 2px solid #eee
      border-radius 50%
  .avast-nick
    text-align center
    font-size 0.3rem
    line-height 0.6rem
    color #464646
    .iconfont
      font-size 0.36rem
.info
  width 7.5rem
  padding 0.2rem 0
  .info-title
    height 0.4rem
    padding 0.3rem
    line-height 0.4rem
    font-size 0.3rem
    color #020204
    font-weight 600
    background #fff
  .info-box
    padding 0.1rem 0
    .info-head
      line-height 0.4rem
      padding 0.2rem 0.3rem
      font-size 0.24rem
      color #020202
    .info-code
      padding 0.4rem
      text-align center
      background #fff
      img
        width 3rem
</style>
