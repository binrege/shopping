<template>
  <div class="home">
    
    {{user}}
    <div class="carousel">
      <div class="carousel1">
        <van-swipe :autoplay="3000" class="van">
          <van-swipe-item v-for="(classify,index) in classifys" :key="index">
            <div class="carousel2">
              <img v-lazy="classify.images" width="100%"/>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="classify">
      <!-- <div class="classify-1" v-for="(product,index) in products" :key="index"> -->
      <div class="classify-1" v-for="(classify,index) in classifys" :key="index">
        <div class="classify-1-1">
          <div class="classify-image">
            <img :src="classify.image" title="classify.image" />
          </div>

          <div class="classify-text">
            {{classify.name}}
            <!-- {{product.productPrice}} -->
          </div>
        </div>
      </div>
    </div>
    <div class="activity">
      <div class="activity-1">
        <div class="time">
          <TimeActivities />
        </div>
       

        <div class="split">
        
        </div>
        <div class="recommend"></div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TimeActivities from '@/components/activity/TimeActivities.vue';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      user: [
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
  components: {
    TimeActivities,
    
  },
  mounted() {
    console.log(localStorage.loginMsg);
    // if(localStorage.loginMsg)
    this.user = JSON.parse(localStorage.getItem("loginMsg"));
    console.log("000000" + this.user);
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
/* .carousel {
  width: 100%;
} */
.carousel2 {
  width: 100%;
  height: 150px;
  padding-top: 0;
}



.classify {
  background-color: rgb(245, 247, 248);
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  
  height: auto;
}
.classify-1 {
  display: inline-block;
  margin: 0 auto;
  padding: 9px;
  padding-top: 20px;
}

.classify-1-1 {
  width: 56.3px;
}
.classify-image {
  display: flex;
  justify-content: center;
}
.classify-text {
  text-align: center;
}
.activity {
  margin: 0 auto;
  background-color: rgb(241, 245, 250);
  margin-top: 20px;
  width: 95%;
  height: 300px;
  border-radius: 12px;
}
.activity-1 {
  display: flex;
  background-color: rgb(218, 228, 228);
  height: 130px;
}
.time {
  background-color: aqua;
  width: 300px;
  padding-right: 10px;
}
.split {
  margin: 0 auto;
  /* background-color: rgb(170, 192, 192); */
  width: 20px;
  
}
.recommend {
  background-color: rgb(96, 105, 105);
  padding-left: 10px;
  width: 300px;
}
</style>
