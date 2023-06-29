<template>
  <div class="fold">
    <el-icon v-if="showList" @click="show"><Fold /></el-icon>
    <el-icon v-else @click="show"><Expand /></el-icon>
  </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {  useStore} from 'vuex'
    let store=useStore()

    let showList=ref(true)
    let show=function(){
        showList.value=!showList.value
        //将值存在vuex中实现响应式
        store.commit('showList',showList.value)
    }
</script>

<style lang="scss" scoped>
    .fold{
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        width: max-content;
        padding-right:15px;
    }
</style>