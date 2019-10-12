<template>
  <div class="top">
    <div>

      <div class="top1">登录|注册</div>
      <!-- <van-button type="primary">按钮</van-button> -->
      <div class="inputs">
        <van-cell-group>
          <van-field
            v-model="uname"
            required
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('用户名不能为空')"
          />

          <van-field
            v-model="pwd"
            type="password"
            label="密码"
            right-icon="question-o"
            placeholder="请输入密码"
            required
            @click-right-icon="$toast('密码必须包含数字、字母，区分大小写，最短8位，区分大小写')"
          />
        </van-cell-group>
      </div>
      <div class="lod">
        <van-button round type="info" size="large" @click="Login">登录</van-button>
      </div>
      <div class="load">
        <div class="load-left">
          <van-cell @click="showPopup" overlay="false">手机号登录</van-cell>

          <van-popup v-model="show" closeable round position="bottom" :style="{ height: '60%' }">
            <div class="popup">
              <div class="popup-title1">手机号验证</div>
              <div class="popup-title2">请输入您收到的手机号验证码</div>
              <div class="popup-label">
                <van-cell-group>
                  <van-field
                    @keyup="Change"
                    v-model="phone"
                    label="手机号："
                    border:false
                    right-icon="question-o"
                    placeholder="请输入手机号"
                    @click-right-icon="$toast('手机号为11位数字组成')"
                  />
                  <van-field v-model="password1" label="验证码：" placeholder="请输入短信验证码">
                    <van-button
                      v-if="!btnShow"
                      slot="button"
                      disabled
                      size="small"
                      type="primary"
                      @click="Sent"
                    >发送验证码</van-button>
                    <van-button
                      v-if="btnShow"
                      slot="button"
                      size="small"
                      type="primary"
                      @click="Sent"
                    >发送验证码</van-button>
                  </van-field>
                </van-cell-group>
              </div>
              <div class="popup-buttom">
                <van-button round type="info" size="large" @click="Login1">登录</van-button>
              </div>
              <div class="popup-message">
                如登录，注册遇到问题，请联系
                <a href="https://www.baidu.com/">客服</a>
              </div>
            </div>
          </van-popup>
        </div>
        <div class="load-right">
          <label type="default" @click="goTo" class="right-text">新用户注册</label>
        </div>
      </div>
      <div class="below">
        <div class="content">
          <p class="title">第三方登录</p>
        </div>
        <div class="buttom">
          <img alt="Vue logo" src="../assets/WeCat.svg" />
          <br />
          <div>微信登录</div>
        </div>
      </div>
    </div>
    {{uname+pwd}}
  </div>
</template>

<script>
import Util from "../../utils/utils";
import { mapMutations } from "vuex";
import { stringify } from "querystring";
export default {
  name: "inputs",
  
  data() {
    return {
      isLogin:false,
      btnShow: false,
      show: false,
      loginForm: [
        {
         username:'',
         password:''
        }
      ],
      loginMsg:[{

      }],
      a:[],
      phone: "",
      password1: "",
      userToken: "",
      uname:'',
   pwd:'',
      // msg: "",
    };
  },
  mounted() {
    // if (this.phone !== '') {
    //     this.$notify({ type: 'warning', message: '手机号不能为空' });
    //   }
    // this.$notify('提示文案');
  },
  methods: {
   
    submitFrom() {},
    showPopup() {
      this.show = true;
    },
    Login() {
      if (this.uname === "") {
        // alert('账号或密码不能为空');
        this.$notify({ type: "warning", message: "用户名不能为空" });
      } else if (this.pwd === "") {
        this.$notify({ type: "warning", message: "密码不能为空" });
      }else if(this.uname === "admin"&&this.pwd === "123"){
        this.loginForm.username=this.uname;
        this.loginForm.password=this.pwd;
        console.log("111111"+this.loginForm.username)
        
        localStorage.setItem("loginMsg",JSON.stringify(this.loginForm.username));
        this.isLogin = true;
        this.$router.push("/");
        this.$toast('登陆成功!');
        

        //与后端请求代码，暂时还没有请求地址，先省略了
        console.log(JSON.stringify(this.loginForm.username));

      }else{
        this.$toast('用户名或密码错误');
        this.pwd="";

      

        
       // this.$router.push("/");

        // this.$store.dispatch('toLogin', {
        //   loginUser: this.username,
        //   loginPassword: this.password
        // }).then(() => {
        //   this.$store.dispatch('getUser')
        //   let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/')
        //   console.log(redirectUrl)
        //   // 跳转到指定的路由
        //   this.$router.push({
        //     path: redirectUrl
        //   })
        // }).catch((error) => {
        //   console.log(error.response.data.message)
        // })
      }
    },

    Login1() {
      if (this.phone === "") {
        this.$notify({ type: "warning", message: "手机号不能为空" });
      } else if (this.password1 === "") {
        this.$notify({ type: "warning", message: "验证码不能为空" });
      }
    },
    Change() {
      if (this.phone.length >= 1) {
        this.btnShow = true;
      }
    },

    Sent() {
      if (this.phone === "") {
        this.$notify({ type: "warning", message: "手机号不能为空" });
      } else if (!Util.phoneReg.test(this.phone)) {
        this.$notify({ type: "warning", message: "手机号输入有误" });
      }
    },
    goTo() {
      this.$router.push("/register");
    },
    ...mapMutations(["changeLogin"])
    // login () {
    //   let _this = this;
    //   if (this.loginForm.username === '' || this.loginForm.password === '') {
    //     alert('账号或密码不能为空');
    //   // } else {
    //   //   this.axios({
    //   //     method: 'post',
    //   //     url: '/user/login',
    //   //     data: _this.loginForm
    //   //   }).then(res => {
    //   //     console.log(res.data);
    //   //     _this.userToken = 'Bearer ' + res.data.data.body.token;          // 将用户token保存到vuex中
    //   //     _this.changeLogin({ Authorization: _this.userToken });
    //   //     _this.$router.push('/home');
    //   //     alert('登陆成功');
    //   //   }).catch(error => {
    //   //     alert('账号或密码错误');
    //   //     console.log(error);
    //   //   });
    //   }
    // }
  }
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
.inputs {
  padding-top: 120px;
  margin: 0 auto;
  height: 200px;
}
.lod {
  margin: 0 auto;
  width: 300px;
  padding-top: 50px;
}
.load {
  margin: 0 auto;
  margin-top: 50px;
  width: 300px;
}
.load-left {
  float: left;
}
.popup-title1 {
  text-align: left;
  padding-top: 22px;
  padding-left: 5px;
  font-size: 20px;
  font-weight: 500;
}
.popup-title2 {
  text-align: left;
  padding-top: 12px;
  padding-left: 15px;
  font-size: 8px;
}
.popup-label {
  padding-top: 50px;
  margin: 0 auto;
  width: 90%;
}
.popup-buttom {
  padding-top: 35px;
  margin: 0 auto;
  width: 90%;
  height: 30%;
}
.popup-message {
  text-align: center;
  padding-top: 15px;
  font-size: 10px;
}
/* .load-left van-cell{
font-size: 12px;
} */
.load-right {
  padding-top: 12px;
  float: right;
  font-size: 14px;
  font-weight:normal;
}
.right-text{
  font-weight:normal;
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
  left: 125px;
}
.below {
  position: relative;
  margin-top: 200px;
  bottom: 0;
}
.buttom {
  margin-bottom: 30px;
}
.bottom h {
  font-size: 12px;
}
</style>