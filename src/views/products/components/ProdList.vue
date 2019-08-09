<template>
  <div class="prodlist">
    <div class="list">
      <div class="product"
           v-for="item in list"
           :key="item.id">
        <div class="product-img">
          <img :src="item.productImg"
               alt />
          <span :style="{background:item.productSelftags[0].tagColor }">{{item.productSelftags[0].tagName}}</span>
        </div>
        <div class="product-opt">
          <div class="info">
            <span>{{item.productName}}</span>
            <p>{{item.productDesc}}</p>
          </div>
          <div class="brokerage">
            <ul>
              <li>
                <em>佣</em>
                <span>{{item.productChannel[0].channelBrokerage}}%</span>
              </li>
              <li>
                <em>佣</em>
                <span>{{item.productChannel[1].channelBrokerage}}%</span>
              </li>
              <li>
                <em>佣</em>
                <span>{{item.productChannel[2].channelBrokerage}}%</span>
              </li>
              <li>
                <em>佣</em>
                <span>{{item.productChannel[3].channelBrokerage}}%</span>
              </li>
            </ul>
          </div>
          <div class="oper">
            <div class="oper-price">
              <span class="iconfont">&#xe634;</span>
              <em>{{item.productPrice}}</em>起
            </div>
            <div class="oper-func">
              <router-link to='/productdetail'>
                <a href="javascript:;"
                   :class="item.productStatus ? 'oper-func-on' : 'oper-func-off'">{{item.productStatus ? '已上架' : '未上架'}}</a>
              </router-link>
              <a href=""
                 class="oper-func-link">比较</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsProdlist",
  props: {
    list: Array
  },
  data() {
    return {
      tagList: [
        {
          tagID: 1,
          tagStatus: true,
          tagName: "运动",
          tagColor: "#62e42b"
        },
        {
          tagID: 2,
          tagStatus: false,
          tagName: "重疾",
          tagColor: "#e42b2b"
        },
        {
          tagID: 3,
          tagStatus: false,
          tagName: "同款",
          tagColor: "green"
        },
        {
          tagID: 4,
          tagStatus: false,
          tagName: "推荐",
          tagColor: "blue"
        }
      ]
    };
  },
  computed: {}
};
</script>

<style lang="stylus" scoped>
@import '../../../static/mixins.styl'
.prodlist
  width 6.9rem
  padding 0 0.3rem
  background #fff
  padding-bottom 1rem
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
        position relative
        img
          width 2.4rem
          height 1.8rem
        span
          width 0.8rem
          height 0.4rem
          position absolute
          top 0
          left 0
          background blue
          line-height 0.4rem
          display block
          font-size 0.2rem
          text-align center
          color #fff
      .product-opt
        float left
        display flex
        flex-direction column
        justify-content space-between
        width 4rem
        height 1.8rem
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
        .brokerage
          width 4rem
          height 0.4rem
          margin-top 0.1rem
          ul
            display block
            overflow hidden
          li
            display block
            margin 0.05rem 2px
            width 0.8rem
            height 0.2rem
            line-height 0.2rem
            overflow hidden
            border 1px solid #ff4c59
            float left
          li:last-child
            float right
            border 1px solid #01c0b1
          em
            float left
            display block
            width 0.2rem
            height 0.2rem
            background #ff4c59
            color #fff
            text-align center
            line-height 0.2rem
            font-size 0.18rem
            font-style normal
          li:last-child em
            background #01c0b1
          span
            float left
            display block
            width 0.6rem
            height 0.2rem
            text-align center
            line-height 0.2rem
            font-size 0.2rem
            color #ff4c59
          li:last-child span
            color #01c0b1
        .oper
          width 4rem
          height 0.6rem
          margin-top 0.05rem
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
          .oper-func
            padding 0.05rem
            display flex
            justify-content space-between
            flex-wrap nowrap
            width 2.4rem
            a
              width 1rem
              display block
              height 0.4rem
              margin 0 0.05rem
              text-align center
              font-size 0.2rem
              line-height 0.4rem
            a.oper-func-on
              background #2e5bff
              border 1px solid #2e5bff
              color #fff
            a.oper-func-off
              background #b5b5b5
              border 1px solid #b5b5b5
              color #fff
            a.oper-func-link
              float right
              border 1px solid #2e5bff
              color #2e5bff
</style>