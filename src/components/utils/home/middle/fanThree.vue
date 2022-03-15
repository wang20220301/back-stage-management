<template>
  <div class="fanthree">
    <div class="text"><p>各类产品数量占比</p></div>
    <div id="fanthree" style="width: 540px; height: 280px"></div>
  </div>
</template>

<script>
export default {
  name: "fanthreeModule",
  mounted() {
    this.fanthree();
  },
  methods: {
    fanthree() {
      var chartDom = document.getElementById("fanthree");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        // legend: {
        //   top: "bottom",
        // },
        toolbox: {
          show: true,
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            center: ["50%", "50%"],
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "零碳储物柜" },
              { value: 38, name: "零碳智慧空间" },
              { value: 32, name: "小铁-智慧电源" },
              { value: 30, name: "深圳展柜" },
              { value: 28, name: "增城测试柜" },
              { value: 26, name: "丰巢-智能电源" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.fanthree {
  width: 540px;
  height: 329px;
  background: #fff;
  border-radius: 5px;
}
.text {
  margin-top: 10px;
  width: 100%;
  height: 32px;
  /* background: honeydew; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.text p {
  width: 112px;
  height: 24px;
  font-size: 14px;
  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
  font-weight: 500;
  text-align: LEFT;
  color: #20253a;
  line-height: 24px;
}
</style>