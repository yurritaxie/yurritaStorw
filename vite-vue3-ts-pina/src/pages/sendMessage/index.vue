<template>
  <div id ="login">
  <!-- 这个是你的父组件 -->
    <el-button type="primary" @click="createHandle">新 增</el-button>
    <Create ref="create_page" @getInfoFromSon="getInfoFromSon"></Create>
    <h1>{{ info }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Create from './Create.vue'

class Person {
  age: number;
  name: string;
  constructor(age:number,name:string) {
    this.age = age;
    this.name = name
  }
}
const xiejia = new Person(18,'sunw')


const create_page = ref<any>(null);
const createHandle = () => {
  create_page.value.getPage();
}
const info = ref<String>()
const getInfoFromSon = (data:String) =>{
  return info.value = data;
}
</script>

<style scoped>

</style>