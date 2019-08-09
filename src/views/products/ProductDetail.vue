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
        <span>投保通道</span>
        <div class="product-table">
          <van-radio-group v-model="radio">
            <el-table :data="productData.productChannel">
              <el-table-column label="选择">
                <template slot-scope="scope">
                  <van-radio :name="scope.row.channelID"
                             icon-size="0.2rem"
                             checked-color="#07c160"></van-radio>
                </template>
              </el-table-column>
              <el-table-column prop="channelBrokerage"
                               label="佣金">
                <template slot-scope="scope">
                  <span>{{scope.row.channelBrokerage}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="channelName"
                               label="渠道">
                <template slot-scope="scope">
                  <span>{{scope.row.channelName}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="channelStatus"
                               label="状态">
                <template slot-scope="scope">
                  <span>{{scope.row.channelStatus}}</span>
                </template>
              </el-table-column>
            </el-table>
          </van-radio-group>
        </div>
      </div>
    </div>
    <div class="self-tags">
      <span>产品标签</span>
      <div class="tag-box">
        <van-radio-group v-model="tagRadio"
                         v-for="tagData in productData.productSelftags"
                         :key="tagData.tagID">
          <van-radio :name="tagData.tagID"
                     icon-size="0.2rem"
                     checked-color="#07c160"><span :style="{ 'background-color': tagData.tagColor}">{{tagData.tagName}}</span></van-radio>
        </van-radio-group>
      </div>
      <div class="tag-add">
        <p><span class="iconfont">&#xe6f6;</span>新增标签</p>
        <input type="text"
               placeholder="请输入标签名">
        <el-color-picker class="color-picker"
                         v-model="color1"></el-color-picker>
        <input type="button"
               value="确认">
      </div>
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
      tagRadio: 1,
      productList: [],
      productData: {},
      channelList: [],
      color1: "#2b78e4"
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
        for (const list of this.productData.productChannel) {
          if (list.channelSelect === 1) {
            this.radio = list.channelID;
          }
        }
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
    margin-top 0.3rem
    padding-top 0.3rem
    background #fff
    span
      display block
      width 6.3rem
      padding 0 0.6rem
      line-height 0.4rem
      font-size 0.28rem
      color #0b0b0b
    .van-radio-group
      margin 0.2rem 0
      .van-radio
        margin-bottom 0.2rem
  .product-table
    width 6.9rem
    padding 0 0.3rem
    background #fff
    span
      padding 0
    .el-table
      width 100%
.self-tags
  width 6.9rem
  padding 0.2rem 0.3rem
  background #fff
  .tag-box
    display flex
    padding 0.4rem 0.2rem
    justify-content space-between
    flex-wrap nowrap
    span
      display block
      width 1rem
      height 0.4rem
      line-height 0.4rem
      text-align center
      font-size 0.2rem
      color #fff
  .tag-add
    width 100%
    padding-bottom 1rem
    display flex
    input
      height 0.8rem
      line-height 0.8rem
      border 1px solid #eee
      padding 0 0.1rem
      border-radius 3px
      margin 0 0.1rem
    input[type='text']
      width 2rem
    input[type='button']
      width 1rem
      color #fff
      background #0073ff
    p
      width 1.8rem
      height 0.6rem
      background #2b78e4
      border-radius 2px
      text-align center
      line-height 0.6rem
      color #fff
      font-size 0.22rem
      margin 0.1rem
      span
        margin-right 0.1rem
</style>

