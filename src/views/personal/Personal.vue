<template>
  <div class="all">
    <div class="head">
      <div class="head-picture">
        <img class="picture" src="../../assets/personal/set.svg" @click="clickSet"/>
        <img class="picture" src="../../assets/personal/message.svg" />
      </div>
      <div class="head-person">
        <div class="head-portrait">
          <van-image
            class="head-img"
            round
            width="5.5rem"
            height="5.5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>

        <label class="head-name" @click="clickInputs">{{user}}</label>
        <div class="elasticity">
          <div v-for="(item,index) in arr" :key="index" class="item">
            <div
              @click="clickNumber(item,index)"
              class="item-number"
              :class="{}"
              :style="{}"
            >{{item.number}}</div>
            <div
              @click="clickIncident(item,index)"
              class="item-incident"
              :class="{}"
              :style="{}"
            >{{item.incident}}</div>
          </div>
        </div>
      </div>
      <div class="head-bottom">
        <div class="bottom-picture1">
          <img src="../../assets/personal/vip.svg" class="bottom-picture3" />
        </div>
        <div class="bottom-text1">卡拉黑卡</div>
        <div class="bottom-text2">点击查看特权</div>
        <div class="bottom-picture2">
          <img src="../../assets/personal/lookall.svg" class="bottom-picture4" />
        </div>
      </div>
    </div>
    <div class="body">
      <div class="body-head">
        <div class="text" @click="clickLookall">我的订单</div>
        <div class="lookall" @click="clickLookall">查看全部</div>
        <div class="lookallimg" @click="clickLookallimg">
          <img class="lookallimg-img" src="../../assets/personal/lookall.svg" />
        </div>
      </div>
      <van-divider :style="{ color: '#141212', borderColor: '#141212', padding: '0 5px' }"></van-divider>
      <div class="body-bottom">
        <div class="payment" @click="clickPayment">
          <div class="payment-img">
            <img class="payment-img1" src="../../assets/personal/payment.svg" />
          </div>
          <div class="payment-font">待付款</div>
        </div>
        <div class="delivery" @click="clickDelivery">
          <div class="delivery-img">
            <img class="delivery-img1" src="../../assets/personal/delivery.svg" />
          </div>
          <div class="delivery-font">待发货</div>
        </div>
        <div class="goods" @click="clickGoods">
          <div class="goods-img">
            <img class="goods-img1" src="../../assets/personal/goods.svg" />
          </div>
          <div class="goods-font">待收货</div>
        </div>
        <div class="evaluation" @click="clickEvaluation">
          <div class="evaluation-img">
            <img class="evaluation-img1" src="../../assets/personal/evaluation.svg" />
          </div>
          <div class="evaluation-font">评价</div>
        </div>
        <div class="return" @click="clickReturn">
          <div class="return-img">
            <img class="return-img1" src="../../assets/personal/return.svg" />
          </div>
          <div class="return-font">退款/换货</div>
        </div>
      </div>
    </div>
    <div class="shuffling">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="img1" v-lazy="image.images" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import foot from "../../components/footer/Foot";
