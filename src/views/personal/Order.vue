<template>
  <div>
    <div>
      <van-nav-bar
        title="我的订单"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <van-divider :style="{ color: '#141212', borderColor: '#141212', padding: '0 5px' }"></van-divider>
    <van-tabs v-model="active" :swipe-threshold=5>
      <van-tab title="全部">内容 1</van-tab>
      <van-tab title="待付款">
        <div class="payment">
          <Payment/>
        </div>
      </van-tab>
      <van-tab title="待发货">内容 3</van-tab>
      <van-tab title="待收获">内容 4</van-tab>
      <van-tab title="评价">内容 5</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Payment from '@/components/personal/Payment.vue'
export default {
  name:'payment',
  components:{
    Payment,
  },
  data() {
    return {
        active:1,
        
    };
  },
  methods: {
    onClickLeft() {
      this.$toast("返回");
    },
    onClickRight() {
      this.$toast("按钮");
    }
  }
};
</script>

<style  scoped>

</style>