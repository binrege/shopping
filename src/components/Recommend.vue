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
          <div class="origin-price">￥{{discount.going_price*1.1 | toFixed(0)}}</div>
          <div class="sales">{{discount.number}}人付款</div>
        </div>
        <div class="lable">
          <div class="lableone">
            <div class="lableCh">自营</div>
          </div>
          <div class="labletwo">
            <div class="lableCh1">特价</div>
          </div>
          <div class="lablethree">
            <div class="lableCh2">97.8%好评</div>
          </div>
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
  filters: {
    toFixed(input, param1) {
      // 保留小数点后多少位
      return "￥" + input.toFixed(param1);
    }
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
.img_good {
  border-radius: 12px 12px 0px 0px;
}
.below-title {
  margin: 6px 10px;
}
.price {
  display: flex;
  
  margin: 10px 0;
}
.going-price {
  font-size: 18px;
  color: rgb(255, 4, 4);
}
.origin-price {
  font-size: 1px;
  color: rgb(160, 158, 158);
  padding-left: 5px;
  padding-top: 8px;
  text-decoration: line-through;
}
.sales{
  font-size: 3px;
  color: rgb(160, 158, 158);
  padding-top: 6px;
  padding-left: 20px;
}
/* //商品标签 */
.lable {
  height: 30px;
  width: 110%;
  display: flex;
  margin-top: 4px;
}
/* //标签1 */
.lableone {
  height: 20px;
  margin-left: 5px;
  font-size: 12px;
  border-radius: 12%;
  border: 1px solid red;
  color: red;
  flex: 0.6;
}
/* //标签中文文本 */
.lableCh {
  padding-top: 1px;
  padding-left: 2px;
}
/* //标签2 */
.labletwo {
  height: 20px;
  font-size: 14px;
  border-radius: 10%;
  margin-left: 4px;
  font-weight: 700;
  color: white;
  border: 1.5px solid red;
  flex: 1;
}
/* //标签2中文文本 */
.lableCh1 {
  height: 20px;
  background-color: red;
  padding-bottom: 2px;
  padding-left: 2px;
}
/* //标签3 */
.lablethree {
  font-size: 12px;
  color: gray;
  flex: 2;
}
/* //标签3中文文本 */
.lableCh2 {
  padding-top: 1px;
  padding-left: 5px;
}
</style>
</style>