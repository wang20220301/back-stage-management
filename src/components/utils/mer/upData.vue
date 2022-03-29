<template>
  <div class="addUser">
    <div class="cancel">
      <h4>修改</h4>
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
        <el-form-item label="角色信息">
          <el-select v-model="ruleForm.role_id" popos="role_id">
            <el-option
              v-for="(item, index) in mertype"
              :key="index"
              :label="item.role_name"
              :value="item.role_id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号" prop="userName">
          <el-input
            type="text"
            v-model="ruleForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商户名称" prop="name">
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
        <el-form-item label="修改密码" prop="pass">
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
        <el-form-item label="地址" prop="address">
          <el-input
            type="text"
            v-model="ruleForm.address"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <el-button @click="resetForm()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { alterMsg } from "./merchantApi.js";
export default {
  // 接收父组件传过来的参数
  props: ["msg", "mertype"],
  data() {
    //   验证用户名不能为空
    let validatePass3 = (rule, value, callback) => {
      let reg = /^[\u4E00-\u9FA5]{2,4}$/;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (reg.test(value)) {
        return callback(new Error("用户名不能为中文"));
      } else if (value.length > 10) {
        return callback(new Error("用户名不能超过10个字符"));
      } else {
        return callback();
      }
    };
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      let re = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      setTimeout(() => {
        if (!re.test(value)) {
          return callback(new Error("请输入正确的邮箱号"));
        } else {
          return callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (this.ruleForm.checkPass !== "") {
        this.$refs.ruleForm.validateField("checkPass");
      }
      callback();
    };
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.ruleForm.pass) {
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
          return callback(new Error("请输入数字值"));
        } else {
          if (!pattern.test(value)) {
            return callback(new Error("请输入正确的手机号"));
          } else {
            return callback();
          }
        }
      }, 1000);
    };
    // 验证邮箱不能为空
    let validatePass4 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("地址不能为空"));
      } else if (value.length > 30) {
        return callback(new Error("最多不能超过30个字符"));
      } else {
        return callback();
      }
    };
    let validatePass5 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("名称不能为空"));
      } else {
        return callback();
      }
    };
    return {
      shop_id: "",
      ruleForm: {
        userName: "",
        pass: "",
        checkPass: "",
        email: "",
        phone: "",
        address: "",
        name: "",
        role_id: "",
      },
      rules: {
        userName: [{ validator: validatePass3, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: checkAge, trigger: "blur" }],
        phone: [{ validator: checkAge2, trigger: "blur" }],
        address: [{ validator: validatePass4, trigger: "blur" }],
        title: [{ validator: validatePass5, trigger: "blur" }],
      },
    };
  },
  // watch监听当响应式数据发生,变化时执行
  watch: {
    // 第一个值,表示监听那个数据
    // immediate 表示在 watch 中首次绑定数据的时候是否执行 handler
    msg: {
      handler(val) {
        // val表示监听对象的值
        let ruleForm = this.$data.ruleForm;
        ruleForm.userName = val.username;
        ruleForm.email = val.email;
        ruleForm.name = val.name;
        ruleForm.phone = val.mobile * 1;
        ruleForm.address = val.address;
        ruleForm.region = val.role_id;
        this.$data.shop_id = val.user_id;
        console.log(val, "监听成功");
      },
      immediate: true,
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 获取当前的值
          alterMsg(this.$data.ruleForm, this.$data.shop_id);
          this.ckickClose();
          this.open3();
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.ckickClose();
    },
    // 点击关闭
    ckickClose() {
      // 点击触发父组件方法
      this.$emit("increment", 1);
    },
    open3() {
      this.$message({
        message: "修改成功",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.addUser {
  width: 560px;
  height: 521px;
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
  padding: 14px;
}
.fromStyle {
  padding-left: 40px;
  padding-right: 40px;
}
</style>

