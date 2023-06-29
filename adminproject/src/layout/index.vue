<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="showCollapse?'200px':'60px'">
        <!-- 左侧导航栏组件 -->
        <NavLists></NavLists>
      </el-aside>
      <el-main>
        <!-- 右侧导航栏信息 -->
        <Header></Header>
        <Content></Content>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import NavLists from "./NavLists.vue";
import Header from "./Header/Header.vue";

import {computed} from 'vue'
import { useStore } from 'vuex'
import Content from './Content.vue'

let store=useStore()

let showCollapse=computed(()=>{
    return store.state.showList
})

</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
    overflow: hidden;
    .el-aside {
      height: 100%;
      overflow-y: auto;
      transition: width 0.3s ease-out;
    }
    .el-aside::-webkit-scrollbar {
      display: none;
    }
    .el-main{
      --el-main-padding:0px;
      height: 100%;
      overflow: hidden
    }
  }
}
</style>