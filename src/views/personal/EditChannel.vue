<template>
  <div>
    <van-nav-bar title="投保通道"
                 left-text="返回"
                 right-text="确定"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="channels">
      <div class="channel-head">
        <span class="iconfont">&#xe63f;</span>
        <p>请配置相关投保通道中的账户ID，以便于产品投保</p>
      </div>
      <div class="channel-list">
        <div class="channel"
             v-for="item in channels"
             :key="item.channelID">
          <div class="channel-name">
            <span :class="item.channelActive?'iconfont on':'iconfont off'">&#xe730;</span>
            <p>{{item.channelName}}</p>
          </div>
          <div class="channel-input">
            <input type="text"
                   placeholder="请输入此通道账户ID"
                   v-model="item.channelUserID">
            <span class="iconfont">&#xe872;</span>
          </div>
          <div class="chanel-status"
               v-if="item.channelActive">
            <span :class="item.channelStatus?'iconfont checked':'iconfont uncheck'">{{item.channelStatus?'&#xe63b;':'&#xe630;'}}</span>
            <p :class="item.channelStatus?'checked':'uncheck'">{{item.channelStatus?'验证成功':'验证失败'}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editchannel",
  data() {
    return {
      channels: [
        {
          channelID: 1,
          channelName: "齐欣云服",
          channelUserID: "dd32134",
          channelStatus: 1,
          channelActive: true
        },
        {
          channelID: 2,
          channelName: "安云保",
          channelUserID: "dday32134",
          channelStatus: 1,
          channelActive: true
        },
        {
          channelID: 3,
          channelName: "牛保",
          channelUserID: "ddnb1234",
          channelStatus: 0,
          channelActive: true
        },
        {
          channelID: 4,
          channelName: "康乃馨",
          channelUserID: "",
          channelStatus: 0,
          channelActive: false
        }
      ],
      channelAct: false
    };
  },
  computed: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.channels
  width 7.5rem
  .channel-head
    width 6.9rem
    padding 0 0.3rem
    height 0.6rem
    line-height 0.6rem
    background #edf4ff
    font-size 0.24rem
    color #2b78e4
    p
      font-size 0.24rem
      color #3a3a3a
      display inline
      margin-left 0.1rem
  .channel-list
    margin-top 0.3rem
    background #fff
    padding 0.3rem
    .channel
      display flex
      height 0.6rem
      padding 0.1rem 0
      .channel-name
        width 2rem
        line-height 0.6rem
        font-size 0.26rem
        color #0b0b0b
        span.on
          color #1b8c00
        span.off
          color #ff0000
        p
          display inline
          margin-left 0.1rem
      .channel-input
        width 3.2rem
        height 0.6rem
        font-size 0.22rem
        input
          width 2.4rem
          height 0.58rem
          border 1px solid #eee
          padding 0 0.1rem
          margin 0 0.1rem
          line-height 0.58rem
      .chanel-status
        width 1.5rem
        height 0.6rem
        font-size 0.24rem
        padding-left 0.2rem
        color #1b8c00
        line-height 0.6rem
        p
          display inline
          margin-left 0.1rem
        p.checked
          color #1b8c00
        p.uncheck
          color #ff0000
        span.checked
          color #1b8c00
        span.uncheck
          color #ff0000
</style>

