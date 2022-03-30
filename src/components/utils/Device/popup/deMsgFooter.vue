<template>
  <div>
    <div class="foo">
      <div class="fooTitle">
        <div><p>设备数据表</p></div>
        <div>
          <div class="block">
            <el-date-picker
              v-model="value3"
              type="datetimerange"
              size="mini"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd,HH:mm:ss"
              @change="getDateData"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="download">
          <el-button class="el-icon-download" size="mini" @click="downloadMsg"
            >导出数据</el-button
          >
        </div>
      </div>
      <div class="footList2">
        <el-table
          :data="tableData"
          style="width: 100%"
          height="34vh"
          stripe
          :header-cell-class-name="handlemyclass"
          :row-class-name="handrowclass"
        >
          <el-table-column prop="time" label="更新时间" height="10px">
          </el-table-column>
          <el-table-column prop="battery" label="电池电量"> </el-table-column>
          <el-table-column prop="battery_voltage" label="电池电压">
          </el-table-column>
          <el-table-column prop="drain_voltage" label="负载电压">
          </el-table-column>
          <el-table-column prop="drain_power" label="负载功率">
          </el-table-column>
          <el-table-column prop="add_power" label="负载功耗"> </el-table-column>
          <el-table-column prop="voltage" label="pv电压"> </el-table-column>
          <el-table-column prop="current" label="充电电流"> </el-table-column>
          <el-table-column prop="power" label="充电功率"> </el-table-column>
          <el-table-column prop="electric" label="累积充电"> </el-table-column>
          <el-table-column prop="temperature" label="电池温度">
          </el-table-column>
          <el-table-column label="电源状态">
            <template slot-scope="scope">{{
              scope.row.wire == 0 ? "关" : "开"
            }}</template>
          </el-table-column>
          <el-table-column label="灯状态">
            <template slot-scope="scope">{{
              scope.row.lamp == 0 ? "关" : "开"
            }}</template>
          </el-table-column>
          <el-table-column prop="weather" label="实时天气"> </el-table-column>
          <el-table-column prop="qiwen" label="实时气温(度)"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>


<script>
import { getFacilityData } from "./popup.js";
export default {
  name: "footerModelue",
  data() {
    return {
      tableData: [],
      value3: "",
      hour: "",
      day: "",
      lazy: true,
    };
  },
  mounted() {
    // 进入页面获取数据
    getFacilityData("/api/index/monitor_switch");
  },
  computed: {
    vueMSg2() {
      return this.$store.state.popup.detailsMsg;
    },
  },
  watch: {
    vueMSg2(data) {
      this.$data.hour = data.hour;
      this.$data.day = data.day;
      if (data.monitor_data == false) {
        this.$data.tableData = [];
      } else {
        this.$data.tableData = data.monitor_data;
      }
    },
  },

  methods: {
    handlemyclass: function () {
      return "test";
    },
    handrowclass: function () {
      return "text";
    },
    getDateData(value, type = 1) {
      let data = this.$data;
      let timeArr = data.value3;
      let hour = "";
      // 获取当前日期请求数据
      getFacilityData(
        "/api/index/day_switch",
        type,
        hour,
        data.day,
        timeArr[0],
        timeArr[1]
      );
    },
    // 父组件触发子组件方法
    fatherClick(type) {
      this.getDateData(null,type);
    },
    // 触底懒加载
    load() {
      console.log("懒加载");
      // console.log(tree, treeNode);
    },
    // 点击导出数据
    downloadMsg() {
      console.log("导出数据成功");
    },
  },
};
</script>
<style>
.foo {
  background: #fff;
  margin-left: 20px;
  margin-right: 20px;
}
.footList2 {
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
.download {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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