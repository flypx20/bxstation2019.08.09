<template>
  <div class="plans">
    <div class="title">方案推荐</div>
    <div class="box">
      <div class="plan"
           v-for="item in list"
           :key="item.id">
        <div class="head">
          <img :src="item.planImg"
               alt />
        </div>
        <div class="desc">
          <span>{{item.planName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePlans",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.plans
  width 6.9rem
  padding 0 0.3rem
  margin 0.2rem 0
  background #fff
  .title
    height 0.6rem
    font-size 0.3rem
    color #020204
    line-height 0.6rem
    border-bottom 1px solid #eee
  .box
    width 6.9rem
    padding 0.2rem 0
    display flex
    flex-wrap nowrap
    justify-content space-between
    .head img
      width 1rem
      margin 0.2rem 0
</style>
