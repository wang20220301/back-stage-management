
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
          :class="scope.row.status == 0 ? `off-line` : `on-l`"
          slot-scope="scope"
          name="1212"
        >
          <p class="pp">
            {{ scope.row.status == 0 ? "离线" : "在线" }}
          </p>
        </div>
      </el-table-column>
      <el-table-column prop="add_time" label="添加时间" width="">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-butto
            @click="handleClick(scope.row.group_id)"
            type="text"
            size="small"
            name="buttom"
            style="color: #1890ff"
            >查看详情</el-butto
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { post } from "@/Api/index";
import { query } from "@/token/index";
import { baseCookie } from "@/utils/index";
import {url} from "@/Api/http.js"
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
    post(`${url}/api/monitor/sark_list`, query()).then((res) => {
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
    handleClick(id) {
      baseCookie("id", id);
      // 获取传过来的id储存到cookie里
      // 点击跳转到查看详情页
      this.$router.push("/superAdmin/detalis");
    },
  },
};
</script>

<style scoped>
.tabel {
  margin-top: 20px;
  height: 736px;
  margin-left: 22px;
}
.off-line {
  background: rgba(239, 35, 35, 0.1);
  color: #ef2323;
  width: 56px;
  height: 28px;
  height: 28px;
  border-radius: 2px;
  padding: 5px, 29px, 5px, 29px;
  display: flex;
}
.on-l {
  background: rgba(239, 35, 35, 0.1);
  color: #ef2323;
  width: 56px;
  height: 28px;
  height: 28px;
  border-radius: 2px;
  padding: 5px, 29px, 5px, 29px;
  display: flex;
  color: #109116;
  background: rgba(68, 241, 77, 0.16);
}
.pp {
  margin: 0 auto;
}
.cell {
  color: #1890ff;
}
</style>