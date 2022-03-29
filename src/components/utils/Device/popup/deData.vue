<template>
  <div>
    <header class="head">
      <div class="headLeft">
        <h3>{{ details.monitor_name }}</h3>
        <div class="text">
          <el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </header>
    <div class="electric">
      <div class="electrc1">
        <div id="elect1" style="width: 100%; height: 100%"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./deMsgFooter.vue";
import { getFacilityData } from "./popup.js";
export default {
  name: "deviceData",
  components: {
    Footer,
  },
  mounted() {
    // 进入页面发起请求
    this.getData()
    // console.log(data, "123");
  },
  data() {
    return {
      value2: "",
      details: "",
    };
  },
  methods: {
    async getData() {
      let data = await getFacilityData();
      this.$data.details=data.detail
    },
    elect1(dataX, datay) {
      var chartDom = document.getElementById("elect1");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          subtext: "设备实时电量",
          top: "10px",
        },
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
          data: dataX,
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} %",
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
            name: "设备实时电量(百分比)",
            type: "line",
            smooth: true,
            data: datay,
            markArea: {},
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.head {
  width: 100%;
  height: 44px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.headLeft {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.headLeft .text {
  margin-left: 30px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  width: 160px;
  height: 24px;
  font-size: 14px;
  font-weight: 400;
  text-align: LEFT;
  color: #606266;
  line-height: 24px;
}
.headLeft .text2 {
  height: 44px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  text-align: LEFT;
  color: #909399;
  line-height: 24px;
}
.headRight {
  width: 400px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
}
.electric {
  height: 28vh;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
}
.electrc1 {
  width: 100%;
  height: 100%;
  margin-right: 10px;
  background: #fff;
  border-radius: 5px;
}
</style>