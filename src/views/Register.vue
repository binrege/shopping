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
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />
          <van-field
            v-model="phone"
            required
            clearable
            label="手机号"
            right-icon="question-o"
            placeholder="请输入手机号"
            @click-right-icon="$toast('question')"
          />


          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </div>

      <div class="lod">
        <van-button round type="info" size="large">确认注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'register',
    
};
</script>

<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 220px;
  /* background-color: blue; */
}
.register1 {
  position: absolute;
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
  padding-left: 10px;
}
/* .lod {
  margin: 0 auto;
  width: 300px;
} */
.center{
    padding-top: 50px;

}
.lod{
    padding-top: 50px;
    
}
</style>