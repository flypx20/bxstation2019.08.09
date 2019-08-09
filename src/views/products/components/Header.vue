<template>
  <div class="header">
    <div class="header_title">保险产品</div>
  </div>
</template>

<script>
export default {
  name: "ProductsHeader"
};
</script>

<style lang="stylus" scoped>
@import '../../../static/varibles.styl'
.header
  width 100%
  background #fff
  height $headerHeight
  .header_title
    text-align center
    line-height $headerHeight
    color #2f2f2f
    font-size 0.34rem
</style>