<template>
  <div>
    <van-submit-bar :price="totalPrice*100" button-text="提交订单" @submit="showPopup">
      <van-popup v-model="show" closeable position="bottom" :style="{ height: '70%' }">
        <br />
        <br />
        <van-cell title="请选择地址" is-link arrow-direction="down" value="默认地址" @click="open">
          <van-icon name="location" />
        </van-cell>
        <van-cell title="配送方式" is-link arrow-direction="down" value />
        <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
        <van-popup v-model="showList" position="bottom" :style="{ height: '100%' }">
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
        <van-cell title="总价:" is-link value>{{totalPrice-discount/100}}</van-cell>
        <van-button type="warning" size="large">确认支付</van-button>
      </van-popup>
      <van-checkbox v-model="checked">全选</van-checkbox>
      <Settlement />
    </van-submit-bar>
    <Settlement />
  </div>
</template>
<script>
import Settlement from "./Settlement";
//优惠券列表
const coupon0 = {
  available: 1,
  condition: "满50元可用\n最多优惠22元",
  reason: "",
  value: 2000,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "20.0",
  unitDesc: "元"
};
const coupon1 = {
  available: 1,
  condition: "无使用门槛\n最多优惠5元",
  reason: "",
  value: 200,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "2.0",
  unitDesc: "元"
};
const dcoupon = {
  available: 1,
  condition: "使用门槛:满5元可用\n最多优惠19元",
  reason: "",
  value: 1000,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "10.0",
  unitDesc: "元"
};
const disabledCoupons = {
  available: 1,
  condition: "无使用门槛\n最多优惠999元",
  reason: "",
  value: 200000,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "2000.0",
  unitDesc: "元"
};
export default {
  data() {
    return {
      //控制提交订单弹窗
      show: false,
      //控制优惠券弹窗
      showList: false,
      //优惠券索引
      chosenCoupon: -1,
      //可用优惠券列表
      coupons: [coupon0, coupon1],
      //不可用优惠券列表
      disabledCoupons: [disabledCoupons],
      //订单全选框
      checked: false,
      //优惠金额
      discount: 0
    };
  },
  components: {
    //引用子组件
    Settlement
  },
  methods: {
    //提交订单弹窗
    showPopup() {
      this.show = true;
    },
    //选择优惠券，赋值优惠金额
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      if (index === 0) this.discount = coupon0.value;
      if (index === 1) this.discount = coupon1.value;
      if (index === 2) this.discount = dcoupon.value;
    },
    //兑换优惠券
    onExchange(code) {
      this.coupons.push(dcoupon);
    },
    //跳转地址栏
    open() {
      this.$router.replace("/Address");
    }
  },
  computed: {
    //未优惠时总结
    totalPrice() {
      return this.$store.state.totalPrice;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>