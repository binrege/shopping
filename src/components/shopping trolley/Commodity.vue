<template>
  <div>
    <div v-for="(item,index) in cc" :key="index">
      <van-checkbox v-model="item.cchecked" @click="clc1" />
      <van-card thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="tags">
          商品名:{{item.cname}}
          <br />
          商品数量:{{item.cnum}}
          <br />
          价格:{{item.cprice}}
          <br />
          描述:{{item.cdesc}}
          <br />
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
          <van-stepper v-model="item.num" min="1" max="999" @change="onChange" />
          <button @click="deletcom">删除</button>
          <van-cell>账单详情:{{item.cprice * item.num}}{{item.csum}}</van-cell>
        </div>
      </van-card>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cc: [
        {
          cid: "",
          cname: "好东西1",
          cnum: 1,
          cprice: 99,
          cdesc: "真是好东西1",
          cchecked: true,
          num: 1,
          csum: ""
        },
        {
          cid: "",
          cname: "好东西2",
          cnum: 1,
          cprice: 199,
          cdesc: "真是好东西2",
          cchecked: true,
          num: 1,
          csum: ""
        }
      ],
      //价格
      price: 49,
      //数量
      num: 1
    };
  },

  methods: {
    deletcom() {},
    clc1() {
      if (this.checked === false) this.sum = 0;
      else this.sum = this.csum;
    },
    //给totalPrice赋值
    onChange(num) {
      // this.$store.state.totalPrice = this.sun
      this.$emit("childClose", this.sun);
    }
  },
  computed: {
    // 计算总价
    // sun() {
    //   return index.cprice * index.num;
    // }
    // csum(){
    //   return cc.cprice * cc.num;
    // }
  }
};
</script>

<style lang="scss" scoped>
</style>