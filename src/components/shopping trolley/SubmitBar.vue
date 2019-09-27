<template>
  <div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="showPopup">
      <van-popup v-model="show" closeable position="bottom" :style="{ height: '70%' }">
        <br />
        <br />
        <van-cell title="请选择地址" is-link arrow-direction="down" value="默认地址" @click="open">
          <van-icon name="location" />
        </van-cell>
        <van-cell title="配送方式" is-link arrow-direction="down" value />
        <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
        <van-popup v-model="showList" position="bottom" :style="{ height: '70%' }">
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
        <van-cell title="发票" is-link arrow-direction="down" value />
        <van-cell title="红包" is-link arrow-direction="down" value />
        <van-cell title="总价" is-link arrow-direction="down" value />
        <van-button type="warning" size="large">确认支付</van-button>
      </van-popup>
      <van-checkbox v-model="checked">全选</van-checkbox>
      <!-- <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>-->
      <Settlement />
    </van-submit-bar>
    <Settlement />
  </div>
</template>
<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  data() {
    return {
      show: false,
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    open() {
      this.$router.replace("/Address");
      console.log(111);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>