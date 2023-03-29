<template>
    <div>
        <!-- <HelloWorld></HelloWorld> -->
        <!-- <h1>测试useUse的鼠标坐标</h1>
        <h3>Mouse: {{ x }}*{{ y }}</h3>
        <div class="box">
            <div class="smallbox">
            </div>
        </div> -->
        <!-- <el-button type="primary">Primary</el-button> -->
        <vtpTableVue></vtpTableVue>
    </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import vtpTableVue from '@/components/vtp-table.vue'
import {useMouse} from '@vueuse/core'
import { provide } from 'vue';
const { x,y } = useMouse()
const name = '123'
provide('name',name)

</script>

<style scoped lang="less">
.box{
    width: 100px;
    height: 100px;
    background-color: darkgray;
    .smallbox{
        width: 50px;
        height: 50px;
        background-color: darkcyan;
    }
}
</style>