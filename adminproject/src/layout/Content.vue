<template>
  <!-- {component}作用域插槽 -->
  <!--  <component :is="component"></component>这个会根据路由找到对象组件进行渲染 -->
  <!-- name:是否应用css过渡 class 默认为：true-->
  <!-- 控制离开/进入过渡的时序 -->
  <!-- appear 用于自定义过渡 class 的 prop。
   在模板中使用短横线命名，例如：enter-from-class="xxx" -->
  <div id="content">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
        :duration="{ enter: 400, leave: 400 }"
        appear
      >
        <!-- 使用keep-aclive保持组件的缓存功能 -->
        <!-- <keep-alive>
          <component :is="Component"/>
        </keep-alive> -->
        <!-- 有些组件需要实时更新，可以通过条件判断，该组件是否保持缓存功能 原本keep-active带有两个属性include，exclude,但是我们使用的是setup语法糖，所以无法生效
        注意，使用keep-active,生命周期会有两个钩子函数  onActivated   deactivated
        -->
        <keep-alive v-if="keepShow">
          <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
  import {onActivated, ref,watch} from 'vue'
  import {useRoute,useRouter} from 'vue-router'
  let keepShow=ref(false)
  let route=useRoute()
  let router=useRouter()
  watch(()=>route,(val)=>{
    if(val.path=='/vipsearch'){
      keepShow.value=true
    }
  },{immediate:true,deep:true})

</script>
<style scoped lang="scss">
#content {
  width: 98%;
  height: 100%;
  overflow-y: scroll;
  background: #f0f2f5;
  position: relative;
  padding: 15px;
}
//   动画
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-tenter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>