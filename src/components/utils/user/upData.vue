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
          <el-select v-model="ruleForm.account_type" popos="role_id">
            <el-option
              v-for="(item, index) in mertype"
              :key="index"
              :label="item.name"
              :value="item.account_type"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号状态">
          <el-select v-model="ruleForm.is_state" popos="is_state">
            <el-option
              v-for="(item, index) in AccountStatus"
              :key="index"
              :label="item"
              :value="index"
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
        <el-form-item label="手机号" prop="mobile">
          <el-input
            v-model.number="ruleForm.mobile"
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
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { alertUserDetails } from "./userApi.js";
export default {
  // 接收父组件传过来的参数
  props: ["msg", "mertype"],
  data() {
    //   验证用户名不能为空
    let validatePass3 = (rule, value, callback) => {
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
      AccountStatus: ["封禁", "正常"],
      ruleForm: {
        email: "",
        mobile: "",
        addr: "",
        name: "",
        is_state: "",
        account_type: "",
        member_id: "",
      },
      rules: {
        userName: [{ validator: validatePass3, trigger: "blur" }],
        email: [{ validator: checkAge, trigger: "blur" }],
        mobile: [{ validator: checkAge2, trigger: "blur" }],
        addr: [{ validator: validatePass4, trigger: "blur" }],
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
        // console.log(val, "watch监听的父组件传过来的值");
        // val表示监听对象的值
        let ruleForm = this.$data.ruleForm;
        ruleForm.name = val.name;
        ruleForm.email = val.email;
        ruleForm.account_type = val.account_type * 1;
        ruleForm.mobile = val.mobile * 1;
        ruleForm.addr = val.addr;
        ruleForm.is_state = val.is_state * 1;
        ruleForm.member_id = val.member_id;
      },
      immediate: true,
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 获取需要修改的用户详情的值
          alertUserDetails(this.$data.ruleForm);
          this.ckickClose();
          this.open3();
        } else {
          return false;
        }
      });
    },
    // 点击按钮取消关闭弹窗
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
  width: 500px;
  height: 410px;
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
  padding-left: 10px;
}
.cancel h4{
  padding-top: 10px;
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

