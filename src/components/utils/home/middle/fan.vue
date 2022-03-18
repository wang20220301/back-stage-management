<template>
  <div class="fan">
    <div class="fanStyle">
      <div id="fanImg" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script>
import { VuexMsg } from "../homeApi.js";
export default {
  name: "fanModule",

  mounted() {
    // 获取vuex数据
    VuexMsg((data) => {
      let { member_ratto } = data;
      let total = member_ratto.total;
      let normal = member_ratto.normal;
      let abnormal = member_ratto.abnormal;
      // 执行fanImg函数渲染页面
      this.fanImga(total, normal, abnormal);
    });
  },
  methods: {
    fanImga(total, normal, abnormal) {
      var chartDom = document.getElementById("fanImg");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "会员数量占比",
          subtext: `会员总数${total}`,
          left: "center",
          top: "10px",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: " right",
          top: "50px",
        },
        color: ["#FFC760", "#FB497C"],
        series: [
          {
            type: "pie",
            radius: "50%",
            data: [
              { value: abnormal, name: "锁定会员" },
              { value: normal, name: "正常会员" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              normal: {},
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.fan {
  width: 26%;
  height: 329px;
  margin-right: 20px;
  background: #fff;
  border-radius: 5px;
}
.fanStyle {
  padding: 10px;
  padding-left: 20px;
  height: 100%;
}
</style>