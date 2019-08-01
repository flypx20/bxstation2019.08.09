<template>
  <div>
    <van-nav-bar title="产品比较"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft" />
    <comp-list></comp-list>
  </div>
</template>

<script>
import TabList from "./components/TabList";
import CompList from "./components/CompList";
import CompTable from "./components/CompTable";
export default {
  name: "Comparison",
  components: {
    TabList,
    CompList,
    CompTable
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped></style>
