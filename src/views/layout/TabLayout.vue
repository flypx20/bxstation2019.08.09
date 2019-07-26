<template>
  <div class="tablayout">
    <div class="main">
      <router-view />
    </div>
    <van-tabbar v-model="active"
                class="tab_active">
      <van-tabbar-item v-for="(item,index) in tabbars"
                       :key="index"
                       @click="tab(index,item.name)">
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabLayout",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: "我的首页",
          normal: require("../../static/images/nav_icon_ind.png"),
          active: require("../../static/images/nav_icon_ind_on.png")
        },
        {
          name: "products",
          title: "保险产品",
          normal: require("../../static/images/nav_icon_mall.png"),
          active: require("../../static/images/nav_icon_mall_on.png")
        },
        {
          name: "feeds",
          title: "保险聚合",
          normal: require("../../static/images/nav_icon_news.png"),
          active: require("../../static/images/nav_icon_news_on.png")
        },
        {
          name: "personal",
          title: "个人中心",
          normal: require("../../static/images/nav_icon_cent.png"),
          active: require("../../static/images/nav_icon_cent_on.png")
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-tabbar
  width 7.5rem
  left 50%
  margin-left -3.75rem
  height 1rem
  .van-tabbar-item span
    font-size 0.2rem
  .van-tabbar-item img
    width 0.4rem
    height 0.32rem
  .van-tabbar-item--active
    color #2e5bff
</style>
