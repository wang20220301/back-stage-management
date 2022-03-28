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
          <el-select v-model="sizeForm.region" placeholder="请选择所属商户">
            <div v-for="(item, index) in user" :key="index">
              <el-option :value="item.username"></el-option>
            </div>
          </el-select>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="sizeForm.address"></el-input>
        </el-form-item>
        <el-form-item label="经纬度">
          <el-input v-model="sizeForm.long"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button>取消</el-button>
          <el-button
            type="primary"
            @click="onSubmit(sizeForm.name, sizeForm.long, sizeForm.address)"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { msg, alterData } from "./detailsApi.js";
export default {
  name: "fromMmodul",
  data() {
    return {
      sizeForm: "",
      user: "",
    };
  },
  mounted() {
    // 获取vuex数据
    msg((data) => {
      this.$data.sizeForm = data.detail;
      this.$data.user = data.merchant;
    });
  },
  methods: {
    onSubmit(name, long, address) {
      alterData(name, long, address);
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
  margin-top: 10px;
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