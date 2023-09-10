<template>
  <div class="login">
    <div class="content">
      <h1>后台系统登录</h1>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            class="username"
            v-model="ruleForm.username"
            placeholder="账号"
            :prefix-icon="UserFilled"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="password"
            v-model="ruleForm.password"
            :prefix-icon="Unlock"
            placeholder="密码"
            type="password"
            autocomplete="off"
            show-password
          />
        </el-form-item>
        <!-- <el-form-item>
          <div class="captcha">
            <mi-captcha
            width="300px"
            logo="https://img9.51tietu.net/pic/2019-091108/nnc0wvho1tpnnc0wvho1tp.jpg"
            @success="vertifiedSuccess"
            >
          </mi-captcha>
          </div>
        </el-form-item> -->
        <el-form-item>
          <el-button class="submit" type="primary" @click="submitForm"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { UserFilled, Unlock } from "@element-plus/icons-vue";
import { LoginPost } from "../../http/api/login";
//引入vuex
import {useStore} from 'vuex'
//引入路由
import { useRouter } from "vue-router";
let router = useRouter();
let store=useStore()
const validateUsername = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入账号"));
  } else {
    callback();
  }
};
const validatePassword = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
};
const ruleForm = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [{ validator: validateUsername, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }],
});

//发送登录请求获取请求数据
let getLoginData = (userInfo) => {
  LoginPost("/login", userInfo).then((res) => {
    console.log(res);
    if (res.data.code == 200) {
      sessionStorage.setItem("token", res.data.token);
      //将需要的信息传递给vuex，在vuex的action中发送请求
      store.dispatch('ayngetNavList',userInfo)
      //请求成功可以进行页面跳转
      router.push("/");
    } else {
      ElMessage({
        showClose: true,
        message: "网络错误",
        type: "warning",
        center: true,
      })
    }
  });
};
//动态验证的方法
// let vertify=false;
// let vertifiedSuccess=()=>{
//   vertify=true
// }

//点击提交按钮的方法
let submitForm = (ref) => {
  if(ruleForm.username&&ruleForm.password){
    getLoginData({ username: ruleForm.username, password: ruleForm.password });
  }else{
    ElMessage({
      showClose: true,
      message: "你还没有验证",
      type: "warning",
    });
  } 
};
</script>


<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
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
<style>
.el-input__wrapper {
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 5px;
  color: #454545;
  background-color: rgba(0, 0, 0, 0.1);
  outline-color: #454545;
  box-shadow: none;
  height: 40px;
}
.el-input__inner {
  color: white;
}
/* .el-form-item.is-error .el-input__wrapper{
  box-shadow: none;
}
.el-input__wrapper .is-focus{
  box-shadow: none;
} */
</style>