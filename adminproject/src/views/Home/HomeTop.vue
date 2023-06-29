<template>
  <h1>
    <span>实时概况</span>
    <!-- 更新时间可以从后端获取数据 -->
    <span>更新时间：2021/09/09 10:00</span>
  </h1>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    h1{
        height: 20px;
        display: flex;
        align-items: center;
        span:nth-of-type(1){
            font-size: 20px;
            margin-right: 20px;
            font-weight: 700;
        }
        span:nth-of-type(2){
            font-size: 14px;
            color:rgba(0, 0, 0, 0.447058823529412)
        }
    }

</style>