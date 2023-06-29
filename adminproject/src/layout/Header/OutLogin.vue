<template>
  <div class="outlogin">
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
       <img class="lovely" src="../../assets/user.gif" alt="">
       <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="Home">首页</el-dropdown-item>
          <el-dropdown-item command="outlogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';
let router=useRouter()

const handleCommand = (command) => {
    if(command=='outlogin'){
        sessionStorage.removeItem('token')
        router.push('./login')
    }else if(command=='Home'){
        router.push('./home')
    }
};
</script>


<style scoped>
.lovely{
    width: 40px;
    height: 40px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
  