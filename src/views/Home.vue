<template>
  <div class="home">
    {{ user }}
    <div class="carousel">
      <div class="carousel1">
        <van-swipe :autoplay="3000" class="van">
          <van-swipe-item v-for="(classify, index) in classifys" :key="index">
            <div class="carousel2">
              <img v-lazy="classify.images" width="100%" />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="classify">
      <!-- <div class="classify-1" v-for="(product,index) in products" :key="index"> -->
      <div
        class="classify-1"
        v-for="(classify, index) in classifys"
        :key="index"
      >
        <div class="classify-1-1">
          <div class="classify-image">
            <img :src="classify.image" title="classify.image" />
          </div>

          <div class="classify-text">
            {{ classify.name }}
            <!-- {{product.productPrice}} -->
          </div>
        </div>
      </div>
    </div>
    <div class="activity">
      <!-- 上层活动 -->
      <div class="activity-top">
        <div class="time">
          <TimeActivities />
        </div>

        <div class="split">
          <div class="split1"></div>
        </div>
        <div class="recommend">
          <Find />
        </div>
      </div>
      <!-- 下层活动 -->
      <div class="activity-bottom">
        <div class="special">
          <Special />
        </div>

        <div class="split">
          <div class="split1"></div>
        </div>
        <div class="new">
          <New />
        </div>
      </div>
    </div>
    <div class="recommend">
      <!-- <van-tabs v-model="active" swipeable>
         <van-tab v-for="index in 8" :title="'标签 ' + index">内容 {{ index }}</van-tab>
      </van-tabs> -->
      <div class="recommend-text">智能推荐</div>
      <div class="good">
        <Recommend />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TimeActivities from "@/components/activity/TimeActivities.vue";
import Find from "@/components/activity/Find.vue";
import Special from "@/components/activity/Special.vue";
import New from "@/components/activity/New.vue";
import Recommend from "@/components/Recommend.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  data() {
    return {
      user: [
        {
          username: "",
          password: "",
          index: []
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
    Find,
    Special,
    New,
    Recommend
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
  color: rgb(83, 100, 117);
  font-size: 11px;
}
.activity {
  margin: 0 auto;
  background-color: rgb(241, 245, 250);
  margin-top: 20px;
  width: 95%;
  height: 300px;
  border-radius: 12px;
}
.activity-top {
  display: flex;

  height: 150px;
}
.time {
  /* background-color: aqua; */
  width: 340px;
}
.split {
  margin: 0 auto;
  /* background-color: rgb(170, 192, 192); */
  width: 15px;
  padding: 11% 0;
}
.split1 {
  margin: 0 auto;
  height: 100%;
  width: 0;
  border-right: rgb(139, 148, 125) 2px solid;
  padding: 8% 0;
}
.recommend {
  /* background-color: rgb(96, 105, 105); */
  width: 300px;
}
.activity-bottom {
  display: flex;
  background-color: rgb(234, 255, 255);
  height: 150px;
  border-radius: 0px 0px 12px 12px;
}
.special {
  /* background-color: rgb(203, 248, 248); */
  width: 300px;
}
.new {
  /* background-color: rgb(160, 179, 179); */
  width: 300px;
}
.recommend {
  margin: 0 auto;
  width: 98%;
  height: auto;
}
.recommend-text {
  font-size: 20px;
  font-family: inherit;
  font-weight: 600;
  color: rgb(223, 51, 85);
}
</style>
