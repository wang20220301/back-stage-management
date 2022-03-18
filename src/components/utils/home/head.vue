<template>
  <div class="head">
    <div class="box">
      <div class="box1">
        <div class="box2">
          <p>故障报修</p>
          <p>{{ data.fault_num }}</p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box1">
        <div class="box2">
          <p>经销商申请</p>
          <p>{{ data.apply_num }}</p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box1">
        <div class="box2">
          <p>经销商认证</p>
          <p>{{ data.attestation_num }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VuexMsg } from "./homeApi.js";
export default {
  name: "headModule",
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    // 异步获取vuex数据
    VuexMsg((data) => {
      console.log(data);
      this.$data.data = data;
    });
  },
};
</script>

<style scoped>
.head {
  margin-left: 20px;
  margin-right: 20px;
  height: 100px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
}
.box {
  flex: 1;
  display: flex;
  align-items: center;
}
.box1 {
  width: 100%;
  height: 68px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
.box2 {
  width: 553px;
  height: 100px;
}
.box2 {
  width: 98px;
  height: 68px;
  margin: auto;
}
.box2 p:nth-child(1) {
  width: 98px;
  height: 21px;
  font-size: 14px;
  font-family: Source Han Sans CN, Source Han Sans CN-Normal;
  font-weight: Normal;
  text-align: CENTER;
  color: rgba(0, 0, 0, 0.5);
  line-height: 14px;
  margin-top: 10px;
}
.box2 p:nth-child(2) {
  width: 36px;
  height: 37px;
  font-size: 32px;
  font-family: Arial, Arial-Bold;
  font-weight: 700;
  text-align: CENTER;
  color: #282d30;
  line-height: 32px;
  margin: 0 auto;
}
</style>