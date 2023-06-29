<template>
  <div class="tophead">
    <h1>会员查询</h1>
    <div class="mainOne">
      <div class="left">
        <span>所属门店</span>
        <el-select
          v-model="valueShop"
          class="m-2"
          placeholder="请选择所属门店"
          size="small"
        >
          <el-option
            v-for="(element,num) in shopInfo"
            :key="num"
            :value="element"
          />
        </el-select>
      </div>
      <div class="right">
        <span>下单次数</span>
        <el-select
          v-model="valueOrder"
          class="m-2"
          placeholder="请选择下单次数"
          size="small"
        >
          <el-option
          v-for="(item,index) in orderTimes"
            :key="index"
            :value="item"
          />
        </el-select>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import { inject} from "vue";
import { watch } from "vue";
const valueShop= ref("");
const valueOrder= ref("");
let memberData = inject("memberData");
//获取门店信息
const shopInfo=ref([])
watch(
    memberData,
    (val)=>{
      if(val.shop){
        shopInfo.value=val.shop
        // console.log('收到的',shopInfo.value)
      }
    },
    {immediate:true,deep:true}
  )
//获取订单次数信息
const orderTimes=ref([])
watch(
    memberData,
    (val)=>{
      if(val.downOrder){
        orderTimes.value=val.downOrder
      }
    },
    {immediate:true,deep:true}
  );
</script>
  
  <style lang="scss" scoped>
.tophead {
  h1 {
    padding: 0 25px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    border-bottom: 1px solid #e9e9e9;
  }
}
.mainOne {
  height: 50px;
  padding: 0 45px;
  display: flex;
  align-items: center;
  .left,
  .right {
    display: flex;
    font-size: 14px;
    font-weight: 300;
    align-items: center;
    width: 255px;
    justify-content: space-between;
  }
  .left {
    margin-right: 60px;
  }
}
</style>
  <style>
.el-input__wrapper {
  border-radius: 0px;
}
</style>