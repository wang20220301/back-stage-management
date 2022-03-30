<template>
  <aside class="menu">
    <div class="from">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="设备名称">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="所属商户">
          <el-select v-model="value3" :placeholder="sizeForm.username">
            <el-option
              v-for="item in user"
              :label="item.username"
              :value="item.user_id"
              :key="item.user_id"
              disabled
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备规格">
          <el-select
            v-model="value2"
            :placeholder="sizeForm.kind == 1 ? count[1] : count[0]"
            disabled
          >
            <el-option value="1" label="36格"></el-option>
            <el-option value="2" label="64格"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="sizeForm.address"></el-input>
        </el-form-item>
        <el-form-item label="经纬度">
          <el-input v-model="sizeForm.long"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button @click="cancel">取消</el-button>
          <el-button
            type="primary"
            @click="
              clickRequest(sizeForm.name, sizeForm.long, sizeForm.address)
            "
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </aside>
</template>

<script>
import { msg, alterData, gitData } from "./popup.js";
export default {
  name: "fromMmodul",
  data() {
    return {
      sizeForm: "",
      count: ["64格", "36格"],
      user: "",
      value2: null,
      value3: null,
      id: "",
    };
  },
  mounted() {
    // 进入页面获取数据
    gitData();
    msg((data) => {
      this.$data.sizeForm = data.detail;
      this.$data.user = data.merchant;
    });
  },
  methods: {
    clickRequest(name, long, address) {
      alterData(name, long, address, this.$data.value3, this.$data.value2);
      this.open();
    },
    cancel() {
      this.open1();
    },

    open() {
      this.$notify({
        title: "成功",
        message: "保存成功",
        type: "success",
      });
    },
    open1() {
      this.$notify({
        title: "取消",
        message: "已取消修改",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.menu {
  width: 660px;
  height: 320px;
  display: flex;
  justify-content: center;
  background: #ffff;
}
.blank {
  clear: both;
  height: 25px;
}
.menu .title {
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