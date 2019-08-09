<template>
  <div>
    <div class="btn-add">
      <van-button plain
                  hairline
                  type="primary"
                  to="/comparisonlist"><span class="iconfont">&#xe6f6;</span>选择需要比较的产品</van-button>
    </div>
    <div class="prods">
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell v-for="(item, index) in list"
                    clickable
                    :key="item"
                    :title="`保险产品${index} ${item}`"
                    @click="toggle(index)">
            <van-checkbox :name="item"
                          ref="checkboxes"
                          slot="right-icon" />
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
      <van-button type="primary"
                  size="large"
                  to="/comparisontable">开始比较</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["康乐一生", "康乐一生2019", "全佑倍呵护"],
      result: ["康乐一生", "康乐一生2019", "全佑倍呵护"]
    };
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style lang="stylus" scoped>
.btn-add
  width 7.5ren
  display flex
  justify-content center
  margin 0.6rem 0
</style>

