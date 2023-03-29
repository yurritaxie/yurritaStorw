<template>
    <div class="head_menu">
        <div class="logo">
            <img src="" alt="">
            <p class="title">admin</p>
        </div>
        <div class="menu" ref="menu" :style="menustyle">
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menustyle = ref<String>('');

</script>

<style scoped lang="less">
.head_menu{
    height: 60px;
    width: 100%;
    .logo{
        width: 240px;
        height: 100%;
    }
}
</style>