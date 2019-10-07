<template>
  <div class="recommend">
    <div class="below">
      <div class="below-div" v-for="(discount,index) in discounts" :key="index">
        <div class="below-img">
          <img :src="discount.image_good" class="img_good" />
        </div>
        <div class="below-title">{{discount.title}}</div>
        <div class="price">
          <div class="going-price">￥{{discount.going_price}}</div>
          <div class="origin-price">￥{{discount.origin_price}}</div>
        </div>
      </div>
    </div>aa
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Recommend",

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
.below {
  float: left;
  margin: 0 auto;
  width: 100%;
  height: auto;
  overflow: auto;
}
.below-div {
  margin-right: 2px;
  margin-left: 5px;
  margin-top: 20px;
  float: left;
  width: 170px;
  border-radius: 12px;
  background-color: rgba(239, 245, 245, 0.993);
}

.below-img {
  display: flex;
  justify-content: center;
  /* width: 160px;
  height: 160px;
  border-radius: 12px 12px 0px 0px; */
}
.img_good{
  border-radius: 12px 12px 0px 0px;   
}
.below-title{
    margin:6px 10px;
}
.price {

  display: flex;
  justify-content: center;
  margin: 10px 0
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
</style>