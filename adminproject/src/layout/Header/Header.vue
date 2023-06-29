<template>
  <div class="header">
    <div class="top">
      <div class="left">
        <HeaderFold></HeaderFold>
        <Breadcrumb></Breadcrumb>
      </div>
      <div class="right">
        <Search></Search>
        <FullScreen></FullScreen>
        <ThemeChange></ThemeChange>
        <OutLogin></OutLogin>
      </div>
    </div>
    <div class="bottom">
      <TagHistory></TagHistory>
    </div>
  </div>
</template>

<script setup>
import HeaderFold from './HeaderFold.vue';
import Breadcrumb from './Breadcrumb.vue';
import Search from './Search.vue';
import FullScreen from './FullScreen.vue';
import OutLogin from './OutLogin.vue';
import TagHistory from './TagHistory.vue';
import ThemeChange from './ThemeChange.vue';

</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 70px;
    position: sticky;
    z-index: 1000;
    background-color: white;
    top: 0;
    .top{
      width:100%;
      height:40px;
      border-bottom: 1px solid #E8E8E8;
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding: 0 15px;
      .left{
        display: flex;
        height: 100%;
      }
      .right{
        display: flex;
        width: max-content;
        height: 100%;
      }
    }
    .bottom{
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
      border-bottom: 1px solid #d8dce5;
      height: 30px;
      padding: 0 15px;
    }
}
</style>