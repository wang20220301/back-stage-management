<template>
  <div>
    <div class="shade" v-show="show">
      <add-user v-on:increment="incrementTotal" :mertype="merType"></add-user>
    </div>
    <div class="shade" v-show="updataShow">
      <up-data
        v-on:increment="incrementTotal"
        :msg="details"
        :mertype="merType"
      ></up-data>
    </div>
    <nav class="header">
      <div class="right">
        <div class="input">
          <el-input
            v-model="input"
            placeholder="请输入商户信息"
            suffix-icon="el-icon-search"
            size="small"
            @change="search"
          ></el-input>
        </div>
        <div class="add">
          <el-button
            @click="clickPopupAddUser"
            type="primary"
            size="small"
            autosize
            >添加商户</el-button
          >
        </div>
      </div>
    </nav>
    <section class="tabel">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        height="830"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50px"> </el-table-column>
        <el-table-column label="id">
          <template slot-scope="scope">{{ scope.row.member_id }}</template>
        </el-table-column>
        <el-table-column prop="name" label="用户名称"> </el-table-column>
        <el-table-column label="账号状态">
          <div slot-scope="scope" :class="scope.row.class">
            {{ scope.row.is_status }}
          </div>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="account_name" label="角色信息">
        </el-table-column>
        <el-table-column prop="regtime" label="注册时间"> </el-table-column>
        <el-table-column label="来源">
          <div slot-scope="scope">
            {{ scope.row.role_name }}
          </div>
        </el-table-column>
        <el-table-column prop="addr" label="地址"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small">锁定</el-button>
            <el-button @click="clickTrue(scope.row)" type="text" size="small"
              >查看/更新</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </section>
    <footer class="hah">
      <div class="delete">
        <el-button
          type="danger"
          slot="reference"
          size="small"
          @click="getSelected"
        >
          <i class="el-icon-delete-solid"></i>
          删除选中</el-button
        >
      </div>
      <div class="right">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[13, 26, 39,52]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { gitData, del, searchUres, commercialType } from "./merchantApi";
import AddUser from "./addMerchant.vue";
import UpData from "./upData.vue";
export default {
  name: "menuModule",
  components: {
    AddUser,
    UpData,
  },
  data() {
    return {
      input: "",
      activeName: "",
      tableData: [],
      multipleSelection: [],
      formLabelWidth: "120px",
      show: false,
      updataShow: false,
      merType: [],
      details: [],
      total_page: 0,
      total: 0,
      currentPage4: 1,
      page_num:""
    };
  },
  mounted() {
    // 创建完成发送请求获取数据
    this.gitVuexData();
    this.gitType();
  },
  methods: {
    async gitVuexData(val,page_num) {
      let data = await gitData(val,page_num);

      // 这里获取总页数和分页
      console.log(data.total_page, data.page);
      this.$data.tableData = data.list;
      // 获取当前的总数据
      this.$data.total = data.total * 1;
    },
    async gitType() {
      // 把获取到的商户类型通过pops传给子组件
      this.$data.merType = await commercialType();
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
    //获取选中结果，点击确定删除选中数据，点击取消不操作
    getSelected() {
      // 选中的数据
      let value = this.multipleSelection;
      // 选中数据的个数
      let len = this.multipleSelection.length;
      this.open2(value, len);
    },
    handleClick(row) {
      console.log(row);
    },
    open2(value, len) {
      this.$confirm(`此操作将永久删除选中的${len}条数据, 是否继续?"`, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          del(value);
          // 删除成功刷新页面
          this.gitVuexData();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 在输入框失去焦点或用户按下回车时触发
    async search() {
      // 获取输入框的值
      let value = this.$data.input;
      this.$data.tableData = await searchUres("keyword", value);
    },

    handleSizeChange(val) {
      // 存储每页显示的数据条数
      this.$data.page_num=val
      // 发送消息向服务器请求相同条数的数据
      this.gitVuexData("",val)
    },
    handleCurrentChange(val) {
      // 获取当前的页数发送服务器请求数据,渲染页面,以及每次请求服务器的数据
      this.gitVuexData(val,this.$data.page_num);
      // console.log(`当前页: ${val}`);
    },

    clickAddUserName() {
      let { form } = this.$data.form;
      console.log(form, "1212");
      this.$data.dialogFormVisible = false;
      console.log(this.$data.form, "12");
    },
    // 点击查看更新显示弹窗
    clickTrue(value) {
      this.$data.updataShow = true;
      // 父组件把当前选中的数据传给子组件
      this.$data.details = value;
      console.log(value, "查看更新");
    },
    clickFase() {
      this.$data.dialogFormVisible2 = false;
    },
    // 控制弹窗显示
    clickPopupAddUser() {
      this.$data.show = true;
    },
    // 父组件接收子组件传过来的参数
    incrementTotal(index) {
      if (index == 1) {
        this.$data.updataShow = false;
      } else {
        this.$data.show = false;
      }
      // 更新页面数据
      this.gitVuexData();
    },
    open3() {
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
    open4() {
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
  },
};
</script>
<style scoped>
.header {
  height: 39px;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20xp;
  justify-content: space-between;
  background: #fff;
  padding-left: 20px;
  margin-top: 20px;
  margin-left: 22px;
  margin-right: 20px;
  align-content: center;
}
.right {
  display: flex;
  height: 36px;
}
.input {
  line-height: 36px;
}
.add {
  line-height: 36px;
  margin-left: 10px;
}
.tabel {
  margin-top: 20px;
  margin-left: 22px;
  margin-right: 20px;
}
/* 底部弹窗的样式 */
.hah {
  display: flex;
  justify-content: space-between;
  height: 68px;
  background: #fff;
  margin-top: 20px;
  align-items: center;
}
.delete {
  margin-left: 30px;
}
.right {
  margin-right: 40px;
}
.normal {
  width: 60px;
  height: 28px;
  background: rgba(68, 241, 77, 0.16);
  border-radius: 2px;
  color: #109116;
  text-align: center;
}
.offNormal {
  width: 60px;
  height: 28px;
  background: rgba(239, 35, 35, 0.1);
  border-radius: 2px;
  color: #ef2323;
  text-align: center;
}
.shade {
  width: calc(100vw - 200px);
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  /* 设置弹性盒模型 */
  display: flex;
}
</style>

