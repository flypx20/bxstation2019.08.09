<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HeadLayout"
};
</script>

<style lang="stylus" scoped>
@import '../../static/varibles.styl'
.header
  width 100%
  background #fff
  height $headerHeight
  text-align center
  line-height $headerHeight
  color #2f2f2f
  font-size 0.34rem
</style>
