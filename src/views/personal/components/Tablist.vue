<template>
  <div class="tablist">
    <ul>
      <router-link tag="li"
                   to="/comparison">
        <p><span class="iconfont">&#xe63a;</span>产品比较</p>
        <h5><span class="iconfont">&#xe624;</span></h5>
      </router-link>
      <li>
        <p><span class="iconfont">&#xe62f;</span>用户统计</p>
        <h5 href=""><span class="iconfont">&#xe624;</span></h5>
      </li>
      <router-link tag="li"
                   to="/editchannel">
        <p><span class="iconfont">&#xe672;</span>投保通道</p>
        <h5><span class="iconfont">&#xe624;</span></h5>
      </router-link>
      <li>
        <p><span class="iconfont">&#xe613;</span>收藏关注</p>
        <h5 href=""><span class="iconfont">&#xe624;</span></h5>
      </li>
      <li>
        <p><span class="iconfont">&#xe63c;</span>在线客服</p>
        <h5 href=""><span class="iconfont">&#xe6cb;</span></h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonalTablist"
};
</script>

<style lang="stylus" scoped>
.tablist
  width 6.9rem
  padding 0 0.3rem
  background #fff
  margin-top 1rem
  ul
    display block
    width 100%
    li
      width 100%
      height 1rem
      border-bottom 1px solid #eee
      display flex
      justify-content space-between
      p
        line-height 1rem
        font-size 0.3rem
        color #161616
        span
          margin-right 0.26rem
      h5
        line-height 1rem
        color #cdcdcd
        font-size 0.24rem
        padding-right 0.2rem
</style>

