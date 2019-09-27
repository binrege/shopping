<template>
  <div>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-stepper v-model="value" min="1" max="999" />
        <van-cell is-link arrow-direction="down" @click="showPopup">账单详情</van-cell>
        <van-popup v-model="show" closeable position="bottom" :style="{ height: '70%' }" />
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>