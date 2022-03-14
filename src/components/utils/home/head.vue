<template>
  <div class="head">
    <div class="box">
      <div class="box1">
        <div class="box2">
          <p>故障报修</p>
          <p>12</p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box1">
        <div class="box2">
          <p>经销商申请</p>
          <p>12</p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box1">
        <div class="box2">
          <p>经销商认证</p>
          <p>12</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headModule",
};
</script>

<style scoped>
.head {
  margin-top: 20px;
  margin-left: 20px;
  width: 1880px;
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
/* .box div:nth-child(1){
  background: honeydew;
}
.box div:nth-child(2){
  background: lawngreen;
}
.box div:nth-child(3){
  background: lavenderblush;
} */
</style>