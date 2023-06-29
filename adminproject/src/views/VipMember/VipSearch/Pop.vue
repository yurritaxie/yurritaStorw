<template>
  <Teleport to="body">
    <div class="mask" v-if="dialogVisible">
      <div class="dialog">
        <h1>
          <span>编辑标签</span>
          <span @click="hiddenPop">×</span>
        </h1>
        <div class="main">
          <span>选择标签</span>
          <div class="tag">
            <span
              @click="choose(item, index)"
              :class="item.select ? 'active' : ''"
              v-for="(item, index) in memberTagInfo"
              :key="index"
              >{{ item.name }}</span
            >
          </div>
          <div>
            <button @click="hiddenPop">取消</button>
            <button @click="changeTags">确定</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import {inject, ref } from "vue";
import { watch } from "vue";
let memberData = inject("memberData");
//接收修改标签的索引
let scopeIndex= inject("scopeIndex");
//试图修改某些东西
let memberList = inject("memberList");

let memberTagInfo = ref([]);
// console.log(memberData );
watch(
  memberData,
  (newval) => {
    // 循环遍历数组;
    if (newval.memberTag) {
      newval.memberTag.forEach((item, index) => {
        if (index > 0) {
          memberTagInfo.value.push({ name: item, select: false });
        }
      });
    }
  },
  { immediate: true, deep: true }
);
//   选中效果实现
let choose = (item, index) => {
  item.select = !item.select;
};
//开启关闭弹窗
let dialogVisible=inject("dialogVisible")
// console.log(dialogVisible);
let hiddenPop = () => {
    dialogVisible.value=false
}
//修改标签
let changeTags=()=>{
    let tags=[]
    // console.log(memberTagInfo);
    memberTagInfo.value.forEach((item,index)=>{
        if(item.select){
            tags.push(item.name)
            item.select=false  
        }
    })
    //备注：此处获取的标签需要提交post请求更新后台数据，暂时不想写接口，先使用sessionsStorage代替
   tags=[...new Set(tags)]
   memberList.value[scopeIndex.value].tags=tags
   //关闭弹窗
   dialogVisible.value=false
}
</script>
<style lang="scss" scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: relative;
  position: fixed;
  top: 0;
  z-index: 100000;
  .dialog {
    width: 450px;
    height: 220px;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 125px;
    margin: auto;
    h1 {
      height: 50px;
      padding: 0 20px;
      border-bottom: 1px solid #d9d9d9;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-of-type(1) {
        font-size: 14px;
      }
      span:nth-of-type(2) {
        font-size: 22px;
        color: #d9d9d9;
        cursor: pointer;
      }
    }
    .main {
      padding: 30px 30px 15px;
      span:nth-of-type(1) {
        font-size: 14px;
        font-weight: 300;
      }
      .tag {
        height: 40px;
        display: flex;
        margin-bottom: 40px;
        font-size: 14px;
        width: max-content;
        font-weight: 300;
        align-items: center;
        justify-content: space-between;
        span {
          margin-right: 20px;
          font-size: 12px;
          padding: 0 10px;
          height: 23px;
          line-height: 20px;
          cursor: pointer;
          border: 1px solid white;
        }
        .active {
          border: 1px solid #1890ff;
          color: #1890ff;
          background-color: #f4faff;
          border-radius: 3px;
        }
      }
      button {
        font-size: 14px;
        font-weight: 300;
        padding: 0 20px;
        height: 28px;
        line-height: 28px;
        margin-right: 10px;
        border-radius: 2px;
        border: none;
        cursor: pointer;
      }
      button:nth-of-type(1) {
        margin-right: 10px;
        border-radius: 2px;
        border: 1px solid #d9d9d9;
        background-color: white;
      }
      button:nth-of-type(1):hover {
        border: 1px solid #1890ff;
        color: #1890ff;
      }
      button:nth-of-type(2) {
        color: white;
        background-color: #1890ff;
        border: 1px solid #1890ff;
      }
    }
  }
}
</style>