<template>
  <div class="sort">
    <div class="sort-box1">
      <p>分类</p>
      <div>
        <el-select v-model="value" placeholder="请选择">
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
    <div class="sort-box">
      <p>所属经销商</p>
      <div>
        <el-select v-model="value" placeholder="请选择">
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
    <div class="sort-box">
      <p>选择设备</p>
      <div>
        <el-select v-model="value" placeholder="请选择">
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
  </div>
</template>

<script>
export default {
  name: "sortModule",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>


<style scoped>
.sort {
  height: 65px;
  background: #fff;
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
}
.sort-box {
  display: flex;
  align-items: center;
  margin-left: 0px;
  margin-right: 26px;
}
.sort-box p {
  margin-right: 20px;
  width: 80px;
  height: 21px;
  /* background: rgba(0, 0, 0, 0.7); */
  font-size: 14px;
  font-weight: 800;
  text-align: RIGHT;
  color: rgba(0, 0, 0, 0.7);
  line-height: 14px;
  font-weight: 800;
}
.sort-box1 {
  display: flex;
  align-items: center;
  margin-left: 0px;
  margin-right: 26px;
}
.sort-box1 p {
  width: 57px;
  height: 21px;
  font-size: 14px;
  font-weight: 800;
  text-align: RIGHT;
   line-height: 14px;
   margin-right: 20px;
}
</style>