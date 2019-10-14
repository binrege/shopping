<template>
  <div>
    <div>
      <van-nav-bar
        title="设置"
        left-text="返回"
        right-text="点我"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="amend">
      <div class="username">
        <label style="margin-right: 15px;">您的用户名是:</label>
        <input v-model="user" placeholder disabled="disabled" />
      </div>
      <div class="useroldpass">
        <label style="margin-right: 15px;">请 输 入 密码:</label>
        <input v-model="pass" placeholder="请输入密码"  type="password"/>
      </div>
      <div class="usernewpass1">
        <label style="margin-right: 15px;">请输入新密码:</label>
        <input v-model="pass1" placeholder="请输入密码" type="password"/>
      </div>
      <div class="usernewpass2">
        <label style="margin-right: 15px;">请输入新密码:</label>
        <input v-model="pass2" placeholder="请输入密码" type="password"/>
      </div>
      <div class="Sbutton">
        <van-button round type="primary" click="clickAlter">确认修改</van-button>
        <van-button round type="warning" click="cliccancel">取消修改</van-button>
      </div>
    </div>
    <div class="Exit">
      <van-button round type="danger" click="clickExit">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "啦啦啦",
      pass: "",
      pass1: "",
      pass2: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("./Personal");
    },
    onClickRight() {
      this.$toast("叫你点就点啊！");
    },
    clickAlter() {
      this.$toast("修改");
    },
    cliccancel() {
      this.$toast("取消");
    },
    clickExit() {
      localStorage.removeItem("loginMsg"); 
      this.$router.push("Inputs");
      //移除所有的缓存数据
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("loginMsg"));
  }
};
</script>

<style lang="scss" scoped>
.amend {
  width: auto;
  height: auto;
  margin-top: 20px;
}
.username,
.useroldpass,
.usernewpass1,
.usernewpass2 {
  font-size: 15px;
  margin-top: 10px;
  width: 376px;
}
.Sbutton {
  margin-top: 10px;
}
.Exit {
  margin-top: 200px;
}
</style>