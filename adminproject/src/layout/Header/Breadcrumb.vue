<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item @click="goPath(index)" v-for="(item,index) in crumbList" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
    import {useRoute,useRouter} from 'vue-router'
    import {computed} from "vue"
    let route=useRoute()
    let router=useRouter()
    //点击进行页面跳转
    let goPath=(index)=>{
        if(index==0){
            router.push('/home')
        }
    }
    let crumbList=computed(()=>{
        if(route.path!='/home'){
            return ['首页',... route.meta.breadcrumb]
        }else{
            return route.meta.breadcrumb
        }
    })

</script>

<style lang="scss" scoped>
    .breadcrumb{
        height: 100%;
        width: max-content;
        display: flex;
        align-items: center;
    }
    .el-breadcrumb{
        font-size: 12px;
    }
</style>