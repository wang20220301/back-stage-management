<template>
  <div class="status">
    <div class="blank"></div>
    <div class="title">设备状态</div>
    <div class="list">
      <div v-for="(item, index) in list" :key="index">
        <span>{{ item.key }}</span>
        <span :class="item.class">
          {{ item.value }}
          <img
            :src="item.img == 1 ? img : img2"
            alt=""
            v-if="item.show"
            @click="click(item.type, item.name, item.img)"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { StatusMsg } from "./detailsApi.js";
import openImg from "@/assets/open.png";
import offImg from "@/assets/off.png";
import { controData } from "./detailsApi.js";
export default {
  name: "statusModule",
  data() {
    return {
      list: null,
      img: openImg,
      img2: offImg,
    };
  },
  mounted() {
    this.$data.list = StatusMsg();
  },
  methods: {
    click(type, key, value) {
      if (type == 1) {
        let msg = this.$data.list[8];
        if (value == 0) {
          value = 1;
          msg.img = 1;
          this.$set(this.$data.list, 8, msg);
        } else if (value == 1) {
          value = 0;
          msg.img = 0;
          this.$set(this.$data.list, 8, msg);
        }
      } else {
        let msg2 = this.$data.list[11];
        if (value == 0) {
          value = 1;
          msg2.img = 1;
          this.$set(this.$data.list, 11, msg2);
        } else if (value == 1) {
          value = 0;
          msg2.img = 0;
          this.$set(this.$data.list, 11, msg2);
        }
      }

      controData(type, key, value);
    },
  },
};
</script>

<style scoped>
.status {
  width: 680px;
  height: 232px;
  margin-top: 25px;
  /* margin-left: 20px; */
  background: #fff;
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
.list {
  width: 640px;
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