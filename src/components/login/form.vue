<template>
  <div class="form">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="pass">
        <el-input
          type="text"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <el-button type="text" @click="open"></el-button>
    </el-form>
  </div>
</template>
<script>
import { post } from "../../Api/index";
export default {
  name: "lginFrom",
  props: {
    value: {
      type: String,
      default: "",
    },
  },

  data() {
    var validatePass = (rule, value, callback) => {
      // 密码判断
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      // 用户民判断
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 判断登录的选择的登录账号的类型，如果为空，提示选折登录账号类型
          if (this.value != "") {
            // 判断成功发送请求到服务器
            // this.data.pass 表示用户名
            // this.data.checkPass 表示密码
            // 因为后端原因,传参固定写法，不能直接使用data以对象方式传参
            var param = new FormData();
            param.append("username", this.$data.ruleForm.pass);
            param.append("password", this.$data.ruleForm.checkPass);
            post("https://www.bi-et.com/api/login/index", param).then((res) => {
              if (res.data.err_code == 1) {
                this.$router.push("/home");      //登录成功跳转到home页面
              } else {
              //  open 该方法会弹出一个提示框,提示 
                this.open("用户名或密码错误")      //失败跳出提示信息
              }
            });
          }else{
            this.open("请选择登录方式")
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //  控制提示框的
     open(text) {
        this.$confirm(text, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        })
      }
    }
};
</script>
<style scoped>
.form {
  margin-top: 10px;
  width: 310px;
}
</style>