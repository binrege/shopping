<template>
  <div>
    <van-card
      num="1"
      price="49.00"
      desc="·········"
      title="短袖"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-stepper v-model="num" min="1" max="999" @change="onChange" />
        <van-cell is-link arrow-direction="down" @click="showPopup">账单详情:{{sun}}</van-cell>
        <van-popup v-model="show" closeable position="bottom" :style="{ height: '70%' }"></van-popup>
      </div>
    </van-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      //价格
      price: 49,
      //弹窗
      show: false,
      //数量
      num: 1
    };
  },

  methods: {
    //打开弹窗
    showPopup() {
      this.show = true;
    },
    //给totalPrice赋值
    onChange(num) {
      // this.$store.state.totalPrice = this.sun
      this.$emit('childClose',this.sun);
      this.$emit('childClose1',this.sun);
    },
  },
  computed: {
    //计算总价
    sun () {
      return this.price * this.num
    }
  }
};
</script>

<style lang="scss" scoped>
</style>