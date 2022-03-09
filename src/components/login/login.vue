
<template>
  <div class="content">
    <div class="header">
      <div class="logText">
        <div class="log">
          <img :src="log" alt="集思电力科技有限公司" draggable="false" />
        </div>
        <div class="text">
          <h4>{{ text }}</h4>
        </div>
      </div>
    </div>
    <div class="login">
      <div class="title">
        <h1>
          {{ text2 }}
        </h1>
      </div>
      <div class="loginFormStyle">
        <div class="loginForm">
          <div class="checkbox">
            <div class="chexkboxText">
              <h4>请选择登录方式</h4>
            </div>
            <div class="chexk">
              <el-select v-model="value" placeholder="请选择登录方式">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <Form :value="value"></Form>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
import log from "../../assets/log2.png";
import Form from "./form.vue";
import { localStorageValue } from "../../utils/index";
export default {
  name: "ppeP",
  components: {
    Form,
  },
  data() {
    return {
      log,
      text: "集思电力科技有限公司",
      text2: "数据信息管理系统",
      options: [
        {
          value: "1",
          label: "超级管理员",
        },
        {
          value: "2",
          label: "运营管理员",
        },
        {
          value: "3",
          label: "学校管理员",
        },
        {
          value: "4",
          label: "班级管理员",
        },
      ],
      value: "",
    };
  },
  mounted() {
    // 加载页面判断是否有值,有就获取没有就默认值

    this.value = localStorageValue("loginType");
  },
  methods: {},
};
</script>
<style scoped>
.content {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("../../assets/bag.jpg");
}
.header {
  width: 600px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logText {
  width: 330px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.log {
  height: 44px;
  width: 140px;
  background: black;
}
.log img {
  height: 44px;
  width: 140px;
}
.text h2 {
  font-size: 16px;
  color: #fff;
}
.login {
  width: 500px;
  height: 500px;

  margin: auto;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}
.title h1 {
  color: aqua;
}
.loginFormStyle {
  width: 500px;
  height: 450px;

  display: flex;
  opacity: 0.9;
}
.loginForm {
  width: 380px;
  height: 380px;
  margin: auto;
  background: #f0f8ff;
   border-radius: 15px;
}
.chexkboxText {
  width: 380px;
  height: 21px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.chexkboxText h4 {
  /* margin: 0 auto; */
  text-align: center;
  color: black;
}
.chexk {
  width: 310px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
}
</style>

