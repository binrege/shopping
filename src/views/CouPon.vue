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
    <div>

    </div>
  </van-tab>
  <van-tab title="已使用" name="b">b</van-tab>
  <van-tab title="已过期" name="c"></van-tab>
</van-tabs>
    </div>
    <div>
      <!-- 优惠券单元格 -->
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />

      <!-- 优惠券列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName:'a',
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    };
  },
    methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('优惠券说明');
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
};
const coupon = {
  available: 1,
  condition: "满100减16\n最多优惠32元",
  reason: "金额不足",
  value: 1600,
  name: "奶制品优惠券",
  startAt: 1564588800,
  endAt: 1569859200,
  valueDesc: "16",
  unitDesc: "元"
};
</script>

<style lang="scss" scoped>
</style>