<template>
  <div>
    <header class="head">
      <div class="headLeft">
        <h3>{{ details.monitor_name }}</h3>
        <div class="text">
          <el-select
            v-model="drop_down"
            placeholder="实时电量"
            size="mini"
            @change="clickCup(drop_down)"
          >
            <el-option
              v-for="item in monitor_list"
              :key="item.id"
              :label="item.name"
              :value="item.id"
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
    <Footer ref="child"></Footer>
  </div>
</template>

<script>
import Footer from "./deMsgFooter.vue";
export default {
  name: "deviceData",
  components: {
    Footer,
  },
  // 使用computed 监听vuex数据的变化
  computed: {
    vueMSg() {
      return this.$store.state.popup.detailsMsg;
    },
  },
  watch: {
    vueMSg(data) {
      this.$data.monitor_list = data.monitor_list;
      this.$data.details = data.detail;
      // console.log(this.$data.drop_down);
      let value = data.monitor_list[this.$data.type * 1].name;
      this.elect1(data.data.unit, data.data.x, data.data.y, value);
    },
  },
  data() {
    return {
      type: 0,
      drop_down: "实时电量",
      details: "",
      monitor_list: "",
    };
  },
  methods: {
    elect1(unit, dataX, datay, name) {
      var chartDom = document.getElementById("elect1");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        title: {
          subtext: `${name}`,
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
            formatter: `{value} ${unit}`,
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
            name: `${name}`,
            type: "line",
            smooth: true,
            data: datay,
            markArea: {},
          },
        ],
      };

      option && myChart.setOption(option);
    },
    clickCup(value) {
      // 获取当前的id处理触发子组件方法
      this.$data.type = value * 1 - 1;
      this.$refs.child.fatherClick(value);
      console.log("点击触发", value);
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