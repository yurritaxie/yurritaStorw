<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="name" label="流程节点" width="150" />
    <el-table-column prop="person" label="审批人" width="120">
      <template #default="scope">
        <span>{{ scope.row.person }}</span>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button type="primary" size="small" @click="handleClick">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <EditDailog ref="editdialog" :tableData="tableData" />
</template>

<script lang="ts" setup>
import { ref, nextTick, defineProps } from "vue";
import EditDailog from './EditDailog.vue'

const editdialog = ref();

const tableData = ref([
  {
    name: '审批',
    radio: false,
    person: [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
    ]
  },
  {
    name: '批复',
    radio: true,
    person: [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
    ]
  },
])

const handleClick = () => {
  nextTick(() => {

    editdialog.value.init();
  })
}
</script>
