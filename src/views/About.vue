<template>
  <div class="shuffling">
    <div class>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image,index) in images" :key="index">
          <img class="img1" v-lazy="images" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  mounted() {
    axios
      .get("api/getList")
      .then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.images = res.data;
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.shuffling {
  width: 100%;
  height: 200px;
}
.img1 {
  width: 100%;
  height: 160px;
  max-height: 100%;
  max-width: 100%;
}
</style>
