<template>
  <div class="topExpend">
    <button>查询</button>
    <button>重置</button>
    <div class="expanded" v-if="!showAllTop" @click="Expand">
      <span>展开</span>
      <el-icon><ArrowDown /></el-icon>
    </div>
    <div class="shrink" v-else @click="Expand">
      <span>收起</span>
      <el-icon><ArrowUp /></el-icon>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  //使用vuex的原因，因为有多个组件要使用到这个数据
  import {useStore} from 'vuex'
  let store=useStore()
  let showAllTop=ref(false)
  let Expand=()=>{
    showAllTop.value=!showAllTop.value
    store.commit('showAllTop',showAllTop.value)
  }
</script>

<style lang="scss" scoped>
  .topExpend{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    cursor: pointer;
    button{
      width:55px;
      height: 25px;
      font-size: 14px;
      font-weight: 300;
    }
    button:nth-of-type(1){
      background-color: #1890FF;
      color: white;
      border: none;
      margin-right: 8px; 
    }
    button:nth-of-type(2){
      background-color: white;
      border: none;
      margin-right: 10px; 
      border: 1px solid #D9D9D9;
    }
    button:nth-of-type(2):hover{
      border-color: #1890FF;
      color: #1890FF;
    }
    span{
      font-size: 12px;
      margin-right: 3px;
      color: #1890FF;
    }
    .el-icon{
      color: #1890FF;
    }
    div{
      display: flex;
      align-items: center;
    }
  }
</style>