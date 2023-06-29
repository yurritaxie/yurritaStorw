<template>
  <div class="topCenter">
    <div class="left">
      <span>成为会员日期</span>
      <div class="demo-date-picker">
        <div class="block">
          <el-date-picker
            v-model="value"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            range-separator="~"
          />
        </div>
      </div>
    </div>
    <div class="right">
        <span :class="activeStyle==index?'active':''" v-for="(item,index) in datelIists" :key="index" @click="changeDate(index)">{{item}}</span>
    </div>
  </div>
</template>

<script setup>
    import {ref} from 'vue'
    let value=ref('')
    const datelIists=ref(['今日','昨日','最近7天','最近30天'])
    let activeStyle=ref(0)
    //点击切换日期
    let changeDate=(index)=>{
        activeStyle.value=index
    }
</script>


<style lang="scss" scoped>
.topCenter {
  padding: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  .left {
    display: flex;
    font-size: 14px;
    font-weight: 300;
    margin-right: 20px;
    width:347px;
    justify-content: space-between;
    span{
        width: max-content;
    }
  }
  .right{
    display: flex;
    span{
        font-size: 12px;
        font-weight: 100;
        margin-right: 15px;
        cursor: pointer;
    }
    .active{
        color: rgb(24, 144, 255);
    }
  }
}
</style>
<style>
    .el-date-editor.el-input, .el-date-editor.el-input__wrapper{
        height: 23px;
    }
    .el-range-editor.el-input__wrapper{
        justify-content: flex-start;
    }
    .el-date-editor .el-range-input{
        width: 80px;
        font-size: 12px;
    }
    .el-date-editor .el-range-separator{
        flex: 0;
        color: #606266;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__wrapper{
        width:250px;
    }
    .el-date-range-picker{
        width: 580px;
    }
    .el-date-range-picker__content{
        padding: 5px;
    }
    .el-date-table td .el-date-table-cell{
        height: 25px;
        padding: 0;
    }
    .el-date-table th{
        padding: 0;
    }
</style>