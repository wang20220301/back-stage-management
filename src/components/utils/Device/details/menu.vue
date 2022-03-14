<template>
  <div class="menu">
    <div class="blank"></div>
    <div class="title">设备详情</div>
    <div class="from">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="设备名称">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="所属商户">
          <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="经纬度">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button>取消</el-button>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "fromMmodul",
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  created() {
    // 获取vuex数据
    console.log(this.$store.state.b.data);
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.menu {
  width: 680px;
  height: 358px;
  background: #ffff;
}
.blank {
  clear: both;
  height: 25px;
}
.menu .title {
  margin-left: 20px;
  /* font-family: Source Han Sans CN; */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;
  color: #282d30;
}
.from {
  width: 400px;
  margin-left: 92px;
}
</style>