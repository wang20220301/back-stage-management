<template>
  <div class="addUser">
    <div class="cancel">
      <h4>添加用户</h4>
      <p @click="ckickClose"><i class="el-icon-close"></i></p>
    </div>
    <div class="fromStyle">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        size="small"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="分组">
          <el-select v-model="region" placeholder="请选择用户组">
            <el-option
              v-for="(item, index) in mertype"
              :key="index"
              :label="item.role_name"
              :value="item.role_id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input
            type="text"
            v-model="ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input
            v-model.number="ruleForm.phone"
            autocomplete="off"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="text"
            v-model="ruleForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input
            type="text"
            v-model="ruleForm.addr"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { addUser } from "./merchantApi";
export default {
  props: ["mertype"],
  data() {
    //   验证用户名不能为空
    let validatePass3 = (rule, value, callback) => {
      let reg = /^[\u4E00-\u9FA5]{2,4}$/;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (reg.test(value)) {
        return callback(new Error("用户名不能为中文"));
      } else {
        return callback();
      }
    };
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      let re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
      setTimeout(() => {
        if (!re.test(value)) {
          return callback(new Error("请输入正确的邮箱号"));
        } else {
          return callback();
        }
      }, 1000);
    };
    var checkAge2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      let pattern = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (!pattern.test(value)) {
            callback(new Error("请输入正确的手机号"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    let validatePass4 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("地址不能为空"));
      } else {
        return callback();
      }
    };
    return {
      region: "",
      ruleForm: {
        name: "",
        email: "",
        phone: "",
        addr: "",
      },
      rules: {
        name: [{ validator: validatePass3, trigger: "blur" }],
        email: [{ validator: checkAge, trigger: "blur" }],
        phone: [{ validator: checkAge2, trigger: "blur" }],
        addr: [{ validator: validatePass4, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      let region = this.$data.region;
      if (region == "") {
        this.open2();
      } else {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let res = addUser(this.$data.ruleForm, this.$data.region);
            if (res == 2) {
              // 关闭弹窗
              this.open3();
              this.ckickClose();
            } else {
              this.open4();
            }
          } else {
            return false;
          }
        });
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 点击关闭
    ckickClose() {
      // 点击触发父组件方法
      this.$emit("increment");
    },
    open2() {
      this.$notify({
        title: "警告",
        message: "请选择分组",
        type: "warning",
      });
    },
    open3() {
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
    open4() {
      this.$notify({
        title: "警告",
        message: "用户已存在",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
.addUser {
  width: 560px;
  height: 456px;
  margin: auto;
  background: #fff;
  border-radius: 6px;
}
.cancel {
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cancel {
  /* padding:10px */
  padding-left: 10px;
}
.cancel p {
  width: 20px;
  height: 20px;
  padding: 10px;
}
.fromStyle {
  padding: 0px 24px;
}
</style>

