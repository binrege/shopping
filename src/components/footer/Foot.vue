
<template>
  <div class="main">
    <div>
      <van-tabbar v-model="active" active-color="#E90028" inactive-color="#000" size="30px">
        <van-tabbar-item size="30px" icon="home-o" @click="clickHome">首页</van-tabbar-item>
        <van-tabbar-item icon="search" @click="clickSearch">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" @click="clickShopping">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o" @click="clickPersonal">个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      active:0 ,
    };
  },

  methods: {
    clickHome() {
      active:0;
      this.$router.push("/");
      
    },
    clickSearch() {
      active:1;
      this.$router.push("../Classify");
    },
    clickShopping() {
      active:2;
      this.$router.push("Shopping");
    },
    clickPersonal() {
      active:3;
      this.$router.push("../Personal");
    }
  }
};
</script>

<style  scoped>
</style>