<template>
  <div class="theme">
    <span
      v-if="showdark"
      @click="changeTheme"
      class="iconfont icon-dark"
    ></span>
    <span
      v-else
      @click="changeTheme"
      class="iconfont icon-baitianmoshimingliangmoshi"
    ></span>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";
const isDark = useDark({
    selector: "html",//添加属性到html元素上，也可以添加到别的元素上
    attribute: "class",//添加的属性名称
    valueDark: "dark",
    valueLight: "light",
  });


const toggleDark = useToggle(isDark);
let showdark = ref(true);
let changeTheme = () => {
  showdark.value = !showdark.value;
  toggleDark();
};
</script>

<style lang="scss" scoped>
.theme {
  margin: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>