<template>
  <div>
    <el-button type="primary" @click="createHandle">点击进行登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const createHandle = () => {
  router.push('/')
}


</script>

<style scoped>

</style>