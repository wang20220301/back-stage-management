
<template>
  <div class="tabel">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="Id" width="120">
        <template slot-scope="scope">{{ scope.row.group_id }}</template>
      </el-table-column>
      <el-table-column prop="name" label="设备名称" width=""> </el-table-column>
      <el-table-column prop="monitor_no" label="设备编号" width="">
      </el-table-column>
      <el-table-column prop="username" label="所属商户" width="">
      </el-table-column>
      <el-table-column prop="name" label="分类" width=""> </el-table-column>
      <el-table-column prop="name" label="位置" width=""> </el-table-column>
      <el-table-column label="设备状态" width="">
        <div
          :class="scope.row.status == 0 ? `off-line` : ``"
          slot-scope="scope"
        >
          <p class="pp">
            {{ scope.row.status == 0 ? "离线" : "在线" }}
          </p>
        </div>
      </el-table-column>
      <el-table-column prop="add_time" label="添加时间" width="">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <el-button @click="handleClick()" type="text" size="small"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { post } from "@/Api/index";
import { msg } from "@/token/index";
export default {
  name: "tablePage",
  data() {
    return {
      tableData: [],
      multipleSelection: [],
    };
  },
  mounted() {
    // 创建完成发送请求
    post("https://www.bi-et.com/api/monitor/sark_list", msg()).then((res) => {
      this.$data.tableData = res.data.data.list;
    });
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick() {
      // 点击跳转到查看详情页
      this.$router.push("/superAdmin/detalis");
    },
  },
};
</script>

<style scoped>
.tabel {
  margin-top: 10px;
  width: 100%;
  height: 100%;
}
.off-line {
  background: rgba(239, 35, 35, 0.1);
  color: #ef2323;
  width: 48px;
  height: 28px;
  height: 28px;
  border-radius: 2px;
  padding: 5px, 29px, 5px, 29px;
  display: flex;
}
.on-line {
  height: 28px;
  width: 86px;
  left: 1226px;
  top: 18px;
  border-radius: 2px;
  padding: 5px, 29px, 5px, 29px;
  color: #44F14D29;
  background: rgba(68, 241, 77, 0.16);

}
.pp {
  margin: 0 auto;
}
</style>