<template>
  <div id="login">
    <div class="content">
      <h1>后台管理系统登录</h1>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: "",
  password: "",
})
const validatePass = (rule: any, value: any, callback: any) =>{
  
}
const validatePass2 = (rule: any, value: any, callback: any) =>{
  
}

const rules = reactive({
  username: [{ validator: validatePass, trigger: 'blur' }],
  password: [{ validator: validatePass2, trigger: 'blur' }],
})

</script>

<style scoped lang="less">
#login {
  width: 100%;
  height: 100%;
  background: url('@/assets/images/login/bg.png') center center;
  position: relative;

  .content {
    width: 300px;
    height: 340px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    h1 {
      width: 100%;
      height: max-content;
      font-size: 26px;
      color: white;
      margin-bottom: 30px;
      text-align: center;
    }

    .submit {
      width: 100%;
      height: 30px;
    }
  }
}
</style>