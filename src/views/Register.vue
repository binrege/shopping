<template>
  <div class="register">
    <div class="register1">
      <div>
        <div class="t">手机号注册</div>
        <div class="t1">Hi 欢迎注册购物网</div>
      </div>
      <div class="center">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />
          <van-field
            v-model="phone"
            required
            label="手机号"
            right-icon="question-o"
            placeholder="请输入手机号"
            @click-right-icon="$toast('手机号为11位数字')"
          />

          <van-field
            v-model="password"
            type="password"
            label="密码"
            right-icon="question-o"
            placeholder="请输入密码"
            required
            @click-right-icon="$toast('密码必须包含数字、字母，区分大小写，最短8位，区分大小写')"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="captcha" center label="短信验证码" placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary" @click="Sent">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </div>

      <div class="lod">
        <van-button round type="info" size="large" @click="Login">确认注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Util from '../../utils/utils';
export default {
  
  name: "register",
  data() {
    return {
      username: "",
      phone: "",
      password: "",
      captcha: ""
    };
  },
  methods: {
    Msg() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "是否确定注册？"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    Login(){
       if (this.username === '' ) {        
          this.$notify({ type: 'warning', message: '用户名不能为空' }); 
       }else if (this.password === '') {
        this.$notify({ type: 'warning', message: '密码不能为空' });
      }else if (this.phone === '') {
        this.$notify({ type: 'warning', message: '手机号不能为空' });
      }else if (this.captcha === '') {
        this.$notify({ type: 'warning', message: '验证码不能为空' }); 
      }else{
        this.$dialog
        .confirm({
          title: "提示",
          message: "是否确定注册？"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
      }
    },
    Sent(){

      if (this.phone === '') {
        this.$notify({ type: 'warning', message: '手机号不能为空' });
      } else if (!Util.phoneReg.test(this.phone)){
					this.$notify({ type: 'warning', message: '手机号输入有误' });
				}
    }
  
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 80%;
  padding-top: 90px;
  /* background-color: blue; */
}
.register1 {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 90%;
  height: 30%;
  margin: auto;
}
.t {
  font-size: 30px;
  font-weight: 500;
}
.t1 {
  font-size: 15px;
  padding-left: 30px;
  padding-top: 10px;
}
/* .lod {
  margin: 0 auto;
  width: 300px;
} */
.center {
  padding-top: 50px;
}
.lod {
  padding-top: 50px;
}
</style>