<template>
  <div>
    <van-nav-bar title="Banner列表"
                 left-text="返回"
                 right-text="确定"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="list">
      <div class="banner"
           v-for="item in bannerList"
           :key="item.id">
        <div class="banner-img">
          <img :src="item.bannerImg"
               alt="">
        </div>
        <div class="banner-info">
          <van-switch v-model="item.status"
                      active-color="#07c160"
                      inactive-color="#f44"
                      size=".24rem" />
          <span>{{item.bannerTitle}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Editbanner",
  components: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getHomeInfo() {
      axios.get("/apis/banner.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.bannerList = data.bannerList;
      }
    }
  },
  data() {
    return {
      bannerList: []
    };
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>

<style lang="stylus" scoped>
@import '../../static/varibles.styl'
.van-nav-bar
  height $headerHeight
  line-height $headerHeight
.list
  width 6.9rem
  padding 0 0.3rem
  padding-top 0.4rem
  background #fff
  display flex
  justify-content space-between
  flex-wrap wrap
  .banner
    width 3.2rem
    overflow hidden
    padding-bottom 0.3rem
    .banner-img
      img
        width 3.2rem
        margin-bottom 0.2rem
    .banner-info
      height 0.4rem
      padding 0 0.1rem
      span
        padding 0 0.2rem
        font-size 0.24rem
</style>
