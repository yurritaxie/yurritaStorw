<template>
  <div class="commonlyUse">
    <h1>常用功能</h1>
    <div class="box" v-for="(item, index) in data" :key="index">
      <span><i :class="item.icon"></i></span>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
let data = [
  { title: "会员查询", icon: "iconfont icon-huiyuan1" },
  { title: "标签管理", icon: "iconfont icon-biaoqian" },
  { title: "会员权益", icon: "iconfont icon-huiyuan" },
  { title: "成长值管理", icon: "iconfont icon-chengchang" },
  { title: "订单查询", icon: "iconfont icon-dingdanjihe" },
  { title: "优惠券", icon: "iconfont icon-youhuiquan" },
  { title: "限时折扣", icon: "iconfont icon-xianshiqianggou" },
  { title: "满减满折", icon: "iconfont icon-caidan" },
  { title: "数据分析", icon: "iconfont icon-shujufenxi" },
  { title: "编辑常用功能", icon: "iconfont icon-bianjisekuai" },
];
</script>

<style lang="scss" scoped>
.commonlyUse {
  width: 100%;
  height: 280px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-content: space-around;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  h1 {
    width: 100%;
    height: 20px;
    line-height: 20px;
  }
  .box {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span:nth-of-type(1) {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 10px;
      background-color: #d1e9ff;
      margin-bottom: 10px;
      .iconfont {
        color: #1890ff;
        font-size: 20px;
      }
    }
    span:nth-of-type(2) {
      color: rgba(0, 0, 0, 0.647058823529412);
      font-size: 14px;
      font-weight: 200;
      font-style: normal;
    }
  }
}
.commonlyUse:hover {
  border: 3px solid #2f62ff;
}
</style>