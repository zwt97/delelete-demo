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
    formSubmit() {
      debugger
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
          alert(err.message);
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
