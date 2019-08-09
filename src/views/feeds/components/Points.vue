<template>
  <div class="points">
    <van-sticky>
      <div class="search">
        <van-search placeholder="请输入产品/标签/公众号等" />
      </div>
    </van-sticky>
    <div class="list">
      <div class="point"
           v-for="item in list"
           :key="item.feedID">
        <div class="point-detail">
          <div class="point-detail-img">
            <img :src="item.feedImg"
                 alt="">
          </div>
          <div class="point-detail-info">
            <ul>
              <li>
                <span>发布时间：</span>
                <p>{{item.feedTime}}</p>
              </li>
              <li>
                <span>作者：</span>
                <p>{{item.feedAuthor}} {{item.feedPublic}}</p>
              </li>
              <li>
                <span>推荐度：</span>
                <p class="recommStar">
                  <van-rate v-model="item.feedRate"
                            size="16"
                            allow-half
                            color="#93b457"
                            readonly />
                </p>
              </li>
              <li>
                <a :href="item.feedLink">>>>原文链接</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="point-related">
          <span>产品关联</span>
          <van-notice-bar mode="link"
                          color="#626262"
                          background="#fff"
                          text="复星健康 光大永明 友邦保险 平安保险 平安福 嘉多保 康乐一生 康乐一生2019">
          </van-notice-bar>
        </div>
        <div class="point-tags">
          <div class="point-tag"
               v-for="tagItem in item.feedTags"
               :key="tagItem.tagID">
            <div class="tag-img">
              <span class="iconfont">{{tagItem.tagIcon}}</span>
            </div>
            <div class="tag-info">
              <span>{{tagItem.tagName}}</span>
              <p>
                <van-rate v-model="tagItem.tagRate"
                          size="12"
                          gutter="2"
                          allow-half
                          readonly />
              </p>
            </div>
          </div>
        </div>
        <div class="point-opers">
          <ul>
            <li>
              <span class="iconfont">&#xe671;</span>
              {{item.feedReads}}
            </li>
            <li>
              <span class="iconfont">&#xe682;</span>
              {{item.feedThumbs}}
            </li>
            <li>
              <span class="iconfont">&#xe60d;</span>
              {{item.feedCollects}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.points
  padding-bottom 1rem
.list
  width 7.5rem
  margin 0.1rem 0
  .point
    padding 0.1rem 0.5rem
    width 6.5rem
    background #fff
    margin 0.2rem 0
    .point-detail
      width 6.5rem
      height 1.7rem
      padding 0.1rem 0
      overflow hidden
      display flex
      justify-content space-between
      .point-detail-img
        width 3rem
        height 1.7rem
        img
          width 100%
          height 100%
      .point-detail-info
        width 3.2rem
        height 1.7rem
        ul
          display block
          li
            display block
            overflow hidden
            width 3.2rem
            height 0.4rem
            line-height 0.4rem
            margin-bottom 0.02rem
            span, p
              font-size 0.24rem
              float left
              color #393939
            p.recommStar
              width 2rem
            a
              font-size 0.28rem
              color #6c9452
    .point-related
      width 6.5rem
      height 0.45rem
      padding 0.1rem 0
      display flex
      flex-wrap nowrap
      span
        display block
        width 1.3rem
        height 0.45rem
        background #628d46
        text-align center
        line-height 0.45rem
        font-size 0.26rem
        color #fff
        border-radius 0.04rem
      .van-notice-bar
        width 5.2rem
        height 0.45rem
        margin 0
        padding 0 0.1rem
    .point-tags
      width 6.5rem
      margin-top 0.2rem
      display flex
      flex-wrap wrap
      .point-tag
        width 2.1rem
        height 0.6rem
        margin-bottom 0.2rem
        display flex
        justify-content space-between
        .tag-img
          width 0.6rem
          height 0.6rem
          background #f4f4f4
          border-radius 50%
          line-height 0.6rem
          text-align center
          span
            font-size 0.3rem
            color #2e5bff
        .tag-info
          width 1.5rem
          span
            line-height 0.3rem
            font-size 0.24rem
    .point-opers
      width 6.5rem
      height 0.4rem
      overflow hidden
      ul
        display flex
        float right
        justify-content space-between
        flex-wrap nowarp
        li
          width 1.2rem
          display block
          height 0.4rem
          span
            line-height 0.4rem
            font-size 0.3rem
            color #fcb60c
</style>

