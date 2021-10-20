<template>
  <el-container>
    <el-main>
      <div>
        <div class="logo">LOGO</div>
        <p>这是设计一行输出的文本，可以作为网站描述</p>
        <div class="logintype">
          <div class="num" :class="active ? 'active' : ''" @click="isactive">
            账号密码登录
            <div></div>
          </div>
          <div class="phone" :class="!active ? 'active' : ''" @click="isactive">
            手机号登录
            <div></div>
          </div>
        </div>
        <div class="loginmsg">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="loginFormRef"
            class="demo-ruleForm"
          >
            <el-form-item prop="email" label-width="auto">
              <el-input
                prefix-icon="el-icon-user"
                type="text"
                v-model="ruleForm.email"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password" label-width="auto">
              <el-input
                type="password"
                v-model="ruleForm.password"
                prefix-icon="el-icon-lock"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="success" @click="login">登录</el-button>
          <div class="another">
            <el-checkbox v-model="checked" size="small">自动登录</el-checkbox>
            <span class="forgot">忘记密码</span>
          </div>
        </div>
      </div></el-main
    >
    <el-footer
      ><div class="help">
        <span>帮助</span><span>隐私</span><span>条款</span>
      </div>
      <div class="footer">
        Copyright &copy; 2021 <span>XXXXXXXXXX</span> 出品
      </div></el-footer
    >
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        password: "",
      },
      //表单验证规则
      rules: {
        email: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            max: 8,
            min: 6,
            message: "密码长度必须在6-8位之间",
            trigger: "blur",
          },
        ],
      },
      active: "true",
      checked: true,
    };
  },
  methods: {
    isactive() {
      this.active = !this.active;
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.ruleForm);
        if (res.code !== 200) return this.$Message.error(res.errMsg);
        this.$Message.success("登录成功");
        //把token保存到sessionStorage
        window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/front");
      });
    },
  },
};
</script>

<style scoped>
.logo {
  height: 60px;
  width: 300px;
  background-color: #f2fef0;
  border: 1px solid #000;
  margin: 60px auto 20px;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
}
p {
  text-align: center;
  font-size: 12px;
}
.logintype {
  width: 300px;
  height: 40px;
  margin: 30px auto;
}
.num,
.phone {
  float: left;
  font-size: 10px;
  margin-left: 30px;
  text-align: center;
  line-height: 30px;
  padding-left: 10px;
}
.phone {
  margin-left: px;
}
.num > div,
.phone > div {
  height: 4px;
  width: 100px;
  border-radius: 10px;
}
.active {
  color: rgb(125, 223, 80);
}
.active > div {
  background-color: rgb(125, 223, 80);
}
.loginmsg {
  width: 360px;
  margin: 30px auto;
}

.el-button {
  width: 360px;
  height: 45px;
  margin-top: 30px;
}
.another {
  width: 360px;
  margin-top: 100px;
  font-size: 12px;
  position: relative;
}
.el-checkbox {
  margin-left: 10px;
}
.automatic {
  float: left;
  text-align: center;
}

.forgot {
  color: rgb(125, 223, 80);
  position: absolute;
  right: 0;
}
.login {
  width: 350px;
  height: 50px;
  background-color: rgb(125, 223, 80);
  margin: 0 auto;
  border-radius: 5px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
}
.help {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: 80px auto 10px;
}
.footer {
  width: 215px;
  font-size: 12px;
  margin: 0 auto;
}
.footer > span {
  color: rgb(125, 223, 80);
}
</style>