<template>
  <div class="table">
    <h1>
      <span>会员列表</span>
      <div>
        <button>+&ensp;新建</button>
        <button>批量编辑</button>
      </div>
    </h1>
    <div class="main">
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,(currentPage)*pageSize)"
        style="width: 100%; font-size: 13.5px; color: black; font-weight: 200"
        show-overflow-tooltip="true"
      >
      <!-- @selection-change="handleSelectionChange" -->
        <el-table-column type="selection" width="45" />
        <!-- 操纵列的格式 -->
        <el-table-column label="会员信息" width="140px">
            <template #default="scope">
              <div style="display:flex;justify-content: space-between;align-items: center;">
                <div>
                  <img style="width:30px;height:30px;border-radius: 50%;" :src="scope.row.headImg" alt="">
                </div>
                <div style="display:flex;flex-direction:column">
                  <span>{{scope.row.member}}</span>
                  <span>{{scope.row.phone}}</span>
                </div>
              </div>
            </template>
        </el-table-column>
        <el-table-column prop="class" label="会员等级" />
        <!-- 操纵列的格式 -->
        <el-table-column label="会员标签" width="130px"> 
          <template #default="scope">
            <div style="display:flex;justify-content: space-between;flex-wrap: wrap;font-size:12px">
                <span v-for="(item,index) in scope.row.tags" :key="index" style="border:1px solid #d9d9d9;background-color:#F3F3F3;padding: 0px 6px;border-radius: 2px;margin-bottom: 5px;">
                 {{item}}
                </span> 
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="point" label="积分" />
        <el-table-column prop="order" label="下单次数" />
        <el-table-column prop="orderM" label="下单金额" />
        <!-- 操纵列的格式 -->
        <el-table-column label="付费会员">
          <template #default="scope">
            <span v-if="scope.row.isMember">是</span>
            <span v-else>不是</span>
          </template>
        </el-table-column>
        <el-table-column prop="cartM" label="卡内余额" />
        <!-- 操纵列的格式 -->
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <div
              style="display: flex; justify-content: space-between;color:#1890ff;"
            >
              <div class="left" style="display: flex; flex-direction: column;">
                <span>会员详情</span>
                <span>修改积分</span>
              </div>
              <span>充值</span>
              <span @click="changeTags(scope)" style="cursor: pointer;" >编辑标签</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination @pageData="pageData"></Pagination>
    <Pop></Pop>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { inject} from "vue";
import { watch } from "vue";
import Pagination from "./Pagination.vue";
import Pop from "./Pop.vue";
let memberList = inject("memberList");
let currentPage=ref(1)
let pageSize=ref(10)
//回调函数获取子元素传递过来的数据
let pageData=(val)=>{
  // console.log(val)
  currentPage.value=val.currentPage
  pageSize.value=val.pageSize

}
// console.log("table中收到父组件的信息",memberList);
let tableData=ref([])
watch(memberList,(val)=>{
    if(val.length){
    // total.value=val.length;
    tableData.value=val
    // console.log("table中收到父组件的信息",tableData.value);
  }
},{immediate:true,deep:true})
//修改tags标签
let dialogVisible=ref(false)
let scopeIndex=ref(0)
let changeTags=(scope)=>{
  // console.log('scope是啥');
  dialogVisible.value=!dialogVisible.value
  scopeIndex.value=scope.$index
  // if(sessionStorage.getItem('tags')){
  //   memberList.value[scope.$index].tags=JSON.parse(sessionStorage.getItem('tags'))
  //   sessionStorage.removeItem('tags')
  // }
}
provide("dialogVisible",dialogVisible)
provide("scopeIndex",scopeIndex)

</script>

<style lang="scss" scoped>
.table {
  background-color: white;
  height:max-content;
  h1 {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    span {
      font-size: 14px;
      font-weight: 300;
    }
    button {
      font-size: 14px;
      font-weight: 300;
      padding: 0 10px;
      height: 28px;
      line-height: 28px;
      border: none;
      cursor: pointer;
    }
    button:nth-of-type(1) {
      margin-right: 10px;
      border-radius: 2px;
      color: white;
      background-color: #1890ff;
      border: 1px solid #1890ff;
    }
    button:nth-of-type(2) {
      margin-right: 10px;
      border-radius: 2px;
      border: 1px solid #d9d9d9;
      background-color: white;
    }
    button:nth-of-type(2):hover {
      border: 1px solid #1890ff;
      color: #1890ff;
    }
  }
  .main {
    padding: 0 20px 10px;
    height: max-content;
  }
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
.el-pagination{
    width: 100%;
}
.el-pagination button, .el-pagination span:not([class*=suffix]){
    justify-content: space-between;
}
}
</style>
<style>
 /*  操作表格内部的样式 */
.el-table {
  --el-table-header-text-color: black;
}
.el-table td{
    font-size: 12.5px;
}
</style>
