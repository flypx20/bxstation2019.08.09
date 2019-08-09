<template>
  <div>
    <div class="tab-box">
      <van-tree-select :items="items"
                       :main-active-index="mainActiveIndex"
                       :active-id="activeId"
                       @click-nav="onClickNav"
                       @click-item="onClickItem" />
    </div>
    <div class="btn-box">
      <van-button type="primary"
                  size="large"
                  to="/comparison"><span class="iconfont">&#xe6f6;</span>添加比较</van-button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "复星健康",
          children: [
            {
              text: "康年",
              id: 1
            },
            {
              text: "康年2019",
              id: 2
            }
          ]
        },
        {
          text: "友邦保险",
          children: [
            {
              text: "全佑",
              id: 3
            },
            {
              text: "全佑2019",
              id: 4
            }
          ]
        }
      ],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    };
  },
  methods: {
    onClickNav(index) {
      this.mainActiveIndex = index;
    },
    onClickItem(data) {
      this.activeId = data.id;
    }
  }
};
</script>

<style lang="stylus" scoped>
.tab-box
  width 100%
  margin 0.2rem 0
.btn-box
  width 6.3rem
  padding 0.4rem 0.6rem
  span
    margin 0 0.2rem
</style>

