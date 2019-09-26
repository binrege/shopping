<template>
  <div class="top">
    <div>
      <div class="top1">登录|注册</div>
      <!-- <van-button type="primary">按钮</van-button> -->
      <div class="input">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />

          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
      </div>
      <div class="lod">
        <van-button round type="info" size="large">获取验证码</van-button>
      </div>
      <div class="load">
        <div class="load-left">
          <van-label type="default">账号密码登录</van-label>
        </div>
        <div class="load-right">
          <van-label type="default">新用户注册</van-label>
        </div>
      </div>
      <div class="B">
        <div class="content">
          <p class="title">第三方登录</p>
        </div>
        <div class="buttom">
          <img alt="Vue logo" src="../assets/WeCat.svg" />
          <br />
          <h>微信登录</h>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.top1 {
  padding-top: 20px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.top {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.input {
  padding-top: 50px;
  margin: 0 auto;
  height: 200px;
}
.lod {
  margin: 0 auto;
  width: 300px;
}
.load {
  margin: 0 auto;
  padding-top: 30px;
  width: 300px;
}
.load-left {
  float: left;
}
.load-right {
  float: right;
}
.content {
  /* margin-bottom: 300px; */
  padding-bottom: 30px;
  width: 330px;
  margin: 0 auto;
  border-top: 1px solid black;
  position: relative;
}

.content .title {
  /* width: 320px;
    height: 50px; */
  background: #ffffff;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  color: #666666;
  position: absolute;
  top: -25px;
  left: 110px;
}
.B{
  position:fixed;
  bottom:0;
}
.buttom {
  margin-bottom: 30px;
}
.bottom h {
  font-size: 12px;
}
</style>