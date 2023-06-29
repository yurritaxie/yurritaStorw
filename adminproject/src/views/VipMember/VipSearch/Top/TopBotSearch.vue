<template>
  <div class="botSearch">
    <div class="left">
        <span>精准查询</span>
        <el-select
          v-model="value"
          class="m-2"
          placeholder="会员卡号"
          size="small"
          style="width:120px;"
        >
          <el-option
            v-for="(item,index) in botSearchInfo"
            :key="index"
            :value="item"
          />
        </el-select>
    </div>
    <div class="right">
        <input type="text" placeholder="请输入">
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { inject} from "vue";
import { watch } from "vue";
const value = ref("");
let memberData = inject("memberData");
//获取门店信息
const botSearchInfo=ref([])
watch(
    memberData,
    (val)=>{
        // console.log(val)
      if(val.botSearch){
        botSearchInfo.value=val.botSearch
      }
    },
    {immediate:true,deep:true}
  )
</script>

<style lang="scss" scoped>
.botSearch {
  display: flex;
  font-size: 14px;
  height: 40px;
  font-weight: 300;
  align-items: center;
  padding: 0 45px;
}
.left{
    display: flex;
    align-items: center;
    width: 194px;
    justify-content: space-between;
    margin-right: 15px;
}
.right{
    display: flex;
    align-items: center;
   input{
    height: 23.5px;
    border: none;
    border:1px solid #DCDFE6;
    outline: none;
    padding-left: 8px;
} 
}
input::placeholder{
    color: #c0c4cc;
}
</style>