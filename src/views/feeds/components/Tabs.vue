<template>
  <div class="tabs">
    <van-tabs type="card"
              color="#2e5bff"
              sticky>
      <van-tab title="众V纷纭"></van-tab>
      <van-tab title="保险百科"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="stylus" scoped>
.tabs
  border-top 1px solid #eee
  background #fff
  .van-tabs
    padding 0.2rem 0
</style>

