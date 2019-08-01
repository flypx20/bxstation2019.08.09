<template>
  <div>
    <head-layout>保险产品</head-layout>
    <products-search></products-search>
    <products-tabs></products-tabs>
    <products-prodlist :list="productList"></products-prodlist>
  </div>
</template>

<script>
import HeadLayout from "../layout/HeadLayout";
import ProductsSearch from "./components/Search";
import ProductsTabs from "./components/Tabs";
import ProductsProdlist from "./components/ProdList";
import axios from "axios";
export default {
  name: "Products",
  components: {
    HeadLayout,
    ProductsSearch,
    ProductsTabs,
    ProductsProdlist
  },
  data() {
    return {
      productList: []
    };
  },
  methods: {
    getProductList() {
      axios.get("/apis/product.json").then(this.getProductListSucc);
    },
    getProductListSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.productList = data.productList;
      }
    }
  },
  mounted() {
    this.getProductList();
  }
};
</script>

<style lang="stylus" scoped></style>
