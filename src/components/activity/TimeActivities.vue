<template>
  <div>
    <div class="top">
      <div class="title">限时活动</div>
      <div class="Time">{{time2}}</div>
      <div class="countdown">
        <van-count-down :time="time" />
      </div>
    </div>
    <div class="below">
      <div class="below-div" v-for="(discount,index) in discounts" :key="index">
        <div class="below-img">
          <img :src="discount.imagediscounts" />
        </div>
        <div class="price">
          <div class="going-price">￥{{discount.going_price}}</div>
          <div class="origin-price">￥{{discount.origin_price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TimeActivities",
  data() {
    return {
      discounts: [],
      time2: "",
      time: 60 * 60 * 1000
    };
  },
  mounted() {
    //获取当地时间
    let times = Date.now();
    let time1 = this.$dayjs(times).format("YYYY年MM月DD日 hh时mm分ss秒");
    this.time2 = this.$dayjs(times).format("hh时");
    console.log(time1);
    axios
      .get("api/getList")
      .then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.discounts = res.data;
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
.top {
  margin-top: 13px;
  margin-left: 5px;
  display: flex;
}

.title{
  font-size: 17px;  
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight:600;
}
.Time {
  padding-left: 3px;
  margin-top: 4px;
}
.countdown {
  padding-left: 3px;
  margin-top: 4px;
}
.below {
  float: left;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  overflow: auto;
  
  padding-left:2px;
}
.below-div {
  margin-left: 7px;
  
  float: left;
  padding-top: 5px;
  width: 75px;
  
}

.below-img {
  display: flex;
  justify-content: center;
}
.price {
  padding-top: 7px;
  display: flex;
  justify-content: center;
}
.going-price {
  font-size: 15px;
  color: rgb(255, 4, 4);
}
.origin-price {
  font-size: 1px;
  color: rgb(160, 158, 158);
  padding-left: 5px;
  padding-top: 6px;
  text-decoration: line-through;
}
</style>