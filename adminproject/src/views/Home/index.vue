<template>
  <div class="home">
    <HomeTop></HomeTop>
    <div class="statistics">
      <div class="left">
        <EchartOne></EchartOne>
      </div>
      <div class="right">
        <HomeStatic></HomeStatic>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <CommonlyUse></CommonlyUse>
      </div>
      <div class="right">
        <NewsCenter></NewsCenter>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import HomeTop from "./HomeTop.vue";
import EchartOne from "./EchartOne.vue";
import HomeStatic from "./HomeStatic.vue";
import CommonlyUse from "./CommonlyUse.vue";
import NewsCenter from "./NewsCenter.vue";
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  padding: 20px 30px;
}
.statistics {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.right {
  height: 250px;
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.main{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding-bottom:100px;
  .left{
    width:72.5%
  }
  .right{
    width: 20%;
  }
}
</style>