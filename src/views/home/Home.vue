<template>
  <div>
    <head-layout>我的微店</head-layout>
    <home-swiper :list="bannerList"></home-swiper>
    <home-card></home-card>
    <!-- <home-plans :list="planList"></home-plans> -->
    <home-products :list="productList"></home-products>
  </div>
</template>

<script>
import HeadLayout from "../layout/HeadLayout";
import HomeSwiper from "./components/Swiper";
import HomeCard from "./components/Card";
import HomePlans from "./components/Plans";
import HomeProducts from "./components/Products";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HeadLayout,
    HomeSwiper,
    HomeCard,
    HomePlans,
    HomeProducts
  },
  data() {
    return {
      bannerList: [],
      productList: [],
      planList: []
    };
  },
  methods: {
    getBannerList() {
      axios.get("/apis/banner.json").then(this.getBannerListSucc);
    },
    getBannerListSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.bannerList = data.bannerList;
      }
    },
    getProductList() {
      axios.get("/apis/product.json").then(this.getProductListSucc);
    },
    getProductListSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.productList = data.productList;
      }
    },
    getPlanList() {
      axios.get("/apis/plan.json").then(this.getPlanListSucc);
    },
    getPlanListSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.planList = data.planList;
      }
    }
  },
  mounted() {
    this.getBannerList();
    this.getProductList();
    this.getPlanList();
  }
};
</script>

<style lang="stylus" scoped></style>
