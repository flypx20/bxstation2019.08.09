<template>
  <div class="products">
    <div class="title">
      微店产品
      <router-link to="/products"><span>+ 添加产品</span></router-link>
    </div>
    <div class="navs">
      <ul>
        <li v-for="item in typeList"
            :key="item.typeID">{{item.typeName}}</li>
      </ul>
    </div>
    <div class="list">
      <div class="product"
           v-for="item in list"
           :key="item.id">
        <div class="product-img">
          <img :src="item.productImg"
               alt />
        </div>
        <div class="product-opt">
          <div class="info">
            <span>{{item.productName}}</span>
            <p>{{item.productDesc}}</p>
          </div>
          <div class="edit">
            <router-link to="/productdetail">
              <span>编辑</span>
            </router-link>
          </div>
          <div class="oper">
            <div class="oper-price">
              <span class="iconfont">&#xe634;</span>
              <em>{{item.productPrice}}</em>起
            </div>
            <div class="oper-btn">
              <a>立即投保</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeProducts",
  props: {
    list: Array
  },
  data() {
    return {
      typeList: [
        {
          typeID: 1,
          typeName: "意外"
        },
        {
          typeID: 2,
          typeName: "健康"
        },
        {
          typeID: 3,
          typeName: "医疗"
        },
        {
          typeID: 4,
          typeName: "重疾"
        },
        {
          typeID: 5,
          typeName: "定寿"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../static/mixins.styl'
.products
  width 6.9rem
  padding 0 0.3rem
  margin-top 0.2rem
  background #fff
  padding-bottom 1rem
  .title
    height 0.6rem
    font-size 0.3rem
    color #020204
    line-height 0.6rem
    border-bottom 1px solid #eee
    display flex
    justify-content space-between
    span
      font-size 0.2rem
      color #d1d1d1
      height 0.4rem
      border-radius 4px
      line-height 0.4rem
      text-align center
      border 1px solid #d1d1d1
      display block
      margin 0.1rem 0
      padding 0 0.1rem
  .navs
    width 6.9rem
    padding 0.3rem 0
    ul
      display flex
      width 6.9rem
      height 0.4rem
      flex-wrap nowrap
      justify-content space-between
      li
        width 0.8rem
        height 0.4rem
        line-height 0.4rem
        font-size 0.2rem
        text-align center
        display block
        border-radius 0.2rem
        border 1px solid #eee
      li.on
        background #e0e7ff
        color #2e5bff
  .list
    width 6.9rem
    .product
      width 100%
      height 1.8rem
      padding 0.2rem 0
      border-bottom 1px solid #eee
      overflow hidden
      .product-img
        float left
        width 2.4rem
        height 1.8rem
        margin-right 0.3rem
        img
          width 2.4rem
          height 1.8rem
      .product-opt
        float left
        display flex
        flex-direction column
        justify-content space-between
        width 4rem
        height 1.8rem
        position relative
        .info
          width 4rem
          height 0.8rem
          span
            font-size 0.32rem
            line-height 0.5rem
            color #2f2f2f
            font-weight 600
          p
            font-size 0.22rem
            color #808080
            ellipsis()
        .edit
          width 0.6rem
          height 0.4rem
          line-height 0.4rem
          position absolute
          right -0.2rem
          top 0.02rem
          border 1px solid #ccc
          text-align center
          border-radius 4px
          span
            line-height 0.4rem
            font-size 0.22rem
            color #ccc
        .oper
          width 4rem
          height 0.6rem
          display flex
          justify-content space-between
          .oper-price
            font-size 0.24rem
            line-height 0.6rem
            color #8e8e8e
            .iconfont
              color #fa8080
            em
              font-size 0.36rem
              font-weight 600
              color #fa8080
              font-style normal
              margin-right 0.1rem
          .oper-btn
            a
              display block
              text-align center
              width 1.5rem
              height 0.6rem
              background #6877f6
              border-radius 0.04rem
              line-height 0.6rem
              color #fff
</style>
