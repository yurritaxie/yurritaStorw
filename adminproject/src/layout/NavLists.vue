<template>
  <div class="nav">
    <el-row class="tac">
        <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :collapse="!showCollapse"
        :default-active="showAddress"
        text-color="#fff"
        router
        >
          <LowerManu v-for="(item,index) in navList" :key="index" :item="item">
          </LowerManu>
        </el-menu>
    </el-row>
  </div>
</template>

<script  setup>
import LowerManu from './LowerManu.vue';
import {computed,watch,ref} from 'vue';
import {useStore} from 'vuex';
import {useRoute } from 'vue-router';
let store=useStore()
let route=useRoute()


//vuex中的数据，一旦浏览器刷新就会清空，所以要存储在本地，从vue中获取的数据需要经过计算属性的处理实现响应式,这一点要特别注意
let showCollapse=computed(()=>{
    return store.state.showList
})
let navList=computed(()=>{
  if(sessionStorage.getItem('navList')){
    return JSON.parse(sessionStorage.getItem('navList')) 
  }else{
    return store.state.navList
  }
})
//动态地址
let showAddress = ref('/home')

watch(()=>route,(val)=>{
  showAddress.value=val.path
},{immediate:true,deep:true})


</script>

<style lang="scss" scoped>
.nav{
  height: 100%;
  width: 100%;
  .tac{
    height: 100%;
    width: 100%;
    .el-menu{
      width:100%;
      
    }
  }
}
</style>