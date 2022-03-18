<template>
  <div class="fanTwo">
    <div class="title">
      <div class="text">
        <p>新增会员数量</p>
      </div>
      <div class="time">
        <p
          v-for="(item, index) in list"
          :key="index"
          @click="cutData(index)"
          :class="cont == index ? `highlight` : ``"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div id="fanImg2" style="width: 100%; height: 300px"></div>
  </div>
</template>

<script>
import { getAddVip } from "../homeApi.js";
export default {
  name: "fanTwo",
  data() {
    return {
      list: ["今日", "本周", "本月", "全年"],
      cont: 0,
    };
  },
  mounted() {
    //  挂载完成获取数据
    this.setData();
  },
  methods: {
    async setData() {
      let { xData, yData } = await getAddVip("day_type", 1);
      this.fanImga(xData, yData);
    },
    fanImga(xData, yData) {
      var chartDom = document.getElementById("fanImg2");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        title: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: xData,
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} ",
          },
          axisPointer: {
            snap: true,
          },
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              lte: 6,
              color: "green",
            },
            {
              gt: 6,
              lte: 8,
              color: "green",
            },
            {
              gt: 8,
              lte: 14,
              color: "green",
            },
            {
              gt: 14,
              lte: 17,
              color: "green",
            },
            {
              gt: 17,
              color: "green",
            },
          ],
        },
        series: [
          {
            name: "新增会员",
            type: "line",
            smooth: true,
            data: yData,
          },
        ],
      };

      option && myChart.setOption(option);
    },
    async cutData(index) {
      this.$data.cont = index;
      let { xData, yData } = await getAddVip("day_type", index + 1);
      this.fanImga(xData, yData);
    },
  },
};
</script>

<style scoped>
.fanTwo {
  width: 40.5%;
  height: 329px;
  margin-right: 20px;
  background: #fff;
  border-radius: 5px;
}
.title {
  margin-top: 30px;
  width: 100%;
  height: 28px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
}
/* 高亮 */
.highlight {
  background: #5196ff !important;
  color: #fff !important;
}
.time {
  display: flex;
  margin-right: 30px;
  width: 228px;
  height: 28px;
}
.time p {
  width: 44px;
  height: 28px;
  margin-right: 8px;
  text-align: center;
  color: #74798c;
  background: #f2f2f2;
}
.text {
  width: 100px;
  height: 28px;
  margin-left: 24px;
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
  font-weight: 800;
}
</style>