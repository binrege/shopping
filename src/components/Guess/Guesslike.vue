<template>
  <div>
    <van-divider :style="{ color: 'black', borderColor:'gray', padding: '10px 30px'}">猜你喜欢</van-divider>
    <div class="guesslike">
      <div class="style" v-for="(good,index) in goods" :key="index">
        <div class="about">
          <div class="image">
            <img :src="good.image" />
          </div>

          <div class="describle">{{good.text}}</div>

          <div class="price">
            <div class="priceone">￥169</div>
            <div id="divider"></div>
            <div class="pricetwo">单件￥56.3</div>
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goods: []
    };
  },
  //模拟数据
  mounted() {
    axios
      .get("api/getList")
      .then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.goods = res.data;
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
//横向循环盒子
.guesslike {
  height: 220px;
  width: 90%;
}
//循环样式
.style {
  display: inline-block;
  margin: 0 auto;
  margin-top: 10px;
  margin-left: 35px;
}
.about {

  width: 130px;
}
//图片框大小设置
.image {
  height:60%;
  width: 60%;
  margin-left: 20%;
}
//图片自动适应图片框大小
img {
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
//商品描述框(描述框高度自适应（可以调整）)
.describle {
  height: auto;
  width: 100%;
  margin-top: 7px;
  border: 1px solid violet;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
}
//价格框
.price {
  height: auto;
  width: 85%;
  margin-top: 5px;
  // border: 1px solid orange;
  display: flex;
}
//总价框
.priceone {
  height: auto;
  width: 40%;
  font-weight: 700;
  font-size: 15px;
  color: red;
  padding-top: 2px;
  margin-left: 3px;
}
//单价框
.pricetwo {
  height: auto;
  width: 50%;
  font-size: 10px;
  text-align: left;
  padding-top: 7.5px;
  color: gray;
  padding-left: 2px;
}
//竖线
#divider {
  border-left: 1.5px solid grey;
  margin-top: 8px;
  height: 11px;
  margin-left: 5px;
}
//商品标签
.lable {
  height: 30px;
  width: 110%;
  display: flex;
  margin-top: 4px;
}
//标签1
.lableone {
  height: 16px;
  font-size: 12px;
  border-radius: 12%;
  border: 1px solid red;
  color: red;
  flex: 1;
}
//标签中文文本
.lableCh {
  padding-top: 2px;
  padding-left: 2px;
}
//标签2
.labletwo {
  height: 16px;
  font-size: 14px;
  border-radius: 10%;
  margin-left: 4px;
  font-weight: 700;
  color: white;
  border: 1.5px solid red;
  flex: 1;
}
//标签2中文文本
.lableCh1 {
  height: 14px;
  background-color: red;
  padding-bottom: 2px;
  padding-left: 2px;
}
//标签3
.lablethree {
  font-size: 12px;
  color: gray;
  flex: 2;
}
//标签3中文文本
.lableCh2 {
  padding-top: 1px;
  padding-left: 5px;
}
</style>