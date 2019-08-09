<template>
  <div>
    <van-nav-bar title="产品比较"
                 left-text="返回首页"
                 left-arrow
                 @click-left="onClickLeft" />
    <comp-table></comp-table>
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
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="stylus" scoped></style>
