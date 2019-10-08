<template>
  <div class="about">
    <h1 >This is an about page</h1>
    <h class="about1">你好</h>
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
/>

  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.about{
  width: 300px;
  height: 200px;
  background: #666666;
}
.about1{
  font-size: 15px;
}
</style>
