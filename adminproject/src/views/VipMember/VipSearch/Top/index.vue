<template>
  <div class="top">
    <TopHead></TopHead>
    <div class="main">
      <div class="mainleft">
        <Topcenter></Topcenter>
        <div v-show="store.state.showAllTop">
          <TopMemberInfo ></TopMemberInfo>
          <TopMemberClass></TopMemberClass>
          <TopBotSearch></TopBotSearch>
        </div>
      </div>
      <div class="mainright">
        <TopExpand></TopExpand>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopHead from "./TopHead.vue";
import Topcenter from "./Topcenter.vue";
import TopExpand from "./TopExpand.vue";
import TopMemberInfo from "./TopMemberInfo.vue";
import { useStore } from "vuex";
import TopMemberClass from "./TopMemberClass.vue";
import TopBotSearch from "./TopBotSearch.vue";

//从vuex中获取数据，知道顶部信息是否展开
let store = useStore();
</script>

<style lang="scss" scoped>
.top {
  background-color: white;
  margin-bottom: 15px;
}
.main {
  width: 100%;
  display: flex;
  padding-right: 20px;
  align-items: flex-end;
  padding-bottom: 10px;
  justify-content: space-between;
}
</style>