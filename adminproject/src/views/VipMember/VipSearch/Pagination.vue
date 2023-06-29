<template>
  <div class="paginate">
    <el-pagination
      v-model:currentPage="currentPage"
      layout="slot"
      :total="total"
      :page-count="Math.ceil(total / pageSize)"
    >
      <span style="flex: 1; color: #929292"
        >共{{ total }}条记录&ensp;第 {{ currentPage }} /
        {{ Math.ceil(total / pageSize) }} 页</span
      >
    </el-pagination>
        <el-pagination
      v-model:currentPage="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      layout="prev, pager, next,slot"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-count="Math.ceil(total / pageSize)"
    >
    <select
      class="self_create_slect"
      v-model="pageSize"
      @change="handleSizeChange(pageSize)"
    >
      <option :value="item" v-for="(item, index) in Pages" :key="index">
        {{ item }}条/页
      </option>
    </select>
  </el-pagination>
    <el-pagination
      layout="slot"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-count="Math.ceil(total / pageSize)"
    >
      <i>跳至</i
      ><input
        @keydown.enter="changeCurrentPage(inputData)"
        v-model="inputData"
        class="selfcreateinput"
        type="text"
      /><i>页</i>
    </el-pagination>

  </div>
</template>
<script setup>
import { ref } from "vue";
import { inject } from "vue";
import { watch } from "vue";
//操作分页
let currentPage = ref(1);
let pageSize = ref(10);
let total = ref(0);

//向父元素传递当前页面和每页数据量的数据
let emits = defineEmits(["pageData"]);
//跳转页面获取值

let handleCurrentChange = (val) => {
  // console.log("是第几页吗2", val);
  currentPage.value = val;
  emits("pageData", {
    currentPage: currentPage.value,
    pageSize: pageSize.value,
  });
};
let handleSizeChange = function (val) {
  emits("pageData", { currentPage: currentPage.value, pageSize: val });
};
//获取每页呈现的数据
let Pages = ref([10, 20, 30, 40]);
//获取数据总条数
let memberList = inject("memberList");
//封装按键跳转
let inputData = ref(1);
let changeCurrentPage = (value) => {
  if(parseInt(value)<=Math.ceil(total.value/ pageSize.value)){
    currentPage.value = parseInt(value);
  }else{
    currentPage.value=Math.ceil(total.value/pageSize.value)
  }
  emits("pageData", { currentPage: currentPage.value, pageSize: pageSize.value});
};

watch(
  memberList,
  (val) => {
    if (val.length) {
      total.value = val.length;
    }
  },
  { immediate: true, deep: true }
);
</script>

<style>
.paginate {
  width: 100%;
  display: flex;
  align-content: center;
  padding: 16px 20px 100px;
}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
.el-pagination {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.el-pagination:nth-of-type(3) {
  width: fit-content;
}
.el-pagination button,
.el-pagination span:not([class*="suffix"]) {
  justify-content: space-between;
}
.el-pager {
  margin-left: 10px;
}
.el-pager li {
  box-sizing: content-box;
  border: 1px solid #cabebe;
  border-radius: 5px;
  width: 30px;
  margin-right: 10px;
  padding: 0;
  font-size: 12px;
  font-weight: 300;
}
.el-pager li.is-active {
  background-color: #409eff;
  color: white;
 
}
.el-pager li.is-active+li{
  border-left:1px solid #cabebe;;
  
}
.el-pagination button {
  border: 1px solid #cabebe;
  border-radius: 5px;
  margin-right: 5px;

}
.self_create_slect {
  border: none;
  margin-left: 10px;
  height: 32px;
  border-radius: 5px;
  border: 1px solid #cabebe;
  font-size: 12px;
  font-weight: 300;
  outline: none;
}
.selfcreateinput {
  border-radius: 5px;
  margin: 0 10px;
  height: 32px;
  width: 40px;
  border: 1px solid #cabebe;
  font-size: 12px;
  font-weight: 300;
  outline: none;
  text-align: center;
}
i {
  font-size: 12px;
  font-weight: 300;
}
</style>
