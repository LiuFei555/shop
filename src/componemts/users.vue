<template>
  <div class="body">
    <div class="user-header">
      客户姓名：<el-input
        v-model="input"
        placeholder=""
        size="small"
      ></el-input>
      国籍：<el-select v-model="value" placeholder="" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="success" size="small" icon="el-icon-search"
        >搜索</el-button
      >
      <el-button type="success" size="small" icon="el-icon-refresh"
        >重置</el-button
      >
      <span class="arrow-down" icon=""
        >展开<i class="el-icon-arrow-down"></i
      ></span>
    </div>
    <br />
    <div>
      <el-button
        type="success"
        size="small"
        icon="el-icon-plus"
        @click="dialog = true"
        >添加客户</el-button
      >
      <el-button type="success" size="small" icon="el-icon-folder-add"
        >导入</el-button
      >
      <el-button type="success" size="small" icon="el-icon-delete-solid"
        >回收站</el-button
      >
      <el-dropdown trigger="click" szie="medium" class="much">
        <span class="el-dropdown-link">
          批量操作<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a"
            ><i class="el-icon-delete-solid"></i> 删除</el-dropdown-item
          >
          <el-dropdown-item command="b"
            ><i class="el-icon-folder-remove"></i> 导出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="selected">
      已选择<span> 0 </span>项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        >清空</span
      >
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      border
    >
      <el-table-column type="selection" width="55" align="center">
      </el-table-column>
      <el-table-column
        prop="gongsi"
        label="公司名称"
        width="200"
        align="center"
      ></el-table-column>
      <el-table-column prop="name" label="客户姓名" width="80" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="105" align="center">
      </el-table-column>
      <el-table-column prop="gender" label="性别" width="60" align="center">
      </el-table-column>
      <el-table-column prop="country" label="国籍" width="60" align="center">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180" align="center">
      </el-table-column>
      <el-table-column prop="way" label="联系途径" width="80" align="center">
      </el-table-column>
      <el-table-column prop="operate" label="操作" width="120" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >详情</el-button
          >
          |
          <el-button type="text" size="small">
            <el-dropdown trigger="click" szie="small">
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a"
                  ><i class="el-icon-delete-solid"></i> 删除</el-dropdown-item
                >
                <el-dropdown-item command="b"
                  ><i class="el-icon-folder-remove"></i> 导出</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
      title="编辑"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form" size="small">
          <el-form-item label="公司名称 :" :label-width="formLabelWidth">
            <el-input
              v-model="form.corporateName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="客户姓名 :" :label-width="formLabelWidth">
            <el-input v-model="form.customerName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号 :" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别 :" :label-width="formLabelWidth">
            <el-select v-model="form.sex" placeholder="请选择性别">
              <el-option label="男" value="man"></el-option>
              <el-option label="女" value="women"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="国籍 :" :label-width="formLabelWidth">
            <el-select v-model="form.nationality" placeholder="国籍">
              <el-option label="中国" value="china"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地址 :" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="联系途径 :" :label-width="formLabelWidth">
            <el-input v-model="form.channel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开发行 :" :label-width="formLabelWidth">
            <el-input v-model="form.bank" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="银行账户 :" :label-width="formLabelWidth">
            <el-input v-model="form.bankNumber" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
            >{{ loading ? "提交中 ..." : "确 定" }}</el-button
          >
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "中国",
        },
        {
          value: "选项2",
          label: "法国",
        },
        {
          value: "选项3",
          label: "美国",
        },
        {
          value: "选项4",
          label: "日本",
        },
        {
          value: "选项5",
          label: "俄罗斯",
        },
      ],
      value: "",
      input: "",
      tableData: [
        {
          name: "王欣然",
          address: "上海市普陀区金沙江路 1518 弄",
          gongsi: "深圳市碧有科技有限公司",
          phone: 13919044431,
          gender: "女",
          country: "中国",
          email: "879842127@qq.com",
          way: "微信",
        },
        {
          name: "李子奇",
          address: "上海市普陀区金沙江路 1518 弄",
          gongsi: "上海瀚广实业有限公司",
          phone: 13919044431,
          gender: "男",
          country: "日本",
          email: "879842127@qq.com",
          way: "QQ",
        },
        {
          name: "邓小姐",
          address: "上海市普陀区金沙江路 1518 弄",
          gongsi: "重庆南华信息技术有限公司",
          phone: 13919044431,
          gender: "女",
          country: "美国",
          email: "879842127@qq.com",
          way: "微信",
        },
      ],
      multipleSelection: [],
      form: {
        customerName: "",
        sex: "",
        phone: "",
        corporateName: "",
        address: "",
        channel: "",
        bank: "",
        bankNumber: "",
        email: "",
        nationality: "",
      },
      formLabelWidth: "80px",
      timer: null,
      table: false,
      dialog: false,
      loading: false,
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then(() => {
          this.loading = true;
          this.timer = setTimeout(() => {
            this.$http.post("/customer", this.form).then((res) => {
              console.log(res);
            });
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(() => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
  },
  mounted() {
    this.$http.get("/country").then(
      res=>{console.log(res.data);}
    );
  },
};
</script>

<style lang="less" scoped>
.body {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 20px;
  font-size: 13px;
}
.el-input {
  width: 200px;
  margin-right: 100px;
}
.el-select {
  margin-right: 20px;
}
.el-button {
  color: #000;
}
.arrow-down {
  margin-left: 20px;
  color: #81d195;
}
.user-header > .el-button {
  margin-left: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  font-size: 12px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.much {
  margin-left: 20px;
}
.selected {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #a4e085;
  border-radius: 3px;
  background-color: #e1fbc7;
  margin-top: 10px;
  span {
    color: #a4e085;
  }
}
.el-table {
  margin-top: 10px;
  font-size: 13px;
}
.el-input {
  width: 300px;
  margin-left: 10px;
  margin-top: 5px;
}
.el-select {
  width: 100px;
  margin-left: 10px;
  margin-top: 5px;
}
</style>