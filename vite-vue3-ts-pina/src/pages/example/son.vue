<template>
    <div>
        <p>附件</p>
    </div>
</template>

<script setup lang="ts">
//组件里面定义一个方法
const getPage = (id:string) =>{
    console.log(id);  
}
//将这个方法暴露出去，父组件才能调用这个方法
defineExpose({
  getPage
});
</script>

<style scoped>

</style>