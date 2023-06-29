<template>
  <div class="cart">
    <div id="box" style="width: 400px; height: 250px"></div>
  </div>
  <!-- background-color: #2F62FF; -->
</template>

<script setup>
import * as echarts from "echarts"; //获取
import { onMounted } from "vue";

onMounted(() => {
  var chartDom = document.getElementById("box");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: "支付金额（元）",
      textStyle: {
        color: "#fff",
        fontWeight: 300,
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "00",
        "02",
        "04",
        "06",
        "08",
        "10",
        "12",
        "14",
        "16",
        "18",
        "20",
        "22",
      ],
    },
    yAxis: {
      type: "value",
    },
    color: ["#6EABE7"],
    textStyle: {
      color: "#fff",
    },
    series: [
      {
        data: [
          1000, 750, 746, 800, 785, 600, 650, 1000, 1200, 750, 900, 800, 720,
        ],
        type: "line",
        smooth: true,
        areaStyle: {},
      },
    ],
  };
  option && myChart.setOption(option);
});
</script>

<style lang="scss" scoped>
.cart {
  padding: 10px;
  width: 400px;
  height: 250px;
  background-color: #2f62ff;
  border-radius: 10px;
}
</style>


