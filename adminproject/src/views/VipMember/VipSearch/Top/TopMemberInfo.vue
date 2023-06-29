<template>
  <div class="tag">
    <span>会员标签</span>
    <span :class="item.select?'active':''" v-for="(item, index) in memberTagInfo" :key="index" @click="choose(item,index)">{{ item.name}}</span>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { watch } from "vue";
let memberData = inject("memberData");
let memberTagInfo= ref([]);

watch(
  memberData,
  (newval) => {
      // 循环遍历数组;
      if( newval.memberTag){
        newval.memberTag.forEach((item,index) => {
        if(index==0){
          memberTagInfo.value.push({ name: item, select: true})
        }else{
          memberTagInfo.value.push({ name: item, select: false})
        } 
      });
      }
      // 打印 memberTagInfo;
      // console.log(memberTagInfo);
  },
  { immediate: true, deep: true }
);
//选中效果实现
let choose = (item,index) => {
  memberTagInfo.value[0].select=false;
  item.select=!item.select
  if(index==0){
    memberTagInfo.value.forEach((item,keys)=>{
      if(keys>0){
        item.select=false
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.tag {
  height: 40px;
  padding: 0 45px;
  display: flex;
  font-size: 14px;
  width: max-content;
  font-weight: 300;
  align-items: center;
  justify-content: space-between;
  span {
    margin-right: 20px;
    font-size: 12px;
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    border: 1px solid white;
  }
  span:nth-of-type(1) {
    font-size: 14px;
    padding: 0;
  }
  .active{
    border: 1px solid #1890FF;
    color:#1890FF;
    background-color: #F4FAFF;
    border-radius: 3px;
  }
}
</style>