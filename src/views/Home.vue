<template>
  <div>
    <search @homes="homes"> </search>

    <div class="home" v-model="showhome">

      <!-- {{user}} -->

      <div class="carousel">
        <div class="carousel1">
          <van-swipe :autoplay="3000" class="van">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <div class="carousel2">
                <img v-lazy="image" width="100%" />
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="classify">
        <!-- <div class="classify-1" v-for="(product,index) in products" :key="index"> -->
        <div class="classify-1" v-for="(classify,index) in classifys" :key="index">
          <div class="classify-1-1" :id="classify.classcid" @click="Gotclassify">
            <div class="classify-image"  >
              <img :src="classify.cimages"  class="img"/>
            </div>

            <div class="classify-text">
              {{classify.cname}}
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
          <div class="find">
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
        <van-tabs  >
          <van-tab title="全部"><Recommend /></van-tab>
          <van-tab title="外套"><Recommend /></van-tab>
          <van-tab title="秋装"><Recommend /></van-tab>
          <van-tab title="裤子"><Recommend /></van-tab>
          <van-tab title="连衣裙"><Recommend /></van-tab>
          <van-tab title="西装"><Recommend /></van-tab>
        </van-tabs>
        <!-- <van-tabs  swipeable>
          <van-tab v-for="(title, index) in titles" :key="index"  >
            <div slot="title">
              {{title}}
            </div>
           <Recommend />
          </van-tab>
        </van-tabs>-->
        <!-- <van-tabs swipeable>
          <van-tab v-for="(title, index) in titles" :key="index">
            <Recommend />
          </van-tab>
        </van-tabs>-->
        <!-- <div class="recommend-text">智能推荐</div>
        <div class="good"></div>-->
      </div>
    </div>
    <foot></foot>
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
  //1.引入子组件
  import foot from "../components/footer/Foot";
  import search from "../components/top/Search";
  export default {
    name: "home",
    data() {
      return {
        showhome:true,
        user: [
          {
            id:"",
            username: "",
            password: "",
            index: []
          }
        ],
        classifys: [],
        // imgs: [
        //   {
        //     url: require('../assets/classify/banshenqun.svg')
        //   },
        //   {
        //     url: require('../assets/classify/changku.svg')
        //   },
        //   {
        //     url: require('../assets/classify/chenshan.svg')
        //   },
        //   {
        //     url: require('../assets/classify/fengyi.svg')
        //   },
        //   {
        //     url: require('../assets/classify/lianyiqun.svg')
        //   },
        //   {
        //     url: require('../assets/classify/maoyi.svg')
        //   },
        //   {
        //     url: require('../assets/classify/niuzaiku.svg')
        //   },
        //   {
        //     url: require('../assets/classify/qipao.svg')
        //   }
        // ],
        images: [
          "https://img10.360buyimg.com/da/jfs/t1/65085/10/12471/98315/5d9ff835E20a9f27c/833d3164a618a0e8.jpg",
          "https://img11.360buyimg.com/da/jfs/t1/39081/22/12393/126937/5d37b4b8E52d6ce7c/dcbe17e4d5047824.jpg",
          "https://img14.360buyimg.com/da/jfs/t1/59402/20/5415/153057/5d37b3f4E565eee1d/b3818446414de902.jpg",
          "https://img20.360buyimg.com/da/jfs/t1/55222/25/13370/79083/5da177c9Ec1cd8865/04dc4e350a2c3b2e.jpg",
          "https://img11.360buyimg.com/da/jfs/t1/68986/16/12883/76884/5da17622E6bc485ae/f05b64eb6ada9775.jpg",
          "https://img20.360buyimg.com/da/jfs/t1/44586/14/13928/100714/5da17ff0E64c2a126/703dc217cef43e05.jpg"
        ],
        titles: ["全部", "外套", "秋装", "裤子", "连衣裙", "西装", "鞋子"]
      };
    },
    components: {
      TimeActivities,
      Find,
      Special,
      New,
      Recommend,
      foot,
      search
    },
    mounted() {
      console.log(localStorage.loginMsg);
      // if(localStorage.loginMsg)
      this.user = JSON.parse(localStorage.getItem("loginMsg"));
      console.log("000000" + this.user);
      axios
              .get("api/classify/classifyinfo")
              .then(response => {
                let res = response.data;
                res.map(item => {
                  // item.cimages = require(item.cimages)
                  // console.log(item.cimages)
                })
                this.classifys = res;
                if (res.code === 200) {
                  this.classifys = res;
                }
                console.log( this.classifys);
              })
              .catch(err => {
                console.log(err);
              });
    },
    methods: {
      Gotclassify(){

      }
      // active1() {},
    }
  };

</script>
<style scoped>
  .carousel {
    width: 100%;
  }
  .carousel2 {
    width: 100%;
    height: 150px;

  }

  .classify {
    background-color: rgb(245, 247, 248);
    margin: 0 auto;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;

    height: auto;
  }
  .classify-1 {
    display: inline-block;
    margin: 0 auto;
    margin-left: 12px;
    padding: 9px;
    padding-top: 20px;
  }

  .classify-1-1 {
    width: 40px;
  }
  .classify-image {
    display: flex;
    justify-content: center;
  }
  .img{
    width: 100%;
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
  .find {
    /* background-color: rgb(160, 179, 179); */
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
    margin-top: 20px;
    width: 97.5%;
    height: 1000px;
  }
  .recommend-text {
    font-size: 20px;
    font-family: inherit;
    font-weight: 600;
    color: rgb(223, 51, 85);
  }
</style>
