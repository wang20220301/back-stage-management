<template>
  <div>
    <nav class="header">
      <div class="right">
        <div class="input">
          <el-input
            v-model="input"
            placeholder="请输入用户信息"
            suffix-icon="el-icon-search"
            size="small"
            @change="search"
          ></el-input>
        </div>
        <div class="add">
          <el-button
            @click="dialogFormVisible = true"
            type="primary"
            size="small"
            autosize
            >添加用户</el-button
          >
          <el-dialog
            title="添加用户"
            :visible.sync="dialogFormVisible"
            width="25%"
          >
            <el-form :model="form">
              <el-form-item label="选择分组" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择分组">
                  <el-option value="管理员"></el-option>
                  <el-option value="经销商"></el-option>
                  <el-option value="普通用户"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" :label-width="formLabelWidth">
                <el-input
                  v-model="form.confirmPassWord"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="手机号" :label-width="formLabelWidth">
                <el-input
                  v-model="form.phoneNumber"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="clickAddUserName"
                >确 定</el-button
              >
            </div>
          </el-dialog>
        </div>
      </div>
    </nav>
    <section class="tabel">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50px"> </el-table-column>
        <el-table-column label="id">
          <template slot-scope="scope">{{ scope.row.user_id }}</template>
        </el-table-column>
        <el-table-column prop="username" label="账号"> </el-table-column>
        <el-table-column label="账号状态">
          <div slot-scope="scope" :class="scope.row.class">
            {{ scope.row.is_status }}
          </div>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="name" label="用户名称"> </el-table-column>
        <el-table-column prop="create_time" label="注册时间"> </el-table-column>
        <el-table-column prop="role_id" label="角色信息"> </el-table-column>
        <el-table-column prop="last_area" label="地址"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="clickTrue(scope.row)" type="text" size="small"
              >查看/更新</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </section>
    <footer class="hah">
      <div class="delete">
        <el-button type="danger" slot="reference" size="small">
          <i class="el-icon-delete-solid"></i>
          删除选中</el-button
        >
      </div>
      <div class="right">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </footer>
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible2" width="25%">
      <el-form :model="form2">
        <el-form-item label="选择分组" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择分组">
            <el-option value="管理员"></el-option>
            <el-option value="经销商"></el-option>
            <el-option value="普通用户"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth">
          <el-input
            v-model="form.confirmPassWord"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phoneNumber" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="clickFase">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { gitData, del, searchUres } from "./userApi";
export default {
  name: "menuModule",
  data() {
    return {
      input: "",
      activeName: "",
      tableData: [],
      multipleSelection: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogTableVisible2: false,
      dialogFormVisible2: false,
      form: {
        name: "",
        region: "",
        email: "",
        phoneNumber: "",
        delivery: false,
        type: [],
        desc: "",
      },
      form2: {
        name: "",
        password: "",
        confirmPassWord: "",
        region: "",
        email: "",
        phoneNumber: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  mounted() {
    // 创建完成发送请求获取数据
    this.gitVuexData();
  },
  methods: {
    async gitVuexData() {
      this.$data.tableData = await gitData();
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
    //获取选中结果
    getSelected() {
      this.open2();
    },
    handleClick(row) {
      console.log(row);
    },
    open2() {
      this.$confirm("此操作将永久删除选中数据, 是否继续?", "提示admin无法删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          del(this.multipleSelection);
          // 删除成功刷新页面
          this.gitVuexData();
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

    clickAddUserName() {
      let { form } = this.$data.form;
      console.log(form, "1212");
      this.$data.dialogFormVisible = false;
      console.log(this.$data.form, "12");
    },
    clickTrue(value) {
      console.log(value);
      this.$data.dialogFormVisible2 = true;
    },
    clickFase() {
      this.$data.dialogFormVisible2 = false;
    },
    open3() {
      this.$confirm("输入的两次密码不同", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          del(this.multipleSelection);
          // 删除成功刷新页面
          this.gitVuexData();
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
.hah {
  display: flex;
  justify-content: space-between;
  height: 68px;
  background: #fff;
  margin-top: 20px;
  align-items: center;
  position: absolute;
  width: calc(100% - 200px);
  bottom: 0px;
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
</style>

