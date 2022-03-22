<template>
  <div>
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
import { msg2 } from "./popup.js";
export default {
  name: "footerModelue",
  mounted() {
    // 页面更新获取数据
    msg2((data) => {
      this.$data.tableData = data.monitor_data;
      console.log(data.monitor_data);
    });
  },
  data() {
    return {
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
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
        },
      ],
      value1: "",
      value2: "",
      value3: "",
    };
  },
  methods: {
    handlemyclass: function () {
      return "test";
    },
    handrowclass: function () {
      return "text";
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
.footList {
  margin-left: 10px;
  margin-top: 10px;
  height: 480px;
  overflow: scroll;
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