<template>
  <div>
    <van-sticky>
      <van-nav-bar title="产品详情"
                   left-text="返回"
                   right-text="确定"
                   left-arrow
                   @click-left="onClickLeft" />
    </van-sticky>
    <products-search></products-search>
    <products-tabs></products-tabs>
    <products-prodlist :list="productList"></products-prodlist>
  </div>
</template>

<script>
import ProductsSearch from "./components/Search";
import ProductsTabs from "./components/Tabs";
import ProductsProdlist from "./components/ProdList";
import axios from "axios";
export default {
  name: "Products",
  components: {
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
    onClickLeft() {
      this.$router.go(-1);
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
    }
  },
  mounted() {
    this.getProductList();
  }
};
</script>

<style lang="stylus" scoped></style>
