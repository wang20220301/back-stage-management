<template>
  <div class="menu">
    <div class="choice">
      <el-select v-model="value" placeholder="所有设备">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="right">
      <div class="input">
        <el-input
          v-model="input"
          placeholder="请输入设备名称"
          size="small"
        ></el-input>
      </div>
      <div class="add">
        <el-button type="success" size="small" autosize>搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerModul",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "所有设备",
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
      input:"",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.menu {
  width: 100%;
  height: 60px;
  background: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.choice {
  width: 128px;
  height: 38px;
  margin-left: 24px;
}
.right {
  display: flex;
  height: 36px;
}
.input {
  line-height: 36px;
}
.add {
  line-height: 36px;
  margin-left: 10px;
  margin-right: 30px;
}
</style>