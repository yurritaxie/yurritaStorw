<template>
  <el-sub-menu
    v-if="item.children && item.children.length != 0"
    :index="item.url"
  >
    <template route #title>
      <el-icon v-if="item.icon">
        <!-- 显示组件<setting />  <el-icon><Search /></el-icon>-->
        <!-- componen 内置组件  有一个属性  is 他的值就是这个组件 -->
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.title }}</span>
    </template>
    <LowerManu
      :index="element.url"
      v-for="(element, num) in item.children"
      :key="num"
      :item="element"
    ></LowerManu>
  </el-sub-menu>
  <el-menu-item route v-else :index="item.url">
    <el-icon v-if="item.icon">
       <component :is="item.icon"></component>
    </el-icon>
    <span>{{ item.title }}</span>
  </el-menu-item>
</template>

<script setup>
import {computed} from 'vue'
import { useStore } from 'vuex'


defineProps({
  item: {
    type: Object,
  },
})


</script>

<style lang="scss">
</style>