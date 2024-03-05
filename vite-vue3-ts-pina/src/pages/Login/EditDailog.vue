<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
    <span>{{ data }}</span>
    <el-button type="primary" @click="handleChange">
      Confirm
    </el-button>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineExpose, defineProps, toRef, toRefs } from 'vue'
const props = defineProps({
  tableData: {
    type: Array,
  }
})

const dialogVisible = ref(false)

const data = ref(props.tableData);
console.log(data, 123456);

const handleClose = () => {
  data.value?[0].name = '孙悟空'
}

const handleChange = () => {

}
const init = () => {
  dialogVisible.value = true;

}
defineExpose({ init })
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
