<template>
  <div>
    <el-container>
      <el-header>
        <div class="header-left">
          <div class="logo">logo</div>
          <span><i class="el-icon-s-fold"></i></span>
        </div>
        <div class="header-right">
          <i class="el-icon-search"></i>
          <i class="el-icon-bell"></i>
          <span class="welcome"
            ><img
              src="https://img2.baidu.com/it/u=1375451288,2772041284&fm=26&fmt=auto"
              alt=""
            />
            欢迎您，Admin</span
          >
          <i class="el-icon-s-fold" @click="logout">退出登录 </i>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px"
          ><el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>客户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/users">客户管理</el-menu-item>
                <el-menu-item index="2-2">来往统计</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>产品管理</span>
              </template>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>库存管理</span>
              </template>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>成本管理</span>
              </template>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>人员管理</span>
              </template>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
            </el-submenu>
          </el-menu></el-aside
        >
        <el-container>
          <el-footer>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/users' }"
                >用户管理</el-breadcrumb-item
              >
            </el-breadcrumb>
          </el-footer>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "front",
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    myactive: function (index) {
      this.active = index;
    },
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login")
    }
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  box-shadow: 0px -3px 5px 2px #797979;
  .logo {
    font-size: 30px;
    width: 200px;
    background-color: #f2f2f2;
    margin-right: 10px;
  }
}
.header-right {
  i {
    margin-right: 20px;
  }
}
.welcome {
  margin-right: 20px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
  }
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.header-left {
  display: flex;
  font-size: 30px;
  line-height: 60px;
}
.el-footer {
  padding: 10px 20px;

  .el-breadcrumb {
    font-size: 16px;
    line-height: 2;
    font-weight: 400;
    padding: 0 10px;
    .el-breadcrumb__item {
      margin-right: 40px;
    }
  }
}
</style>