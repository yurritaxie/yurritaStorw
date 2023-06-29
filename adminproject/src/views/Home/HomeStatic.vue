<template>
    <div class="part" v-for="(item, index) in statistics" :key="index">
      <span>{{ item.title }}</span>
      <span>{{ item.num }}</span>
      <span><i>较上期</i>&ensp;&#9650;&ensp;12%</span>
    </div>
</template>

<script setup>
let statistics = [
  { title: "支付金额(元)", num: 126560 },
  { title: "支付笔数", num: 2250 },
  { title: "新增会员", num: 650 },
  { title: "新增储值会员会员", num: 156 },
]
</script>

<style lang="scss" scoped>
.part {
  width: 235px;
  height: 120px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  justify-content: space-between;
  span:nth-of-type(1){
    font-size: 14px;
    color: rgba(0, 0, 0, 0.427450980392157);
  }
  span:nth-of-type(2){
    font-size: 25px;
    color: rgba(0, 0, 0, 0.847058823529412);
  }
  span:nth-of-type(3){
    font-size: 12px;
    color: #52C41A;
    i{
      color: rgba(0, 0, 0, 0.427450980392157);
    }
  }
}
.part:hover{
  border: 3px solid #2f62ff;
}
</style>