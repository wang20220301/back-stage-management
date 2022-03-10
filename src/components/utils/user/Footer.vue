<template>
  <div class="hah">
    <div class="delete">
      <el-popover placement="top" width="160" v-model="visible">
        <p>确定删除选中内容吗</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false"
            >取消</el-button
          >
          <el-button type="primary" size="mini" @click="visible = false"
            >确定</el-button
          >
        </div>
        <!-- <el-button slot="reference">批量删除</el-button> -->
        <el-button type="danger" slot="reference" size="small">
          <i class="el-icon-delete-solid"></i>
          批量删除</el-button
        >
      </el-popover>
    </div>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>


<script>
export default {
  name: "footerPage",
  data() {
    return {
      visible: false,
    };
  },
};
</script>
<style scoped>
.hah {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  background: #fff;
  margin-top: 20px;
  align-items: center;
}
.delete {
  margin-left: 15px;
}
</style>
