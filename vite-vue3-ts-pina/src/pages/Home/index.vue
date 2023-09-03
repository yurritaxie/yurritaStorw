<template>
  <div>
    <HelloWorld></HelloWorld>
    <h1>测试useUse的鼠标坐标</h1>
    <h3>Mouse: {{ x }}*{{ y }}</h3>
    <div class="box">
      <div class="smallbox"></div>
    </div>
    <el-button type="primary" @keydown="handleKeyDown">Primary</el-button>
    <!-- <vtpTableVue></vtpTableVue> -->
    <div style="color: red; font-weight: 800;">
      第一组名单
    </div>
    <div v-for="item in arr1" :key="item.id">
      <span v-if="item.id <= 3">{{ item.name }}</span>
    </div>
    <div style="color: red; font-weight: 800;">
      第二组名单
    </div>
    <div v-for="item in arr1" :key="item.id">
      <span v-if="item.id > 3">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
// import vtpTableVue from "@/components/vtp-table.vue";
import { useMouse } from "@vueuse/core";
import { provide, reactive } from "vue";
const { x, y } = useMouse();
const name = "123";
provide("name", name);
//键盘事件
const handleKeyDown = (e: Event) => {

};


const arr1 = reactive([{ id: 1, name: '张三' }, { id: 2, name: '李四' },
 { id: 3, name: '王五' }, { id: 4, name: '孙悟空' }, { id: 5, name: '猪八戒' },])


</script>

<style scoped lang="less">
.box {
  width: 100px;
  height: 100px;
  background-color: darkgray;

  .smallbox {
    width: 50px;
    height: 50px;
    background-color: darkcyan;
  }
}
</style>
