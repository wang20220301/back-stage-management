<template>
  <div class="fanTwo">
    <div class="title">
      <div class="text">
        <p>新增会员数量</p>
      </div>
      <div class="time">
        <p v-for="(item, index) in list" :key="index">
          {{ item }}
        </p>
      </div>
    </div>
    <div id="fanImg2" style="width: 100%; height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: "fanTwo",
  data() {
    return {
      list: ["今日", "本周", "本月", "全年"],
    };
  },
  mounted() {
    this.fanImga();
  },
  methods: {
    fanImga() {
      var chartDom = document.getElementById("fanImg2");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [25, 50, 75, 100, 125, 150, 175],
            type: "line",
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.fanTwo {
  width: 800px;
  height: 329px;
  margin-right: 20px;
  background: #fff;
}
.title {
  margin-top: 30px;
  width: 100%;
  height: 28px;
  line-height: 24px;
  /* background: lavender; */
  display: flex;
  justify-content: space-between;
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
  background: #f2f2f2;
  text-align: center;
}
.text {
  width: 100px;
  height: 28px;
  margin-left: 24px;
}
</style>