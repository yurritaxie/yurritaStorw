<template>
  <div class="search">
    <span class="iconfont icon-sousuo" @click="inputShow"></span>
    <input class="input" type="text" placeholder="Search" :style="show?'width: 160px':'width:0px'"/>
  </div>
</template>

<script setup>
import {ref,nextTick} from 'vue'
    let show=ref(false)
    let inputShow=()=>{
        show.value=!show.value
        //nextTick对象通过原生js获取dom
        nextTick(()=>{
            let inputDom=document.querySelector('.input');
            inputDom.focus()
        })
    }
</script>

<style lang="scss" scoped>
.search {
  height: 100%;
  line-height: 40px;
  display: flex;
  width: max-content;
  .icon-sousuo{
    cursor: pointer;
  }
  .input {
    // width: 160px;
    height: 30px;
    border:none;
    outline: none;
    box-shadow: none !important;
    border-bottom: 1px solid #d9d9d9;
    vertical-align: middle;
    margin-left: 10px;
    transition: width 0.3s ease-out;;
  }
}
</style>
