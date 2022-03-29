<template>
  <div>
    <div class="foo">
      <div class="fooTitle">
        <div><p>设备数据表</p></div>
        <div>
          <div class="block">
            <el-date-picker
              v-model="value3"
              type="daterange"
              size="mini"
              start-placeholder="开始日期"
              range-separator="至"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd,H"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="download">
          <el-button class="el-icon-download" size="mini" @click="downloadMsg">导出数据</el-button>
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
import { msg2, getHour } from "./popup.js";
export default {
  name: "footerModelue",
  mounted() {
    msg2((data) => {
      console.log(data, "打印data数据");
      if (data.monitor_data == false) {
        this.$data.tableData = [];
      } else {
        this.$data.tableData = data.monitor_data;
      }
    });
  },
  data() {
    return {
      tableData: [],
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
    async getHousData() {
      let string = this.$data.value3;
      //  转为数组
      let arr = string.split(",");
      let msg = await getHour(arr[0], arr[1]);
      if (msg.monitor_data == false) {
        this.$data.tableData = [];
      } else {
        this.$data.tableData = msg.monitor_data;
      }
    },
    // 点击导出数据
     downloadMsg(){
      console.log("导出数据成功")
    }
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
.download{
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