<template>
  <div class="fanthree">
    <div class="fanthreeStye">
      <div id="fanthree" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script>
import { VuexMsg } from "../homeApi.js";
export default {
  name: "fanthreeModule",
  mounted() {
    this.setData();
  },
  methods: {
    setData() {
      VuexMsg((data) => {
        let { monitor_type } = data;
        //  遍历
        for (let item of monitor_type) {
          let value = item.num;
          delete item.num;
          item.value = value;
        }
        this.fanthree(monitor_type);
      });
    },
    fanthree(monitor_type) {
      var chartDom = document.getElementById("fanthree");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "各类产品数量占比",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "产品数量",
            type: "pie",
            radius: "50%",
            data: monitor_type,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
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
.fanthree {
  width: 30%;
  height: 329px;
  background: #fff;
  border-radius: 5px;
}
.fanthreeStye {
  padding: 30px;
  height: 100%;
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