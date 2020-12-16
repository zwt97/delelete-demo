<template>
  <view class="login">
    <text>您好！</text>
    <form @submit="formSubmit" @reset="formReset">
      <input
        class="uni-input"
        name="input"
        v-model="formData.Account"
        placeholder="请输入账号"
      />
      <input
        class="uni-input"
        name="input"
        type="password"
        v-model="formData.Password"
        placeholder="请输入密码"
      />
    </form>
    <button type="primary" class="btn-top" @click="formSubmit">登录</button>
    <button
      class="sys_btn"
      open-type="getUserInfo"
      lang="zh_CN"
      @getuserinfo="appLoginWx"
    >
      小程序登录授权
    </button>
  </view>
</template>

<script>
import { login } from "@/api/modules/user";
import md5 from "js-md5";
export default {
  name: "login",
  data() {
    return {
      formData: {
        Account: "",
        Password: "",
      },
    };
  },
  methods: {
    appLoginWx() {
      // #ifdef MP-WEIXIN
      uni.getProvider({
        service: "oauth",
        success: function (res) {
          if (~res.provider.indexOf("weixin")) {
            uni.login({
              provider: "weixin",
              success: (res2) => {
                uni.getUserInfo({
                  provider: "weixin",
                  success: (info) => {
                    //这里请求接口
                    console.log(res2);
                    console.log(info);
                  },
                  fail: () => {
                    uni.showToast({ title: "微信登录授权失败", icon: "none" });
                  },
                });
              },
              fail: () => {
                uni.showToast({ title: "微信登录授权失败", icon: "none" });
              },
            });
          } else {
            uni.showToast({
              title: "请先安装微信或升级版本",
              icon: "none",
            });
          }
        },
      });
      //#endif
    },
    formSubmit() {
      let formData = _.extend({}, this.formData);
      if (!formData.Account) {
        alert("请输入账号");
        return;
      }
      if (!formData.Password) {
        alert("请输入密码");
        return;
      }
      formData.Password = md5(formData.Password);
      console.log(formData, login);
      login(formData)
        .then((res) => {
          localStorage.clear();
          sessionStorage.clear();
          let data = res.data;
          localStorage.setItem("IsHeadStore", data.IsHeadStore);
          localStorage.setItem("token", data.TokenStr);
          localStorage.setItem("Account", data.Account);
          sessionStorage.setItem("includeList", []);
          this.$mutations.setIsHeadStore(data.IsHeadStore);
          this.$mutations.setAccount(data.Account);
          console.log(data);
          uni.redirectTo({
            url: "/pages/index/index",
          });
        })
        .catch((err) => {
          // alert(err.message);
        });
    },
    formReset() {
      this.formData = {
        Account: "",
        Password: "",
      };
    },
  },
};
</script>

<style>
.login {
  width: 100%;
  height: calc(100vh - 44px);
  background: #e8e8e8;
  /* // .btn-top {
		// 	margin: 10px 40px;
		// } */
}
</style>
