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
          <el-select v-model="account_type" placeholder="请选择用户组">
            <el-option
              v-for="(item, index) in mertype"
              :key="index"
              :label="item.name"
              :value="item.account_type"
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
        <el-form-item label="地址" prop="addr" size="">
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
import { addUser } from "./userApi.js";
export default {
  props: ["mertype"],
  data() {
    //   验证用户名不能为空
    let validatePass3 = (rule, value, callback) => {
      // let reg = /^[\u4E00-\u9FA5]{2,4}$/;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (value.length > 5) {
        return callback(new Error("用户名最多不能超过6个字符"));
      } else {
        return callback();
      }
    };
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      // let re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        let re = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
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
      } else if (value.length > 30) {
        return callback(new Error("最多不能超过30个字符"));
      } else {
        return callback();
      }
    };
    return {
      account_type: "",
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
      let account_type = this.$data.account_type;
      if (account_type == "") {
        this.open2();
      } else {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            let res = await addUser(
              this.$data.ruleForm,
              this.$data.account_type
            );
            if (res == 2) {
              // 关闭弹窗
              this.ckickClose();
              //  弹出成功信息
              this.open3();
              // 添加成功清除数据
              this.resetForm(formName);
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
        message: "当前手机号已存在",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
.addUser {
  width: 464px;
  height: 384px;
  margin: auto;
  background: #fff;
  border-radius: 6px;
}
.cancel {
  width: 100%;
  height: 30px;
  /* margin-bottom: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cancel {
  padding-left: 10px;
}
.cancel p {
  width: 20px;
  height: 20px;
  padding: 14px;
}
.fromStyle {
  padding: 20px;
  padding-right: 40px;
}
</style>

