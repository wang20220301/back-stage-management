
<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>

    <el-progress type="circle" :percentage="30"></el-progress>
<el-progress type="circle" :percentage="100"></el-progress>
<el-progress type="circle" :percentage="20" status="success"></el-progress>
<el-progress type="circle" :percentage="60" status="warning"></el-progress>
<el-progress type="circle" :percentage="70" status="exception"></el-progress>
  </div>
</template>

  <script>
export default {
  name: "ppeP",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
      format(percentage) {
        return percentage === 100 ? '空' : `${percentage}%`;
      }
    }
};
</script>