import axios from "_axios@0.19.0@axios/index";
export default {
  data() {
    return {
      color: "red",
      user: "请先登录",

      arr: [
        {
          number: 1,
          incident: "收藏"
        },
        {
          number: 2,
          incident: "关注"
        },
        {
          number: 3,
          incident: "足迹"
        },
        {
          number: 1,
          incident: "卡券"
        }
      ],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  mounted() {
    if (localStorage.getItem("loginMsg") != null) {
      this.user = JSON.parse(localStorage.getItem("loginMsg"));
    }

    axios
      .get("api/yyp")
      .then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.images = res.data;
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    foot
  },
  methods: {
    clickInputs(){
      if (localStorage.getItem("loginMsg") != null) {
        return false;
        }
      else {
        this.$router.push("../Inputs");
      }
    },
    clickNumber(item, index) {
      //alert(item.name+" "+item.price+" "+index)
    },
    clickIncident(item, index){
      if (localStorage.getItem("loginMsg") != null) {
        if(index===3){
          this.$router.push("../CouPon");
        }
      }
      else {
        this.$toast("亲你还没登录哦");
      }

    },
    clickLookall() {
      if (localStorage.getItem("loginMsg") != null) {
        this.$router.push("./Order");
      }
      else {
        this.$toast("亲你还没登录哦");
      }

    },
    clickLookallimg() {
      if (localStorage.getItem("loginMsg") != null) {
        this.$router.push("./Order");
      }
      else {
        this.$toast("亲你还没登录哦");
      }
    },
    clickPayment() {
      if (localStorage.getItem("loginMsg") != null) {
        this.$router.push("./Order");
      }
      else {
        this.$toast("亲你还没登录哦");
      }
    },
    clickDelivery() {
      if (localStorage.getItem("loginMsg") != null) {
        this.$router.push("./Order");
      }
      else {
        this.$toast("亲你还没登录哦");
      }
    },
    clickGoods() {
      if (localStorage.getItem("loginMsg") != null) {
        this.$router.push("./Order");
      }
      else {
        this.$toast("亲你还没登录哦");
      }
    },
    clickEvaluation() {
      this.$toast("功能尚未完善，程序员正在加油");
    },
    clickReturn() {
      this.$toast("功能尚未完善，程序员正在加油");
    },
    clickSet(){
      if (localStorage.getItem("loginMsg") != null) {
        this.$router.push("./Set");
      }
      else {
        this.$toast("亲你还没登录哦");
      }

    }
  }
};
</script>

<style lang="scss" scoped>
.all {
  width: 100%;
  height: 670px;
  background: #f5f1f1;
}
.head-picture {
  width: 60px;
  height: 30px;
  position: absolute;
  margin: 15px 0 0 78%;
}
.picture {
  width: 22px;
  height: 22px;
  margin-left: 4px;
}

.head {
  width: 100%;
  background: #ac0215;
  position: absolute;
  height: 30%;
  border-radius: 5px;
}
.head-person {
  width: 80%;
  background: #ffffff;
  position: relative;
  height: 180px;
  margin: 50px auto;
  border-radius: 10px;
  z-index: 2;
}

.head-portrait {
  position: absolute;
  width: 98px;
  height: auto;
  margin: -20px 0 0 0;
}
.head-img {
  width: 55px;
}

.head-name {
  width: auto;
  height: auto;
  font-size: 25px;
}

.elasticity {
  margin-top: 85px;
  display: flex;
}
.head-bottom {
  width: 80%;
  height: auto;
  position: relative;
  background: #0a0a0a;
  border-radius: 10px;
  margin: -60px auto 0 auto;
  z-index: 1;
  display: flex;
}
.bottom-picture1 {
  width: 32px;
  height: 32px;
  padding: 12px 0 0 10px;
}
.bottom-picture3 {
  width: 32px;
  height: 32px;
}
.bottom-text1 {
  padding: 20px 0 0 0px;
  opacity: 0.8;
  font-size: 15px;
  color: #ffffff;
}
.bottom-picture2 {
  width: 15px;
  height: 15px;
  padding: 15px 10px 0 0px;
}
.bottom-picture4 {
  width: 30px;
  height: 30px;
}
.bottom-text2 {
  padding: 25px 0 0 110px;
  opacity: 0.5;
  font-size: 10px;
  color: #ffffff;
}

.item {
  width: 60px;
  height: 20px;
  margin-left: 10px;
}
.item-number,
.item-incident {
  width: 60px;
  height: 20px;
  font-size: 16px;
  text-align: center;
}

.body {
  position: absolute;
  width: 100%;
  height: auto;
  background: #ffffff;
  margin-top: 80%;
}
.body-head {
  flex: 1;
  width: auto;
  height: 32px;
  display: flex;
}
.text {
  width: auto;
  height: auto;
  font-size: 15px;
  padding: 12px 0 0 15px;
}
.lookall {
  width: auto;
  height: auto;
  margin-left: 52%;
  font-size: 15px;
  padding: 12px 0 0 0;
}
.lookallimg {
  height: 32px;
  width: 32px;
  padding: 6px 0 0 0;
}
.lookallimg-img {
  height: 32px;
  width: 32px;
}
.body-bottom {
  flex: 2;
  display: flex;
  justify-content: space-around;
}
.payment-img,
.delivery-img,
.goods-img {
  padding-left: 9px;
  width: 48px;
  height: 32px;
}
.payment-img1,
.delivery-img1,
.goods-img1,
.evaluation-img1,
.return-img1 {
  width: 33px;
}
.return-img {
  padding-left: 20px;
}
.payment-font,
.delivery-font,
.goods-font {
  margin-top: 5px;
}
.payment-font,
.delivery-font,
.goods-font,
.evaluation-font,
.return-font {
  width: auto;
  height: 20px;
  font-size: 15px;
}
.shuffling {
  width: 100%;
  height: 200px;
  padding-top: 120%;
}
.img1 {
  width: 100%;
  height: 160px;
  max-height: 100%;
  max-width: 100%;
}
</style>