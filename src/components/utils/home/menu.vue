<template>
  <div class="menu">
    <div>
      <p>丰巢-智能电源</p>
      <p>智能电源/广州番禺经销商</p>
      <p>广东省深圳市南山区南新路1029号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuModlue",
};
</script>

<style scoped>
.menu {
  width: 1880px;
  height: 65px;
  background: #fff;
  margin-top: 20px;
  margin-left: 22px;
  border-radius: 5px;
}
.menu div {
  width: 1000px;
  height: 65px;
  /* background: red; */
  display: flex;
  align-items: center;
}
.menu div p:nth-child(1) {
  margin-left: 32px;
  padding-right: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  width: 125px;
  height: 24px;
  font-size: 18px;
  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
  font-weight: 500;
  text-align: LEFT;
  color: #20253a;
  line-height: 24px;
  font-weight: 800;
}
.menu div p:nth-child(2) {
  margin-left: 30px;
  margin-right: 20px;
  font-weight: 600;
  width: 160px;
  height: 24px;
  font-size: 14px;
  font-family: Source Han Sans CN, Source Han Sans CN-Normal;
  font-weight: Normal;
  text-align: LEFT;
  color: rgba(0, 0, 0, 0.7);
  line-height: 24px;
}
.menu div p:nth-child(3) {
  /* width: 213px; */
  height: 24px;
  /* background: rgba(0, 0, 0, 0.5); */
  font-size: 14px;
  font-family: Source Han Sans CN, Source Han Sans CN-Normal;
  font-weight: Normal;
  text-align: LEFT;
  color: rgba(0, 0, 0, 0.5);
  line-height: 24px;
}
</style>