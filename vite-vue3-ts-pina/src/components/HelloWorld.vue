<template>
  <div>
    <h1>{{ useStore.name? useStore.name :'山里的闲人' }}</h1>
    <h1>{{ myname }}</h1>
    <input type="text" v-model="person.name" @keydown.enter="setUserName">
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { ref,watch} from 'vue';
import { useRoute } from 'vue-router';
import { inject } from "vue";

const myname = inject('name')
const person= ref({name:''})
const useStore = useUserStore()
const setUserName = () =>{
  useStore.updateName(person.value.name) 
}

//使用路由
// const router = useRoute()
// console.log(router,123);

// const toHomePage = () =>{

// }
// const toLoginPage = () =>{

// }
</script>

<style scoped>

</style>
