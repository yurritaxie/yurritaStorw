<template>
    <div>
        <button @click="handleDelete">删除</button>
        <son ref="myson"></son>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import son from './son.vue';

const id = ref<string>()
const myson = ref<any>(null);
const handleDelete = () => {
    //在父组件里面调用子组件里面的getPage方法，你就可以在子组件的getPage里面拿到id啦
    myson.value.getPage(id)
}
/*  */
</script>

<style scoped>

</style>