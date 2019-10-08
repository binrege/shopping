
<template>
  <div class="main">
    <div>
      <van-tabbar v-model="active"
        active-color="#E90028"
        inactive-color="#000" size="30px">
        <van-tabbar-item size="30px" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o">个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      active: 0,
    
    };
  },

  methods: {
    
  }
};
</script>

<style  scoped>

</style>