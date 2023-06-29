<template>
  <Suspense>
    <Login></Login>
    <template #fallback>
      <div class="loader">
        加载中.....
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
let Login = defineAsyncComponent(() => import("./index.vue"));
</script>


<style>
.loader{
    height: 100%;
    width: 100%;
    margin-top: 200px;
    text-align: center;
    font-size: 30px;
    color: brown;
}
</style>