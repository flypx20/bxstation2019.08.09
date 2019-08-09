<template>
  <div class="tabs">
    <van-tabs v-model="active">
      <van-tab title="方案"></van-tab>
      <van-tab title="意外"></van-tab>
      <van-tab title="人寿"></van-tab>
      <van-tab title="重疾"></van-tab>
      <van-tab title="医疗"></van-tab>
      <van-tab title="财产"></van-tab>
      <van-tab title="出行"></van-tab>
      <van-tab title="运动"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "ProductsTabs",
  data() {
    return {
      active: 1
    };
  }
};
</script>

<style lang="stylus" scoped></style>