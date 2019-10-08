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
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />

          <van-field v-model="password" type="password" label="密码" right-icon="question-o" placeholder="请输入密码" required  @click-right-icon="$toast('密码必须包含数字、字母，区分大小写，最短8位，区分大小写')" />
        </van-cell-group>
      </div>
      <div class="lod">
        <van-button round type="info" size="large">获取验证码</van-button>
      </div>
      <div class="load">
        <div class="load-left">
          <van-cell @click="showPopup" overlay=false>手机号登录</van-cell>

          <van-popup v-model="show" closeable round position="bottom" :style="{ height: '60%' }">
            <div class="popup">
              <div class="popup-title1">手机号验证</div>
              <div class="popup-title2">请输入您收到的手机号验证码</div>
              <div class="popup-label">
                <van-cell-group>
                  <van-field
                    v-model="phone"
        
                    label="手机号："
                    right-icon="question-o"
                    placeholder="请输入手机号"
                    @click-right-icon="$toast('question')"
                  />
                  <van-field v-model="sms"  label="验证码：" placeholder="请输入短信验证码">
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                  </van-field>
                </van-cell-group>
              </div>
              <div class="popup-buttom">
                <van-button round type="info" size="large">登录</van-button>
              </div>
              <div class="popup-message">
                如登录，注册遇到问题，请联系<a href="https://www.baidu.com/">客服</a>
              </div>
            </div>
          </van-popup>
        </div>
        <div class="load-right">
          <van-label type="default" @click="goTo">新用户注册</van-label>
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
export default {
  name: "input",
  data() {
    return {
      show: false,
      ClearData:{
        username: '',
        password: ''
      },
    };
  },
  methods: {
    submitFrom(){

    },
    showPopup() {
      this.show = true;
    },
    goTo(){
      this.$router.push('/register')
    }
  },

};
</script>

<style scoped>
.top {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.top1 {
  padding-top: 25px;
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
.popup-title1 {
  text-align: left;
  padding-top: 22px;
  padding-left:5px;
  font-size: 20px;
  font-weight: 500;
}
.popup-title2 {
  text-align: left;
  padding-top: 12px;
  padding-left:15px;
  font-size: 8px;
}
.popup-label{
    padding-top: 50px;
    margin: 0 auto;
    width: 90%;
}
.popup-buttom{
    padding-top: 35px;
    margin: 0 auto;
    width: 90%;
    height: 30%;
}
.popup-message{
    text-align: center;
    padding-top: 15px;
    font-size: 10px;

}
/* .load-left van-cell{
font-size: 12px;
} */
.load-right {
  padding-top: 10px;
  float: right;
  font-size: 14px;
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
  left: 120px;
}
.B {
  position: fixed;
  bottom: 0;
}
.buttom {
  margin-bottom: 30px;
}
.bottom h {
  font-size: 12px;
}
</style>