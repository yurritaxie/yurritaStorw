<template>
  <div class="newboard">
    <h1>
      <span>公告中心</span>
      <span>查看全部&ensp;></span>
    </h1>
    <h2 v-for="(item,index) in data" :key="index">
      <span>{{item.news}}</span>
      <span>{{item.time}}</span>
    </h2>
  </div>
</template>

<script setup>
    let data=[
        {news:"限时折扣分析功能上线",time:"4/02"},
        {news:"限时折扣分析功能上线",time:"4/02"},
        {news:"限时折扣分析功能上线",time:"4/02"},
        {news:"限时折扣分析功能上线",time:"4/02"},
        {news:"限时折扣分析功能上线",time:"4/02"},
        {news:"限时折扣分析功能上线",time:"4/02"},
        {news:"限时折扣分析功能上线",time:"4/02"},
    ]
</script>

<style lang="scss" scoped>
.newboard {
  width: 100%;
  height: 280px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 25px;
  h1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    span:nth-of-type(1) {
      font-weight:200;
      font-style: normal;
      font-size: 16px;
    }
    span:nth-of-type(2) {
      font-weight:200;
      font-style: normal;
      color: rgba(0, 0, 0, 0.349019607843137);
      font-size: 12px;
    }
  }
  h2{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    span{
        font-size: 13px;
        color: rgba(0, 0, 0, 0.349019607843137);
    }
  }
}
.newboard:hover{
 border: 3px solid #2f62ff;
}
</style>