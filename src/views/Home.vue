<template>
  <div class="home">
    {{user}}
    
    <div class="carousel">
      <div class="carousel1">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" height="200px" width="100%" class="carousel2" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="classify">
      <!-- <div class="classify-1" v-for="(product,index) in products" :key="index"> -->
      <div class="classify-1" v-for="(classify,index) in classifys" :key="index">
        <img :src="classify.image" title="classify.image" class="image1" />

        <div>
          {{classify.name}}
          
          <!-- {{product.productPrice}} -->
        </div>
      </div>

      <div class="classify-2">
        <img alt="imge" src="../assets/shangyi-Txu.svg" class="imge" />

        <div>
          上衣
          <!-- {{product.productPrice}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  data() {
    return {
      user:  [
        {
          username: "",
          password: ""
        }
      ],
      classifys: [],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  mounted() {
    console.log(localStorage.loginMsg);
   // if(localStorage.loginMsg)
    this.user=JSON.parse(localStorage.getItem("loginMsg"));
    console.log("000000" +this.user);
    axios
      .get("api/getList")
      .then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.classifys = res.data;
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
.carousel {
  margin: 0 auto;
  padding: 50px;
  width: 100%;
}
.classify {
  margin: 0 auto;
  padding-top: 30px;
  width: 90%;
  height: auto;
}
.classify-1 {
  display: inline-block;
  padding-right: 30px;
  padding-top: 20px;
}
.classify-2 {
  display: inline-block;
}
</style>
