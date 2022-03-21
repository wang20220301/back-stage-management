<template>
  <div class="right">
    <div class="bigBox">
      <p
        @click="open(item.class, item.value)"
        v-for="(item, index) in msg"
        :key="index"
        :class="item.class"
      >
        {{ item.value }}
      </p>
    </div>
    <div class="state">
      <div class="state1">
        <div class="state1" v-for="(item, index) in list2" :key="index">
          <span></span>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="control-cabinet">
      <p>柜子控制:</p>
      <div>
        <el-button type="primary" size="mini">一键清货</el-button>
      </div>
    </div>
    <p class="explain">
      说明:单个柜格操作-单击需要操作的柜格,选择,打开,或清货,全部柜格状态清空-
      -键清货
    </p>
    <div class="lamp">
      <span> 灯状态:</span>
      <img :src="lamp == 1 ? img : img2" alt="" @click="lampStateCut()" />
    </div>
    <div class="power">
      <span> 电源控制：</span>
      <img :src="power == 1 ? img : img2" alt="" @click="powerStateCut()" />
    </div>
    <div class="status">
      <div class="list">
        <div v-for="(item, index) in list" :key="index">
          <span>{{ item.key }}</span>
          <span :class="item.class">
            {{ item.value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getBoxSize, controData, gitData } from "./detailsApi.js";
import { StatusMsg } from "./detailsApi.js";
import openImg from "@/assets/open.png";
import offImg from "@/assets/off.png";
export default {
  name: "rightModule",
  data() {
    return {
      msg: [],
      list2: ["空闲", "有货", "未关门"],
      list: null,
      img: openImg,
      img2: offImg,
      lamp: null,
      power: null,
    };
  },
  created() {
    gitData();
    getBoxSize((data) => {
      this.$data.msg = data;
    });
    this.setState()
  },
  methods: {
    setState() {
      // 获取当前状态数据
      let list = StatusMsg();
      this.$data.list = list;
      // 设置当前的状态数据
      this.$data.lamp = list[8].state;
      this.$data.power = list[11].state;
    },
    open(style, value) {
      console.log(style == "have");
      if (style === "have") {
        this.$confirm("打开箱子", {
          confirmButtonText: "确定",
          cancelButtonText: "清货",
          type: "warning",
        })
          .then(() => {
            controData(3, "position", value);
            this.$message({
              type: "success",
              message: "成功打开!",
            });
          })
          .catch(() => {
            controData(4);
            this.$message({
              type: "info",
              message: "清货成功",
            });
          });
      } else {
        this.$confirm("打开箱子", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            controData(3, "position", value);
            this.$message({
              type: "success",
              message: "成功打开!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "取消打开",
            });
          });
      }
    },
    lampStateCut() {
      if (this.$data.lamp == 1) {
        this.$data.lamp = 0;
      } else {
        this.$data.lamp = 1;
      }
    },
    powerStateCut() {
      if (this.$data.power == 1) {
        this.$data.power = 0;
      } else {
        this.$data.power = 1;
      }
    },
  },
};
</script>

<style scoped>
.right {
  width: 100%;
  height: 760px;
}
.bigBox {
  width: 780px;
  height: 330px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.bigBox p {
  width: 88px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.12);
}
.have {
  background: #00bc55 !important;
}
.door {
  background: rgba(0, 0, 0, 0.5) !important;
}
.state {
  width: 764px;
  margin-top: 22px;
  margin-left: 54px;
  height: 21px;
  display: flex;
  justify-content: center;
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
.control-cabinet {
  height: 28px;
  display: flex;
  margin-left: 54px;
  margin-top: 22px;
  align-items: center;
}
.control-cabinet p {
  padding-right: 20px;
}
.explain {
  /* width: 533px; */
  height: 18px;
  font-size: 12px;
  font-weight: 400;
  text-align: LEFT;
  color: #909399;
  line-height: 12px;
  padding-left: 120px;
  margin-top: 20px;
}
.lamp,
.power {
  display: flex;
  height: 20px;
  align-items: center;
  padding-left: 54px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.lamp span {
  padding-right: 15px;
}
.status {
  width: 860px;
  height: 174px;
  margin-top: 35px;
  background: #fff;
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
.list {
  width: 860px;
  height: 146px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 64px;
}
.list div {
  width: 190px;
  height: 21px;
  display: flex;
  justify-content: center;
}
.list div span {
  width: 70px;
  height: 21px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
}
.list div span:nth-child(1) {
  text-align-last: justify;
  text-align: justify;
  text-justify: distribute-all-lines;
}
.list div span:nth-child(1) {
  margin-right: 23px;
}
.highlight {
  color: #fe0000 !important;
}
.highlight2 {
  color: #109116 !important;
}
.list div:nth-child(9) span:nth-child(2),
.list div:nth-child(12) span:nth-child(2) {
  display: flex;
  align-items: center;
}
</style>