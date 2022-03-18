<template>
  <article>
    <div class="sort">
      <div class="sort-box1">
        <p>分类</p>
        <div>
          <el-select v-model="value" placeholder="请选择">
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
      <div class="sort-box">
        <p>所属经销商</p>
        <div>
          <el-select v-model="value" placeholder="请选择">
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
      <div class="sort-box">
        <p>选择设备</p>
        <div>
          <el-select v-model="value" placeholder="请选择">
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
    </div>
    <div class="menu">
      <div>
        <p>丰巢-智能电源</p>
        <p>智能电源/广州番禺经销商</p>
        <p>广东省深圳市南山区南新路1029号</p>
      </div>
    </div>
    <div class="electric">
      <div class="electrc1">
        <div
          id="elect1"
          style="width: 100%; height: 441px; margin-left: 10px"
        ></div>
      </div>
      <div class="electrc2">
        <div
          id="elect2"
          style="width: 100%; height: 441px; margin-left: 10px"
        ></div>
      </div>
    </div>
    <footer>
      <div class="foo">
        <div class="fooTitle">
          <div><p>一个小时内的设备数据</p></div>
          <div>
            <div class="block">
              <el-date-picker
                v-model="value3"
                type="datetime"
                size="mini"
                placeholder="选择日期时间"
                default-time="12:00:00"
              >
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="footList">
          <el-table
            :data="tableData"
            style="width: 100%"
            stripe
            :header-cell-class-name="handlemyclass"
            :row-class-name="handrowclass"
          >
            <el-table-column prop="date" label="更新时间" height="10px">
            </el-table-column>
            <el-table-column prop="name" label="电池电量"> </el-table-column>
            <el-table-column prop="address" label="电池电压"> </el-table-column>
            <el-table-column prop="date" label="负载电压"> </el-table-column>
            <el-table-column prop="name" label="负载功率"> </el-table-column>
            <el-table-column prop="address" label="负载功耗"> </el-table-column>
            <el-table-column prop="date" label="pv电压"> </el-table-column>
            <el-table-column prop="name" label="充电电流"> </el-table-column>
            <el-table-column prop="address" label="充电功率"> </el-table-column>
            <el-table-column prop="date" label="累积充电"> </el-table-column>
            <el-table-column prop="name" label="电池温度"> </el-table-column>
            <el-table-column prop="address" label="电源状态"> </el-table-column>
            <el-table-column prop="name" label="实时天气"> </el-table-column>
            <el-table-column prop="address" label="实时气温"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="blank"></div>
    </footer>
  </article>
</template>

<script>
export default {
  name: "menuModlue",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      value3: "",
    };
  },
  mounted() {
    this.elect1();
    this.elect2();
  },
  methods: {
    elect1() {
      var chartDom = document.getElementById("elect1");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "设备实时电量",
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
          // prettier-ignore
          data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} W",
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
              color: "red",
            },
            {
              gt: 8,
              lte: 14,
              color: "green",
            },
            {
              gt: 14,
              lte: 17,
              color: "red",
            },
            {
              gt: 17,
              color: "green",
            },
          ],
        },
        series: [
          {
            name: "Electricity",
            type: "line",
            smooth: true,
            // prettier-ignore
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {},
          },
        ],
      };

      option && myChart.setOption(option);
    },
    elect2() {
      var chartDom = document.getElementById("elect2");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "设备充电功率",
          top: "10px",
          // let:"20px"
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
          // prettier-ignore
          data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} W",
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
              color: "red",
            },
            {
              gt: 8,
              lte: 14,
              color: "green",
            },
            {
              gt: 14,
              lte: 17,
              color: "red",
            },
            {
              gt: 17,
              color: "green",
            },
          ],
        },
        series: [
          {
            name: "Electricity",
            type: "line",
            smooth: true,
            // prettier-ignore
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {},
          },
        ],
      };

      option && myChart.setOption(option);
    },
    // 样式高亮
    handlemyclass: function (row, column, rowIndex, columnIndex) {
      console.log(row, column, rowIndex, columnIndex, "1213434");
      return "test";
    },
    handrowclass: function (row, column, rowIndex, columnIndex) {
      console.log(row, column, rowIndex, columnIndex);
      return "text";
    },
  },
};
</script>

<style scoped>
.menu {
  height: 65px;
  background: #fff;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
}
.menu div {
  height: 65px;
  display: flex;
  align-items: center;
}
.menu div p:nth-child(1) {
  margin-left: 32px;
  padding-right: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  width: 125px;
  height: 24px;
  font-size: 18px;
  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
  font-weight: 500;
  text-align: LEFT;
  color: #20253a;
  line-height: 24px;
  font-weight: 800;
}
.menu div p:nth-child(2) {
  margin-left: 30px;
  margin-right: 20px;
  font-weight: 600;
  width: 160px;
  height: 24px;
  font-size: 14px;
  font-family: Source Han Sans CN, Source Han Sans CN-Normal;
  font-weight: Normal;
  text-align: LEFT;
  color: rgba(0, 0, 0, 0.7);
  line-height: 24px;
}
.menu div p:nth-child(3) {
  /* width: 213px; */
  height: 24px;
  /* background: rgba(0, 0, 0, 0.5); */
  font-size: 14px;
  font-family: Source Han Sans CN, Source Han Sans CN-Normal;
  font-weight: Normal;
  text-align: LEFT;
  color: rgba(0, 0, 0, 0.5);
  line-height: 24px;
}
.sort {
  height: 65px;
  background: #fff;
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
}
.sort-box {
  display: flex;
  align-items: center;
  margin-left: 0px;
  margin-right: 26px;
}
.sort-box p {
  margin-right: 20px;
  width: 80px;
  height: 21px;
  /* background: rgba(0, 0, 0, 0.7); */
  font-size: 14px;
  font-weight: 800;
  text-align: RIGHT;
  color: rgba(0, 0, 0, 0.7);
  line-height: 14px;
  font-weight: 800;
}
.sort-box1 {
  display: flex;
  align-items: center;
  margin-left: 0px;
  margin-right: 26px;
}
.sort-box1 p {
  width: 57px;
  height: 21px;
  font-size: 14px;
  font-weight: 800;
  text-align: RIGHT;
  line-height: 14px;
  margin-right: 20px;
}
.electric {
  height: 441px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  background: #ecf0f5;
}
.electrc1 {
  width: 49.5%;
  height: 441px;
  margin-right: 20px;
  background: #fff;
  border-radius: 5px;
}
.electrc2 {
  width: 49.5%;
  height: 441px;
  background: #fff;
  border-radius: 5px;
}
.foo {
  background: #fff;
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  padding: 20px;
}
.fooList {
  margin-left: 10px;
  margin-top: 10px;
}
.fooTitle {
  height: 40px;
  font-weight: 800;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 6px;
}
.fooTitle div p {
  margin-left: 20px;
  margin-right: 20px;
}
.test {
  color: #08f !important;
}
.text {
  height: 34px !important;
}
.blank {
  width: 100%;
  height: 150px;
  background: #ecf0f5;
}
</style>