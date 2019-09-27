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
      <van-tabs v-model="activeName">
        <van-tab title="未使用" name="a">
          <div class="home__tab">
            <van-coupon-list
              enabled-title="优惠券"
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              :disabled-coupons="disabledCoupons"
              @change="onChange1"
              @exchange="onExchange1"
            />
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
          </div>
        </van-tab>
        <van-tab title="已过期" name="c"></van-tab>
      </van-tabs>
    </div>
 
  </div>
</template>

<script>
export default {
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
    onClickLeft() {
      this.$toast("返回");
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
     onChange2(index) {
     
    },
    onExchange2(code) {
     
    }
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
  description:'仅限购买工厂商品店商品'
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
  description:'仅限购买工厂商品店商品'
};

</script>

<style lang="scss" scoped>
</style>