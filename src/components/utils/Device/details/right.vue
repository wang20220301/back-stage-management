<template>
  <div class="right">
    <div class="blank"></div>
    <div class="title">柜子状态</div>
    <div class="bigBox">
      <p
        @click="open(item.class)"
        v-for="(item, index) in arr"
        :key="index"
        :class="item.class"
      >
        {{ item.value }}
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
    <!-- <div class="footer">
      <div class="footer1">
        <p>柜子控制</p>
        <p>选中设备即可操作</p>
      </div>
      <div class="footer2">
        <p>开门</p>
        <p>清货</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getBoxSize } from "./index.js";
export default {
  name: "rightModule",
  data() {
    return {
      arr: "",
      list: ["空闲", "有货", "未关门"],
    };
  },
  created() {
    getBoxSize((data) => {
      this.$data.arr = data;
      // console.log(data, "1111");
    });
    console.log(this.$data.arr, "1111");
  },
  methods: {
    click(item) {
      getBoxSize((data) => {
        this.$data.arr.box = data.box;
        this.$set(this.$data.arr, 0, data.box);
      });
      // console.log(this.$data.arr.box, "1111");
      console.log(item);
    },
    open(value) {
      console.log(value == "have");
      if (value === "have") {
        this.$confirm("打开箱子", {
          confirmButtonText: "确定",
          cancelButtonText: "清货",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "成功打开!",
            });
          })
          .catch(() => {
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
  },
};
</script>

<style scoped>
.right {
  width: 960px;
  height: 615px;
}
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
  height: 400px;
  margin-left: 75px;
  /* background: red; */
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
  margin-top: 20px;
  margin-left: 75px;
  height: 21px;
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