<template>
  <div class="comptable">
    <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column fixed
                       prop="date"
                       label="产品名称"
                       width="70">
      </el-table-column>
      <el-table-column prop="name"
                       label="安享一生"
                       width="70">
      </el-table-column>
      <el-table-column prop="province"
                       label="康乐一生"
                       width="70">
      </el-table-column>
      <el-table-column prop="city"
                       label="康乐一生2019"
                       width="100">
      </el-table-column>
      <el-table-column prop="address"
                       label="全佑倍呵护"
                       width="100">
      </el-table-column>
      <el-table-column prop="zip"
                       label="嘉多保"
                       width="70">
      </el-table-column>
      <el-table-column prop="zip"
                       label="倍呵护"
                       width="70">
      </el-table-column>
    </el-table>
    <van-button type="primary"
                size="large"
                to="/comparisonlist"><span class="iconfont">&#xe6f6;</span>继续添加</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "承保公司",
          name: "安心财险",
          province: "复星健康",
          city: "复星健康",
          address: "友邦人寿",
          zip: "光大永明"
        },
        {
          date: "投保年龄",
          name: "0-70岁",
          province: "0-70岁",
          city: "0-70岁",
          address: "0-70岁",
          zip: "0-70岁"
        },
        {
          date: "缴费期间",
          name: "15年",
          province: "15年",
          city: "15年",
          address: "15年",
          zip: "15年"
        },
        {
          date: "保险期间",
          name: "30年",
          province: "30年",
          city: "30年",
          address: "30年",
          zip: "30年"
        },
        {
          date: "等待期",
          name: "30天",
          province: "30天",
          city: "30天",
          address: "30天",
          zip: "30天"
        },
        {
          date: "保障责任",
          name: "重疾保障",
          province: "重疾保障",
          city: "重疾保障",
          address: "重疾保障",
          zip: "重疾保障"
        },
        {
          date: "保费测算",
          name: "2334",
          province: "2000",
          city: "1998",
          address: "2304",
          zip: "1678"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.comptable
  padding 0.2rem 0
.iconfont
  margin 0 0.1rem
</style>

