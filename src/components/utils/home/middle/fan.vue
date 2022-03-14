<template>
  <div class="fan">
    <div class="fanBox">
      <div
        id="fanImg"
        style="width: 400px; height: 400px; margin-left: 50px"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fanModule",
  mounted() {
    this.fanImga();
  },
  methods: {
    fanImga() {
      var chartDom = document.getElementById("fanImg");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "会员数量占比",
          subtext: "会员总数50",
          left: "center",
          top: "20px",
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
              { value: 484, name: "锁定会员" },
              { value: 300, name: "正常会员" },
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
  width: 500px;
  height: 329px;
  margin-right: 20px;
  background: #fff;
}
#fanImg {
  margin-left: 50px;
}
</style>