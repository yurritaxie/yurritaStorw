<template>
  <div class="tag">
      <!--  :class="index>1?'active':''" -->
      <div  v-for="(tag, index) in tags" :key="index"  @click="changePath(tag.path)"  class="el-tag" :class="activeStyle==tag.path?'active':''">
        <span class="circle"></span>
        <span>{{ tag.name }}</span>
        <span v-if="index > 1" class="delete" @click.stop="deleteTag(tag,index)">×</span>
      </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { watch } from "vue";

let route = useRoute();
let router = useRouter();

let tags = ref([
  { name: "首页", path: "/home" },
  { name: "文件", path: "/document" },
]);

function getTagLists(){
  if(sessionStorage.getItem('tagList')){
   return JSON.parse(sessionStorage.getItem('tagList'))
  }else{
    return tags
  }
}
tags=ref(getTagLists())

let addTag = (obj) => {
  let index = tags.value.findIndex((item) => {
    return item.name == obj.name;
  });
  if (index > -1 || obj.name==undefined) {
  }else{
    tags.value.push(obj);
    sessionStorage.setItem('tagList',JSON.stringify(tags.value))
  }
}

let activeStyle=ref('/home')
//监听路由
watch(
  () => route,
  (val) => {
    addTag({ name: val.meta.name, path: val.path });
    activeStyle.value=val.path
  },
  { deep: true, immediate: true }
);

//点击标签地址进行切换
function changePath(val) { 
      router.push(val);
    }

//点击小叉叉删除
function deleteTag(tag,index){
  if(activeStyle.value==tag.path){
         router.push(tags.value[index-1].path)
          tags.value.splice(index,1)
    }else{
        tags.value.splice(index,1) 
    }
  sessionStorage.setItem('tagList',JSON.stringify(tags.value))
}

</script>

<style lang="scss" scoped>
.tag {
  height: 100%;
  width: max-content;
  display: flex;
  align-items: center;
}
.el-tag {
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 22px;
  padding: 0 3px;
  --el-tag-border-radius: none;
  margin-right: 5px;
  background-color: white;
  border: 1px solid #d8dce5;
  color: #82858b;
  font-weight: 400;
}
.active{
  background-color: #42b983;
  color:white;
  .delete{
  color: white;
}
.circle{
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: white;
  margin-right: 4px;
}
}
// .el-tag .el-tag__close {
//     color: #82858b;
// }
.delete {
  width: 12px;
  height: 12px;
  line-height: 1;
  text-align: center;
  font-size: 12px;
  display: inline-block;
  margin-left: 2.5px;
  border-radius: 50%;
  color: #82858b;
  cursor: pointer;
}
.delete:hover{
  background-color: rgb(194, 187, 187);
}
</style>
  