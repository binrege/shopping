<template>
  <div>
    <div>
      <van-button round type="info" size="large" @click="Msg1">确认注册</van-button>
    </div>
    <div class="tese"></div>

    <div>
      <van-cell  @click="showPopup">展示弹出层</van-cell>

      <van-popup v-model="show" closeable round position="bottom" :style="{ height: '55%' }">
        <div class="popup">
          <div class="popup-title1">手机号验证</div>
          <div class="popup-title2">请输入您收到的手机号验证码</div>
          <div class="popup-label">
            <van-cell-group>
              <van-field
                v-model="phone"
                required
                clearable
                label="手机号"
                right-icon="question-o"
                placeholder="请输入手机号"
                @click-right-icon="$toast('question')"
              />
              <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
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
    
  </div>
</template>


<script>
export default {
  name: "test",
  data() {
    return {
      show: false
    };
  },
  methods: {
    Msg1() {
      this.$dialog
        .confirm({
          title: "标题",
          message: "弹窗内容"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          //   on cancel
        });
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style scoped>
.popup-title1 {
  padding-top: 20px;
  padding-left:10px;
  font-size: 20px;
  font-weight: 500;
}
.popup-title2 {
  padding-top: 12px;
  padding-left:15px;
  font-size: 5px;
}
.popup-label{
    padding-top: 50px;
    margin: 0 auto;
    width: 85%;
}
.popup-buttom{
    padding-top: 35px;
    margin: 0 auto;
    width: 80%;
    height: 30%;
}
.popup-message{
    text-align: center;
    padding-top: 15px;
    font-size: 10px;

}
.tese{
  margin: 0 auto;
  width: 95%;
  margin-top: 30px;

  height: 300px;
  border-radius: 12px;
  background-color: blue;
}
/* .popup-message a{
    
} */

</style>