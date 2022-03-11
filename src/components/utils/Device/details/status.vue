<template>
  <div class="status">
    <div class="blank"></div>
    <div class="title">设备状态</div>
    <div class="list">
      <div v-for="(item, index) in list" :key="index">
        <span>{{ item.key }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "statusModule",
  data() {
    return {
      list: [
        {
          key: "室内温度",
          value: "16.2°C",
        },
        {
          key: "电量",
          value: "94%",
        },
        {
          key: "规格",
          value: "64格",
        },
        {
          key: "充电功率",
          value: "0.0w",
        },
        {
          key: "放电电流",
          value: "0.00A",
        },
        {
          key: "状态",
          value: "离线",
        },
        {
          key: "充电电流",
          value: "0A",
        },
        {
          key: "放电压",
          value: "0.00v",
        },
        {
          key: "灯状态",
          value: "关闭",
        },
        {
          key: "pv电压",
          value: "0.00v",
        },
        {
          key: "日发电量",
          value: "0w/h",
        },
        {
          key: "电源状态",
          value: "开启",
        },
      ],
    };
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
  margin-left: 20px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;
  color: #282D30;
}
.list {
  width: 536px;
  height: 146px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 64px;
}
.list div {
  width: 170px;
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
</style>