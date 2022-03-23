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
        <el-form-item label="用户组">
          <el-select v-model="ruleForm.region" placeholder="请选择用户组">
            <el-option label="用户" value="用户"></el-option>
            <el-option label="经销商" value="经销商"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="ruleForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
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
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //   验证用户名不能为空
    let validatePass3 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
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
    return {
      ruleForm: {
        userName: "",
        pass: "",
        checkPass: "",
        email: "",
        phone: "",
      },
      rules: {
        userName: [{ validator: validatePass3, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: checkAge, trigger: "blur" }],
        phone: [{ validator: checkAge2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 点击关闭
    ckickClose() {
      console.log("检测到点击事件");
      this.$emit("sonmsg", false);
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

