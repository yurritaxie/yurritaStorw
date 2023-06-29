<template>
   <div class="boxscreen">
    <span v-if="!showScreen" class="iconfont icon-quanping" @click="fullS"></span>
    <span v-else class="iconfont icon-quxiaoquanping" @click="fullS"></span>
   </div>
</template>

<script setup>
import {ref} from 'vue'
let showScreen=ref(false)
let fullS=()=>{
    showScreen.value=!showScreen.value
    let bodyDom=document.documentElement
    if(showScreen.value){
        bodyDom.requestFullscreen()
    }else{
        document.exitFullscreen()
    }
}
</script>

<style lang="scss" scoped>
    .boxscreen{
        height: 40px;
        display: flex;
        margin:0 15px;
        align-items: center;
        .iconfont{
            font-size: 18px;
        }
    }
</style>