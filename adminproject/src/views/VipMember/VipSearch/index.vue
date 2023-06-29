<template>
      <div class="vipsearch">
        <Top></Top>
        <Table></Table>
      </div> 
  </template>
  
<script setup>
import Top from "./Top/index.vue";
import Table from "./Table.vue";
import { vipMemberSearch } from "@/http/api/vipMemberSearch";
import { provide } from "vue";
import { ref } from "vue";
//发送请求并使用provide和inject传递会员相关数据---Top部分数据
let memberData = ref([]);
let getMemberData = () => {
  vipMemberSearch("/memberSearch").then((res) => {
    memberData.value = res.data;
  });
};
getMemberData();
provide("memberData", memberData);

//发送请求并使用provide和inject传递会员相关数据---Table部分数据
let memberList=ref([])
let getMemberList=()=>{
  vipMemberSearch('/memberlist').then((res)=>{
    memberList.value=res.data.list
    // console.log(memberList.value);
  })
}
getMemberList()
provide("memberList", memberList);
</script>
  
  <style scoped>
    /* .vipsearch{
      height: 1300px;
    } */
  </style>