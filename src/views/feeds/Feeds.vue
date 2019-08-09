<template>
  <div class="feeds">
    <head-layout>保险聚合</head-layout>
    <feeds-tabs></feeds-tabs>
    <feeds-points :list="feedList"></feeds-points>
  </div>
</template>

<script>
import HeadLayout from "../layout/HeadLayout";
import FeedsTabs from "./components/Tabs";
import FeedsPoints from "./components/Points";
import axios from "axios";
export default {
  name: "Feeds",
  components: {
    HeadLayout,
    FeedsTabs,
    FeedsPoints
  },
  data() {
    return {
      feedList: []
    };
  },
  methods: {
    getFeedList() {
      axios.get("/apis/feed.json").then(this.getFeedListSucc);
    },
    getFeedListSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.feedList = data.feedList;
      }
    }
  },
  mounted() {
    this.getFeedList();
  }
};
</script>

<style lang="stylus" scoped></style>
