<template>
  <div>
    <header class="head">
      <div class="headLeft">
        <h3>{{ details.monitor_name }}</h3>
        <div class="text">
          <el-select v-model="value" placeholder="请选择" size="mini" >
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
import { getFacilityData, msg2 } from "./popup.js";
export default {
  name: "deviceData",
  components: {
    Footer,
  },
  mounted() {
    // 进入页面发起请求
    getFacilityData();
    // 异步获取vuex数据
    msg2((data) => {
      this.$data.details = data.detail;
      // 设备实时电量百分比
      let dataX = data.battery.y;
      let datay = data.battery.data;
      this.elect1(dataX, datay);
      // 设备充电功率
      let dataX2 = data.power.y;
      let datay2 = data.power.data;
      this.elect2(dataX2, datay2);
    });
  },
  data() {
    return {
      value2: "",
      details: "",
    };
  },
  methods: {
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
    // elect2(dataX2, datay2) {
    //   var chartDom = document.getElementById("elect2");
    //   var myChart = this.$echarts.init(chartDom);
    //   var option;

    //   option = {
    //     title: {
    //       text: "设备充电功率(w)",
    //       top: "10px",
    //     },
    //     tooltip: {
    //       trigger: "axis",
    //       axisPointer: {
    //         type: "cross",
    //       },
    //     },
    //     toolbox: {
    //       show: true,
    //       feature: {
    //         saveAsImage: {},
    //       },
    //     },
    //     xAxis: {
    //       type: "category",
    //       boundaryGap: false,
    //       // prettier-ignore
    //       data: dataX2,
    //     },
    //     yAxis: {
    //       type: "value",
    //       axisLabel: {
    //         formatter: "{value} W",
    //       },
    //       axisPointer: {
    //         snap: true,
    //       },
    //     },
    //     visualMap: {
    //       show: false,
    //       dimension: 0,
    //       pieces: [
    //         {
    //           lte: 6,
    //           color: "green",
    //         },
    //         {
    //           gt: 6,
    //           lte: 8,
    //           color: "green",
    //         },
    //         {
    //           gt: 8,
    //           lte: 14,
    //           color: "green",
    //         },
    //         {
    //           gt: 14,
    //           lte: 17,
    //           color: "green",
    //         },
    //         {
    //           gt: 17,
    //           color: "green",
    //         },
    //       ],
    //     },
    //     series: [
    //       {
    //         name: "设备充电功率(w)",
    //         type: "line",
    //         smooth: true,
    //         data: datay2,
    //         markArea: {},
    //       },
    //     ],
    //   };

    //   option && myChart.setOption(option);
    // },

    // //  当选择了日期点击确认即发送请求
    // async getDateRequest() {
    //   // 获取请求数据渲染页面
    //   console.log(this.$data.value1);
    //   let msg = await getDateSection(
    //     this.$data.value1[0],
    //     this.$data.value1[1]
    //   );
    //   // // 设备实时电量百分比
    //   let dataX = msg.data.data.battery.y;
    //   let datay = msg.data.data.battery.data;
    //   this.elect1(dataX, datay);
    //   // // 设备充电功率
    //   let dataX2 = msg.data.data.power.y;
    //   let datay2 = msg.data.data.power.data;
    //   this.elect2(dataX2, datay2);
    //   // console.log(msg.data.data);
    // },
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