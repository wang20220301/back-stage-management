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
  </div>
</template>


<script>
export default {
  name: "footerModelue",
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
  methods: {
    handlemyclass: function (row, column, rowIndex, columnIndex) {
      console.log(row, column, rowIndex, columnIndex);
      return "test";
    },
    handrowclass: function (row, column, rowIndex, columnIndex) {
      console.log(row, column, rowIndex, columnIndex);
      return "text";
    },
  },
};
</script>
<style>
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