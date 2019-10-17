<template>
  <div>
    <p :class="{red: !isshow,blue: isshow}" @click="isshow=!isshow">我爱云虹</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: true
    };
  }
};
</script>

<style scoped>
.red {
  color: red;

  font-size: 14px;
}

.blue {
  color: blue;

  font-size: 20px;
}
</style>