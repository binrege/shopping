<template>
  <div>
    <div>
      <van-nav-bar
        title="我的订单"
        left-text="返回"
        right-text="搜索"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <van-divider :style="{ color: '#141212', borderColor: '#141212', padding: '0 5px' }"></van-divider>
    <van-tabs v-model="active" :swipe-threshold=5  @disabled="onClickDisabled">
      <van-tab title="全部">
        <!-- 全部（即包括待付款，待发货，待收货） -->
        <div class="payment">
          <Payment/>
        </div>
        <div class="goods">
          <Goods/>
        </div>
        <div class="evaluation">
          <Evaluation/>
        </div>
        <div class="guesslike"><Guesslike msg /></div>
      </van-tab>
      <van-tab title="待付款">
        <div class="payment">
          <Payment/>
        </div>
       <Guesslike msg />
      </van-tab>
      <van-tab title="待发货">
        <div class="goods">
          <Goods/>
        </div>
        <Guesslike msg />
      </van-tab>
      <van-tab title="待收货">
        <div class="evaluation">
          <Evaluation/>
        </div>
        <Guesslike msg />
      </van-tab>
      <van-tab title="评价" disabled>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Payment from '@/components/personal/Payment.vue'
import Goods from '@/components/personal/Goods.vue'
import Evaluation from '@/components/personal/Evaluation.vue'
import Guesslike from '../../components/Guess/Guesslike'
import axios from "axios";
export default {
  name:'payment',
  name:'goods',
  name:'evaluation',
  components:{
    Payment,
    Goods,
    Evaluation,
    Guesslike
  },
  data() {
    return {
      active:0,
        
    };
  },
  mounted(){
    this.active = this.$route.query.Active;

    // this.active=JSON.parse(localStorage.getItem("accessActive"));
    // console.log(this.active);


  },
  methods: {
    onClickLeft() {
      this.$router.push("./Personal")
    },
    onClickRight() {
      this.$toast("亲，还没做出来哦");
    },
    onClickDisabled(name, title) {
      this.$toast(title + '区，还在开发');
    }

  }
};
</script>

<style  scoped>
.guesslike{

}
</style>