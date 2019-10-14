<template>
  <div id="app">
    <div>
      <div>
        <van-checkbox v-model="checked1" @click="clc1" />
        <Commodity @childClose="childClose" />
      </div>
      <div>
        <van-checkbox v-model="checked2" @click="clc2" />
        <Commodity @childClose1="childClose1" />
      </div>

      <Settlement />
    </div>
    <div>
      <SubmitBar @childFn="qx">{{totalPrice}}</SubmitBar>
    </div>
  </div>
</template>

<script>
import SubmitBar from "@/components/shopping trolley/SubmitBar.vue";
import Commodity from "@/components/shopping trolley/Commodity.vue";
import Settlement from "@/components/shopping trolley/Settlement.vue";
import foot from "../components/footer/Foot";
export default {
  name: "app",
  data() {
    return {
      //商品总和
      sum: 49,
      sum1: 49,
      checked1: true,
      checked2: true,
      quanxuan: " ",
      csum:0,
      csum1:0,
    };
  },
  components: {
    //子组件的引用
    SubmitBar,
    Commodity,
    Settlement,
    foot
  },
  methods: {
    clc1() {
      if (this.checked1 === true) this.sum = 0;
      else this.sum = this.csum;
    },
    clc2() {
      if (this.checked2 === true) this.sum1 = 0;
      else this.sum1 = this.csum1;
    },
    childClose(data) {
      // childValue就是子组件传过来的值
      this.csum = data;
      this.sum = data;
      console.log(data);
    },
    childClose1(data) {
      // childValue就是子组件传过来的值
      this.csum1 = data;
      this.sum1 = data;
      console.log(data);
    },
    qx(data) {
      if (data === true) data = false;
      else data = true;
      this.checked1 = data;
      this.checked2 = data;
      this.quanxuan = data;
    }
  },
  computed: {
    //未优惠总价
    totalPrice() {
      return (this.$store.state.totalPrice = this.zong);
    },
    zong() {
      return this.sum + this.sum1;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>