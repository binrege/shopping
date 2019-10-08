<template>
  <div class="voucher">
    <van-sticky>
      <div class="navigation">
        <van-nav-bar title="领卷中心" left-arrow @click-left="onClickcoupon">
          <van-icon name="share" slot="right" color="black"/>
          <van-icon name="more" slot="right" color="black" />
        </van-nav-bar>
      </div>
    </van-sticky>
    <div class="image">
      <img src="../assets/new.jpg" />
    </div>

    <div class="head">
      <div class="seckill">
        <van-icon name="location" slot="left" color="red" />神券秒杀
      </div>
      <div class="selected">精选</div>
      <div class="moba">母婴</div>
      <div class="nutrition">营养保健</div>
      <div class="pull">
        <van-icon name="arrow-down" />
      </div>
    </div>

    <div class="mainbody">
      <div>
        <div class="bodyone" v-for="(voucher,index) in vouchers" :key="index">
          <div class="bodyleft">
            <div class="bodyimg">
              <img :src="voucher.img" />
            </div>

            <div class="bodytxt">
              <div class="txtup">个护299-100卷</div>
              <div class="txtdown">
                <div class="txtpriceone">￥100</div>
                <div class="txtpricetwo">满299可用</div>
              </div>
            </div>

          </div>
          <div class="dotted"></div>
          <div class="bodyright">
            <div class="rightup">距开抢</div>
            <div class="Item">
              <van-count-down :time="time">
                <template v-slot="timeData">
                  <span class="item">{{ timeData.hours }}</span>
                  <span class="item">{{ timeData.minutes }}</span>
                  <span class="item">{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>

            <button class="rightdown" @click="onClickremind">提醒我</button>
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
      time: 30 * 60 * 1000,
      vouchers: []
    };
  },
  mounted() {
    axios
      .get("api/getList")
      .then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.vouchers = res.data;
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickcoupon(){
      this.$router.push("./CouPon");
    },
    onClickremind() {
      this.$toast("提醒成功");
    }
  }
};
</script>

<style lang="scss" scoped>
.voucher {
  background-color: #f2f2f2;
}

//图片框
.image {
  height: 130px;
  width: 100%;
}
//图片自适应大小
img {
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
//导航栏
.head {
  height: 40px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
}
//神券秒杀
.seckill {
  font-weight: 600;
  font-size: 14px;
  padding-top: 8px;
  color: red;
  flex: 0.9;
}
//精选
.selected {
  font-weight: 700;
  font-size: 14px;
  color: #949494;
  padding-top: 8px;
  padding-left: 15px;
  text-align: center;
  flex: 0.5;
}
//母婴
.moba {
  font-weight: 700;
  font-size: 14px;
  color: #949494;
  padding-left: 12px;
  padding-top: 8px;
  text-align: center;
  flex: 0.5;
}
//营养保健
.nutrition {
  font-weight: 700;
  font-size: 14px;
  color: #949494;
  margin-left: 6px;
  padding-top: 8px;
  text-align: center;
  flex: 1;
}
//下拉分类框（未完善）
.pull {
  font-weight: 700;
  font-size: 16px;
  color: #949494;
  margin-right: 6px;
  margin-top: 10px;
  text-align: end;
  flex: 1;
}
//领券外界框
.mainbody {
  height: 710px;
  width: 100%;
}
//领劵内框
.bodyone {
  border-radius: 8px;
  height: 100px;
  width: 95%;
  background-color: #ffffff;
  margin: 10px 10px 12px 10px;
  display: flex;
}
//优惠券左边
.bodyleft {
  height: 100%;
  width: 70%;
  display: flex;
}
//优惠券图片
.bodyimg {
  height: 70px;
  width: 70px;
  margin: 13px 15px 10px 10px;
}
//图片自动适应图片框大小
img {
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
//优惠券文本内容
.bodytxt {
  height: 80px;
  width: 120px;
  margin: 10px 30px 10px 0;
  font-size: 15px;
  display: flex;
  flex-direction: column;
}
//优惠券上方文本内容
.txtup {
  height: 20px;
  width: 100%;
  font-weight: 700;
  font-size: 12px;
}
//优惠券下方内容
.txtdown {
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 36px;
}
//优惠券左边价格
.txtpriceone {
  font-weight: 700;
  font-size: 16px;
  color: #e51c23;
}
//优惠券右边价格
.txtpricetwo {
  font-size: 9px;
  font-weight: 700;
  padding-left: 3px;
  padding-top: 4px;
  color: #e51c23;
}
//垂直虚线
.dotted {
  height: 100%;
  width: 0;
  border-right: rgb(153, 152, 152) 2px dotted;
}
//优惠券右边框
.bodyright {
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
}
//优惠券右上边文本内容
.rightup {
  height: 15px;
  width: 50%;
  font-weight: 600;
  font-size: 10px;
  text-align: center;
  color: red;
  margin-left: 25px;
  margin-top: 10px;
}
//倒计时框
.Item {
  height: 22px;
  width: 80%;
  text-align: center;
  margin-left: 8px;
  margin-top: 2px;
}
//倒计时
.item {
  display: inline-block;
  height: 20px;
  width: 20px;
  text-align: center;
  color: #fff;
  font-size: 10px;
  margin-right: 4px;
  background-color: #e51c23;
}
//优惠券右下按钮
.rightdown {
  border-radius: 50px;
  height: 25px;
  width: 80%;
  font-weight: 700;
  font-size: 10px;
  padding-top: 6px;
  margin-top: 6px;
  margin-left: 10px;
  color: #ffffff;
  background-color: #e51c23;
  border: 1px solid #e51c23;
}
</style>