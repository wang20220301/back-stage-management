<template>
  <div>
    <div class="shade" v-show="popupShow">
      <aside :class="popup">
        <div class="popupMenu">
          <p
            v-for="(item, index) in popupMenu"
            :key="index"
            @click="highClick(index)"
            :class="index == high ? `popupMenuBottomHight` : ``"
          >
            {{ item }}
          </p>
          <div class="popupMenuIcon">
            <i class="el-icon-close" @click="clickHidePopup"></i>
          </div>
        </div>
        <router-view></router-view>
      </aside>
    </div>
    <menu class="menu">
      <div class="choice">
        <el-select v-model="value" placeholder="所有设备" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="rightInput">
        <div class="input">
          <el-input
            v-model="input"
            placeholder="请输入设备名称或id"
            size="small"
          ></el-input>
        </div>
        <div class="add">
          <el-button type="primary" size="small" autosize @click="click()"
            >搜索</el-button
          >
        </div>
      </div>
    </menu>
    <article class="tabel">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="Id" width="120">
          <template slot-scope="scope">{{ scope.row.group_id }}</template>
        </el-table-column>
        <el-table-column prop="name" label="设备名称" width="">
        </el-table-column>
        <el-table-column prop="monitor_no" label="设备编号" width="">
        </el-table-column>
        <el-table-column prop="username" label="所属商户" width="">
        </el-table-column>
        <el-table-column prop="name" label="分类" width=""> </el-table-column>
        <el-table-column prop="name" label="位置" width=""> </el-table-column>
        <el-table-column label="设备状态" width="">
          <div
            :class="scope.row.status == 0 ? `off-line` : `on-l`"
            slot-scope="scope"
            name="1212"
          >
            <p class="pp">
              {{ scope.row.status == 0 ? "离线" : "在线" }}
            </p>
          </div>
        </el-table-column>
        <el-table-column prop="add_time" label="添加时间" width="">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
          <!-- <template slot-scope="scope">
            <el-butto
              @click="handleClick(scope.row.group_id)"
              type="text"
              size="small"
              name="buttom"
              style="color: #1890ff"
              >查看详情</el-butto
            >
          </template> -->
          <template slot-scope="scope">
            <el-button type="text" size="small">离线</el-button>
            <el-button
              @click="handleClick(scope.row.group_id)"
              type="text"
              size="small"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </article>

    <footer class="footer">
      <div class="delete">
        <el-button
          type="danger"
          slot="reference"
          size="small"
          @click="getSelected()"
        >
          <i class="el-icon-delete-solid"></i>
          删除选中</el-button
        >
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </footer>
  </div>
</template>

<script>
import { gitData, searchUres, del, setPopupStyle, routers } from "./deviceAPi";
import { baseCookie } from "@/utils/index";
// import { time } from 'echarts';

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
      popupMenu: ["柜格状态", "设备信息", "设备数据"],
      value: "",
      input: "",
      high: 0,
      tableData: [],
      multipleSelection: [],
      visible: false,
      popup: "cupboardState",
      popupShow: false,
    };
  },
  mounted() {
    // 创建完成发送请求获取数据
    this.gitVuexData();
  },
  methods: {
    async gitVuexData() {
      this.$data.tableData = await gitData();
    },
    async click() {
      if (this.input == "") {
        // 判断输入框的值是否为空
        this.open();
      } else {
        let searchData = await searchUres("keyword", this.input);
        if (searchData == undefined) {
          this.$data.tableData = [];
        } else {
          this.$data.tableData = searchData;
        }
      }
    },
    open() {
      this.$confirm("输入框不能为空", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    //保存选中结果
    handleSelectionChange(val) {
      console.info(val);
      this.multipleSelection = val;
    },
    //获取选中结果
    getSelected() {
      this.open2();
      console.info(this.multipleSelection);
    },

    // 点击查看详情显示弹窗
    handleClick(id) {
      baseCookie("id", id);
      // 获取传过来的id储存到cookie里
      // 点击弹出弹窗
      this.$data.popupShow = true;
      this.$router.push("/superAdmin/device/state");
    },
    // 点击×隐藏弹窗
    clickHidePopup() {
      this.$data.popupShow = false;
      this.$router.push("/superAdmin/device");
    },
    highClick(index) {
      // 设置不同的弹窗样式
      this.$data.high = index;
      setPopupStyle(index, this.$data);
      // 根据id显示不同的路由
      routers(index);
    },
    open2() {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          del(this.multipleSelection);
          // 删除成功刷新页面
          this.gitVuexData();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style scoped>
.menu {
  height: 60px;
  background: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 22px;
  margin-right: 20px;
}
.choice {
  width: 128px;
  height: 34px;
  margin-left: 24px;
  text-align: center;
}
.rightInput {
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
.tabel {
  margin-top: 20px;
  margin-left: 22px;
  margin-right: 20px;
}
.off-line {
  background: rgba(239, 35, 35, 0.1);
  color: #ef2323;
  width: 56px;
  height: 28px;
  height: 28px;
  border-radius: 2px;
  padding: 5px, 29px, 5px, 29px;
  display: flex;
}
.on-l {
  background: rgba(239, 35, 35, 0.1);
  color: #ef2323;
  width: 56px;
  height: 28px;
  height: 28px;
  border-radius: 2px;
  padding: 5px, 29px, 5px, 29px;
  display: flex;
  color: #109116;
  background: rgba(68, 241, 77, 0.16);
}
.pp {
  margin: 0 auto;
}
.cell {
  color: #1890ff;
}
.footer {
  display: flex;
  justify-content: space-between;
  height: 68px;
  background: #fff;
  margin-top: 20px;
  align-items: center;
  position: absolute;
  width: calc(100% - 200px);
  bottom: 0px;
}
.delete {
  margin-left: 30px;
}
/* .right {
  margin-right: 40px;
} */
/* 弹窗遮罩 */
.shade {
  width: calc(100vw - 200px);
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  /* display: none; */
}
/* 柜格状态弹窗样式 */
.cupboardState {
  width: 860px;
  height: 820px;
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
/* 设备信息弹窗样式 */
.deData {
  width: 860px;
  height: 420px;
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  z-index: 10;
  left: 0;
  top: -200px;
  right: 0;
  bottom: 0;
  margin: auto;
}
/* 设备数据弹窗样式 */
.deMsg {
  width: 1200px;
  height: 950px;
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0px;
  right: 0;
  bottom: 0;
  margin: auto;
}

.popupMenu {
  margin-top: 12px;
  display: flex;
  justify-content: center;
}
.popupMenu p {
  flex: 1;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
  font-size: 14px;
  font-weight: 400;
  text-align: LEFT;
  color: #606266;
}
.popupMenuBottomHight {
  border-bottom: 1px solid #409eff !important;
  color: #409eff !important;
  font-weight: 700 !important;
}
.popupMenuIcon {
  float: right;
  width: 20px;
  height: 48px;
}
</style>