<template>
  <div class="detail">
    <van-nav-bar title="产品详情"
                 left-text="返回"
                 right-text="确定"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="product-detail">
      <div class="product-img">
        <img :src="productData.productImg"
             alt="">
      </div>
      <div class="product-title">
        <span>{{productData.productName}}</span>
        <p>{{productData.productCompany}}</p>
      </div>
      <div class="product-more">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="产品详情"
                             name="1">{{productData.productDesc}}</van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <div class="product-config">
      <div class="on-shelves">
        <span>产品上架</span>
        <van-switch v-model="checked"
                    size=".24rem"
                    active-color="#07c160"
                    inactive-color="#f44" />
      </div>
      <div class="config-brokerage">
        <span>佣金管理</span>
        <van-radio-group v-model="radio"
                         v-for="pData in productData.productChannel"
                         :key="pData.channelID">
          <van-radio :name="pData.channelID"
                     icon-size="0.2rem"
                     checked-color="#07c160">{{pData.channelBrokerage}}% {{pData.channelName}}</van-radio>
        </van-radio-group>
      </div>
      <div class="self-tags"></div>
    </div>
    <div class="product-table">
      <el-table :data="tableData">
        <el-table-column prop="date"
                         label="日期">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetail",
  components: {},
  data() {
    return {
      activeNames: ["0"],
      checked: true,
      radio: 1,
      productList: [],
      productData: {},
      channelList: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市"
        }
      ]
    };
  },
  computed: {},
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
        this.productData = data.productList[0];
        this.channelList = data.productList[0].productChannel;
      }
    }
  },
  mounted() {
    this.getProductList();
  }
};
</script>

<style lang="stylus" scoped>
.product-detail
  width 6.9rem
  padding 0.3rem
  padding-bottom 0
  background #fff
  .product-img
    img
      width 6.9rem
  .product-title
    height 0.6rem
    display flex
    line-height 0.6rem
    padding-left 0.6rem
    span
      font-size 0.3rem
      line-height 0.6rem
      margin-right 0.3rem
      color #000
    p
      font-size 0.26rem
      line-height 0.6rem
      color #ccc
.product-config
  .on-shelves
    width 6.3rem
    height 0.4rem
    padding 0.2rem 0.6rem
    background #fff
    margin-top 0.3rem
    display flex
    justify-content space-between
    span
      font-size 0.28rem
      color #0b0b0b
      line-height 0.4rem
  .config-brokerage
    width 6.3rem
    margin-top 0.3rem
    background #fff
    padding 0.2rem 0.6rem
    span
      line-height 0.4rem
      font-size 0.28rem
      color #0b0b0b
    .van-radio-group
      margin 0.2rem 0
      .van-radio
        margin-bottom 0.2rem
.product-table
  width 6.9rem
  padding 0.2rem 0.3rem
  background #fff
  .el-table
    width 100%
</style>

