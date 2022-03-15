<template>
  <div class="right">
    <div class="blank"></div>
    <div class="title">柜子状态</div>
    <div class="bigBox" @click="click">
      <p v-for="(item, index) in arr" :key="index">
        {{ item }}
      </p>
    </div>
    <div class="state">
      <div class="state1">
        <div class="state1" v-for="(item, index) in list" :key="index">
          <span></span>
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="stateRight">
        <div>
          <p></p>
          <p class="open">电源开启中</p>
        </div>
        <div>
          <p></p>
          <p class="off">灯关闭</p>
        </div>
      </div>
    </div>
    <div class="blankStyle"></div>
    <div class="footer">
      <div class="footer1">
        <p>柜子控制</p>
        <p>选中设备即可操作</p>
      </div>
      <div class="footer2">
        <p>开门</p>
        <p>清货</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightModule",
  data() {
    return {
      arr: [],
      list: ["空闲", "有货", "未关门"],
    };
  },
  beforeMount() {
    this.$data.arr = new Array(64).fill(1);
  },

  methods: {
    click() {
      //   console.log(this.$data.arr);
    },
  },
};
</script>

<style scoped>
.blank {
  clear: both;
  height: 25px;
}
.title {
  padding-top: 10px;
  margin-left: 20px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;
  color: #282d30;
}
.bigBox {
  width: 774px;
  height: 331px;
  margin-left: 75px;
  /* background: red; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.bigBox p {
  width: 88px;
  height: 30px;
  text-align: center;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.12);
}
.bigBox p:nth-child(2) {
  background: #00bc55;
}
.bigBox p:nth-child(10) {
  background: #00bc55;
}
.bigBox p:nth-child(20) {
  background: #00bc55;
}
.bigBox p:nth-child(42) {
  background: #00bc55;
}
.bigBox p:nth-child(63) {
  background: #fba500;
}
.bigBox p:nth-child(25) {
  background: #fba500;
}
.state {
  width: 764px;
  margin-top: 20px;
  margin-left: 75px;
  height: 21px;
  /* background: #00bc55; */
  display: flex;
  justify-content: space-between;
}
.state1 {
  width: 269px;
  height: 21px;
  display: flex;
  background: lavender;
}
.state1 span {
  width: 55px;
  height: 21px;
}
.state1 div:nth-child(1) span:nth-child(1) {
  background: rgba(0, 0, 0, 0.12);
}
.state1 div:nth-child(2) span:nth-child(1) {
  background: #00bc55;
}
.state1 div:nth-child(3) span:nth-child(1) {
  background: #fba500;
}
.state div span:nth-child(1) {
  width: 27px;
  margin-right: 10px;
}
.state div span:nth-child(2) {
  width: 50px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
}
.stateRight {
  width: 180px;
  height: 21px;
  /* background: #fba500; */
  display: flex;
}
.stateRight div:nth-child(1) p:nth-child(1) {
  width: 6px;
  height: 6px;
  background: #00bc55;
  text-align: center;
}
.stateRight div:nth-child(2) p:nth-child(1) {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
}
.stateRight div {
  display: flex;
  align-items: center;
}
.stateRight div:nth-child(1) {
  margin-right: 30px;
}
.open {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  color: #00bc55;
  margin-left: 8px;
}
.off {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.5);
}
.blankStyle {
  width: 769px;
  margin-left: 80px;
  margin-top: 26px;
  border: 1px solid #0000001f;
}
.footer {
  height: 165px;
  margin-left: 75px;
  margin-top: 22px;
}
.footer1 {
  width: 240px;
  height: 40px;
  display: flex;
}
.footer1 p:nth-child(1) {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-right: 20px;
  color: #282d30;
}
.footer1 p:nth-child(2) {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
}
.footer2 {
  width: 240px;
  height: 40px;
  display: flex;
}
.footer2 p:nth-child(1) {
  height: 25px;
  width: 70px;
  border-radius: 4px;
  padding: 10px;
  background: #0000001f;
  margin-right: 30px;
  margin: 0 auto;
  text-align: center;
}
.footer2 p:nth-child(2) {
  height: 25px;
  width: 70px;
  border-radius: 4px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 auto;
  text-align: center;
}
</style>