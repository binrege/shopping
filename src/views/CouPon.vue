<template>
  <div>
    <div>
      <van-nav-bar
        title="我的优惠券"
        left-text="返回"
        right-text="优惠券说明"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div>
      <van-tabs v-model="activeName" @disabled="onClickDisabled">
        <van-tab title="未使用" name="a">
          <div class="home__tab" >
            <div class="coupon" @click="onClickRightuse">
            <van-coupon-list
              enabled-title="优惠券"
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              :disabled-coupons="disabledCoupons"
              @change="onChange1"
              @exchange="onExchange1"
            />
            </div>
          </div>
            <button class="exchange" @click="onClickvoucher">用考拉豆兑换几张吧~ →</button>
            <div class="bottom1">
              <Guesslike msg />
            </div>
        </van-tab>
        <van-tab title="已使用" name="b">
          <div class="home__tab2">
            <van-coupon-list
              disabled-title="优惠券"
              :coupons="disabledCoupons"
              :disabled-coupons="disabledCoupons"
              @change="onChange2"
              @exchange="onExchange2"
            />
            <div class="bottom2">
              <Guesslike msg />
            </div>
          </div>
        </van-tab>
        <van-tab title="已过期" name="c" disabled></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Guesslike from "../components/Guess/Guesslike.vue";
export default {
  name: "bottom1",
  components: {
    Guesslike
  },
  name: "bottom2",
  components: {
    Guesslike
  },

  data() {
    return {
      activeName: "a",
      showList: true,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [discoupon]
    };
  },
  methods: {
    onClickRightuse(){
      this.$router.push("./RightUse");
    },
    onClickDisabled(c, title) {
    },
    onClickvoucher(){
      this.$router.push("./Voucher");
    },
    onClickLeft() {
      this.$router.push("personal");
    },
    onClickRight() {
      this.$toast("优惠券说明");
    },
    onChange1(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange1(code) {
      this.coupons.push(coupon);
    },
    onChange2(index) {},
    onExchange2(code) {}
  }
};
const coupon = {
  available: 1,
  condition: "无门槛金额",
  reason: "金额不足",
  value: 1600,
  name: "纯露化妆水无门槛10元卷",
  startAt: 1564588800,
  endAt: 1569859200,
  valueDesc: "10",
  unitDesc: "元",
  description: "仅限购买工厂商品店商品"
};
const discoupon = {
  available: 1,
  condition: "无门槛金额",
  reason: "金额不足",
  value: 1600,
  name: "纯露化妆水无门槛20元卷",
  startAt: 1564588800,
  endAt: 1569859200,
  valueDesc: "20",
  unitDesc: "元",
  description: "仅限购买工厂商品店商品"
};
</script>

<style lang="scss" scoped>
//跳转到领券中心的Button
.exchange {
  height: 40px;
  width: 95%;
  margin: 2px 3px 5px 10px;
  line-height: 30px;
  background-color: #fff;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 50px;
}
.bottom {
  height: 300px;
  width: auto;
  margin-top: 20px;
}
.bottom-head {
  text-align: center;
}
.bottom-body {
  height: 300px;
}
.Card1 {
  width: 200px;
  display: flex;
}
.Card2 {
  width: 200px;
  display: flex;
}
.bottom-tail {
  text-align: center;
  margin-bottom: 0;
}
</style>