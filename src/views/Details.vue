
<template>
  <div class="details">
    <!-- 顶部导航按钮 -->
    <div class="return1">
      <van-nav-bar
        left-text="返回"
        right-text="设置"
        fixed
        left-arrow
        @click-left="Return"
        @click-right="onClickRight"
        class="back"
      />
    </div>
    <!-- 轮播图 -->
    <div class="carousel">
      <div class="carousel1">
        <van-swipe :autoplay="3000" class="van">
          <van-swipe-item v-for="(classify,index) in classifys" :key="index">
            <div class="carousel2">
              <img v-lazy="classify.image_good" width="100%" />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="explain">
      <div class="price">
        <div class="going">￥</div>
        <div class="going-price">1000</div>
        <div class="origin-price">{{1000*1.1 | toFixed(0)}}</div>

        <div class="labletwo">
          <div class="lableCh1">特价</div>
        </div>
      </div>
      <div class="below">
        <div class="lableone">
          <div class="lableCh">自营</div>
        </div>
        <div class="below-title">宝明 夹克男2019秋季新款外套</div>
      </div>
      <!-- 详细说明 -->
      <!-- style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:360px" -->
      <div class="text">详细说明：宝明 夹克男2019秋季新款外套男士连帽韩版潮流帅气上衣服休闲ins工装潮牌男装 ZCL215米色 XL</div>
    </div>

    <div class="freight">
      <div>发货</div>
      <div class="freight-img">
        <img src="../assets/classfy.svg" />
      </div>
      <div class="city">上海</div>
      <div class="divider"></div>
      <div class="express">快递费:</div>
      <div class="express-number">0.00</div>
      <div class="sales">{{30000}}人付款</div>
      <!-- <div>运费</div>
      <div class="freight1">免运费</div>-->
      <!-- <van-cell is-link @click="showPopupyoufei">
        <div class="youfei">
          <div>邮费</div>
          <div class="freight1">免邮</div>
        </div>
      </van-cell>
      <van-popup
        v-model="showyoufei"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '20%' }"
      >-->
      <!-- 邮费单选框 -->
      <!-- <van-radio-group v-model="radio" class="choice">
          <van-cell-group>
            <van-cell title="免邮" clickable @click="radio = '1'" class="choice-text">
              <van-radio slot="right-icon" name="1" />
            </van-cell>
            <van-cell title="邮费：10元" clickable @click="radio = '2'">
              <van-radio slot="right-icon" name="2" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </van-popup>-->
    </div>
    <!-- 具体参数 -->
    <div class="choose">
      <van-cell is-link @click="showPopup">参数</van-cell>
      <van-popup v-model="show" round position="bottom" :style="{ height: '55%' }">
        <div>
          <div class="parameter-top">具体参数</div>
          <div style="margin-top: 65px;">
            <div class="parameter-brand">
              <div class="parameter-title">品牌</div>
              <div class="parameter-text">唐狮</div>
            </div>
            <van-divider class="cut" />
            <div class="parameter-brand">
              <div class="parameter-title">适用年龄</div>
              <div class="parameter-text">18-24岁</div>
            </div>
            <van-divider class="cut" />
            <div class="parameter-brand">
              <div class="parameter-title">领子</div>
              <div class="parameter-text">连帽</div>
            </div>
            <van-divider class="cut" />
            <div class="parameter-brand">
              <div class="parameter-title">面料材质</div>
              <div class="parameter-text">棉</div>
            </div>
            <van-divider class="cut" />
            <div class="parameter-brand">
              <div class="parameter-title">组合形式</div>
              <div class="parameter-text">单件</div>
            </div>
            <van-divider class="cut" />
            <div class="parameter-brand">
              <div class="parameter-title">厚薄</div>
              <div class="parameter-text">常规</div>
            </div>
            <van-divider class="cut" />
            <div class="parameter-brand">
              <div class="parameter-title">通勤</div>
              <div class="parameter-text">韩版</div>
            </div>
            <van-divider class="cut" />
            <div class="parameter-brand">
              <div class="parameter-title">服装版型</div>
              <div class="parameter-text">宽松</div>
            </div>
            <van-divider class="cut" />
          </div>
          <div class="parameter-bottom">
            <div class="complete" @click="complete">
              <div class="complete-text">完成</div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="size">
      <van-cell is-link @click="showPopupSize">尺码介绍</van-cell>
      <van-popup v-model="showsize" position="right" :style="{ height: '100%',width:'100%' }">
        <div>
          <div>
            <van-nav-bar title="尺码介绍" left-text="返回" left-arrow @click-left="onClickLeft" />
          </div>
          <div class="size-img" width="100%">
            <img src="./../assets/size.jpg" width="100%" />
          </div>
        </div>
      </van-popup>
    </div>

    <div class="introduce">
      <van-divider>商品介绍</van-divider>
      <div class="introduce-img">
        <img src="./../assets/xiangqing.jpg" width="100%" />
      </div>
    </div>

    <div>
      <Select />
    </div>

    <div class="buttom">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>

    <div>
      <van-popup v-model="showchoice" position="bottom" :style="{ height: '72%' }"  round>
        <!-- /* 选择规格 */ -->
        <div class="shop">
          <div class="shop-top">
            <div class="shop-left">
              <img
              class="shop-img"
                src="https://img14.360buyimg.com/n0/jfs/t1/51191/32/9505/160209/5d6d07d9E1f0c88b5/61ed5bbbb3792ae5.jpg"
                width="100%"
              />
            </div>
            <div class="shop-right">
              <div class="shop-price">
                <div class="shop-pricetitle">￥</div>
                <div class="shop-pricenumber">1000</div>
              </div>
              <div class="shop-amount">库存：</div>
              <div class="shop-title">请选择颜色，尺寸</div>
            </div>
          </div>

          <div class="choice-color">
            <div class="color-title">颜色</div>

            <div
              :class="{red: !isshow,blue: isshow}"
              @click="dianji"
              v-for="(colorname,index) in colorname"
              :key="index"
            >{{colorname}}</div>
          </div>

          <div class="choice-size">
            <div class="size-title">尺码</div>
            <div
              :class="{nosize: !isshows,yessize: isshows}"
              @click="go_sice"
              v-for="(sizename,index) in sizename"
              :key="index"
            >{{sizename}}</div>
          </div>
          <!-- 选择地址 -->
          <div class="address">
            <div class="address_left">
              <div class="address_top" v-for="(list,index) in list"
              :key="index">
                <div class="address_name">{{list.name}},</div>
                <div class="address_tel">{{list.tel}}</div>
              </div>
              <div class="address_">{{add}}</div>
            </div>
            <div class="address_right" @click="right_address">
              <img src="../assets/go.svg" class="right_icon">
              
            </div>
          </div>

          <!-- stepper步进行器 -->
          <div class="shop-ampunt">
            <div class="amount-title">购买数量</div>
            <div class="amount-title1">（限购5件）</div>
            <div class="amount-add">
              <van-stepper
                v-model="amount"
                integer
                min="1"
                max="5"
                async-change
                @change="amount_onChange"
              />
            </div>
          </div>
          <div class="parameter1-bottom">
            <div class="complete1" @click="sure">
              <div class="complete1-text">确定</div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
// import Check from "@/components/check/Check.vue";
// import Size from "@/components/check/Size.vue";
// import Select from "@/components/check/Select.vue";
import axios from "axios";
export default {
  name: "Details",
  data() {
    return {
      
      buy:this.$route.query.buy,
      app:this.$route.query.add,
      showchoice:this.$route.query.showchoice,
      add: this.$route.query.add,
      isshows: true,
      isshow: true,
      amount: "1",
      radio: "1",
      fixed: true,
      show: false,
      show1: false,
      showsize: false,
      
      showyoufei: false,
      
      classifys: [],
      colorname: ["白色", "黄色", "蓝色", "绿色"],
      sizename: ["27", "28", "29", "30"],
      time2: "",
      time: 60 * 60 * 1000,
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
      ],
    };
  },
  components: {
    // Check,
    // Size,
    // Select
  },
  filters: {
    toFixed(input, param1) {
      // 保留小数点后多少位
      return "￥" + input.toFixed(param1);
    }
  },
  mounted() {
    axios
      .get("api/getListL")
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
  },

  methods: {
    dianji(obj) {
      if (obj.target.className == "red") obj.target.className = "blue";
      else {
        let divs = obj.target.parentElement.getElementsByTagName("div");
        for (var i = 1; i < divs.length; i++) {
          divs[i].className = "blue";
        }
        obj.target.className = "red";
      }

      // obj.className="red";
      // console.log(obj);
    },
    go_sice(obj) {
      if (obj.target.className == "nosize") obj.target.className = "yessize";
      else {
        let divs = obj.target.parentElement.getElementsByTagName("div");
        for (var i = 1; i < divs.length; i++) {
          divs[i].className = "yessize";
        }
        obj.target.className = "nosize";
      }
    },
    amount_onChange() {
      if (this.amount <= 1) {
        this.$toast("最少选择购买一件");
      } else if (this.amount >= 5) {
        this.$toast("每人限购5件哟");
      }
    },
    showPopupAddress() {},
    Return() {
      this.$router.go(-1);
    },
    onClickIcon() {
      //   Toast('点击图标');
    },
    onClickButton() {
      this.showchoice = true;
    },
    showPopupyoufei() {
      this.showyoufei = true;
    },
    showPopup() {
      this.show = true;
    },
    showPopupSize() {
      this.showsize = true;
    },
    onClickLeft() {
      this.showsize = false;
    },
    onClickRight() {},
    onBuyClicked() {},
    onAddCartClicked() {},
    complete() {
      this.show = false;
    },
    sure() {
      console.log(this.amount);
      console.log(this.buy)
    },
    right_address(){
      this.$router.push("/addressx");
    }
  }
};
</script>

<style scoped>
.return1 {
  width: 100%;
  /* border: 1px solid #d4cd49; */
}
.carousel {
  width: 100%;
}
.carousel2 {
  width: 100%;
  height: 375px;
}
.explain {
  width: 96%;
  margin: 0 auto;
}
.below {
  display: flex;
}
.below-title {
  margin-left: 5px;
  display: flex;
  font-size: 18px;
  color: rgb(28, 35, 36);
}
.price {
  display: flex;
  margin: 20px 0;
}
.going {
  margin-top: 15px;
  color: rgb(255, 4, 4);
}
.going-price {
  font-size: 33px;
  color: rgb(255, 4, 4);
}
.origin-price {
  font-size: 10px;
  color: rgb(160, 158, 158);
  margin-left: 5px;
  margin-top: 20px;
  text-decoration: line-through;
}
.sales {
  font-size: 13px;
  color: rgb(160, 158, 158);
  margin-left: 55px;
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
  margin-top: 3px;
  height: 20px;
  margin-left: 5px;
  font-size: 12px;
  border-radius: 12%;
  border: 1px solid red;
  color: red;
}
/* //标签中文文本 */
.lableCh {
  padding-top: 1px;
  padding-left: 2px;
}
/* //标签2 */
.labletwo {
  text-align: center;
  height: 22px;
  width: 40px;
  margin-top: 15px;
  font-size: 14px;
  border-radius: 10%;
  margin-left: 6px;
  font-weight: 700;
  color: white;
  border: 1.5px solid rgb(228, 135, 48);
}
/* //标签2中文文本 */
.lableCh1 {
  height: 20px;
  width: 40px;
  background-color: red;
  padding-bottom: 0px;
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
  padding-top: 3px;
  padding-left: 7px;
}
.text {
  margin-top: 5px;
  display: flex;
  font-size: 12px;
  color: lightgrey;
  text-align: left;
}
.youfei {
  float: left;
  width: 100%;
  display: flex;
}
.choice {
  margin-top: 20px;
  width: 80%;
}
.choice-text {
  display: flex;
  float: left;
}
.freight {
  margin-top: 10px;
  display: flex;
  margin-left: 18px;
  /* margin: 5px 0 5px 15px; */
  font-size: 15px;
}
.freight-img {
  margin-left: 30px;
}
/* //竖线 */
.divider {
  border-left: 1px solid rgb(189, 188, 188);
  margin-top: 3px;
  height: 15px;
  margin-left: 5px;
}
.city {
  font-size: 15px;
  margin-right: 10px;
}
.freight1 {
  margin-left: 50px;
}
.express {
  margin-left: 10px;
  font-size: 14px;
}
.express-text {
  font-size: 14px;
}
.parameter-top {
  width: 100%;
  height: 40px;
  border-radius: 14px;
  /* border: 1px solid #d4cd49; */
  position: fixed;
  background-color: rgb(253, 253, 253);
  top: 45%;
  text-align: center;
  font-size: 18px;
}
.parameter-brand {
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  font-size: 15px;
  font-weight: 600;
}
.parameter-title {
  margin-top: 10px;
  display: flex;
  width: 60px;
}
.parameter-text {
  display: flex;
  margin-left: 60px;
  margin-top: 8px;
  font-weight: 100;
}
.cut {
  margin-top: 5px;
  font-weight: 400;
  margin-bottom: 5%;
}
.parameter-bottom {
  width: 100%;
  height: 50px;
  /* border: 1px solid #d4cd49; */
  position: fixed;
  background-color: rgb(253, 253, 253);
  top: 94%;
}
.complete {
  margin-top: 5px;
  width: 90%;
  height: 30px;
  background-color: rgb(218, 87, 47);
  margin: 0 auto;

  border-radius: 12px;
}
.complete-text {
  margin-top: 10px;
  text-align: center;
  line-height: 30px;
  color: azure;
}
.introduce-img {
  width: 100%;
  height: auto;
}

/* 选择规格 */
.shop {
  margin-top: 10px;
  width: 90%;
  margin: 0 auto;
}
.shop-top {
  display: flex;
}
.shop-left {
  width: 150px;
  border-radius: 12px;
  margin-top: 10px;
}
.shop-img{
  border-radius: 8px;
}
.shop-right {
  margin-left: 40px;
  margin-top: 20px;
}
.shop-price {
  color: rgb(240, 11, 11);
  display: flex;
}
.shop-pricetitle {
  margin-top: 13px;
}
.shop-pricenumber {
  font-size: 28px;
}
.shop-amount {
  float: left;
  margin-top: 5px;
}
.shop-title {
  float: left;
  margin-top: 5px;
}
.choice-color {
  margin-top: 20px;
}
.color-title {
  margin: 5px 0;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
}
.color-div {
  float: left;
  width: 70px;
  height: 25px;
  background-color: azure;
  border-radius: 15px;
  margin: 5px;
  font-size: 14px;
}
/* .color-div1{
  float: left;
  display: left;
} */
.choice-size {
  margin-top: 50px;
}
.size-title {
  margin: 5px 0;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
}
.size-div {
  float: left;
  width: 70px;
  height: 25px;
  background-color: azure;
  border-radius: 15px;
  margin: 5px;
  font-size: 14px;
}
.address {
  display: flex;
  margin-top: 60px;
}
.address_left {
  width: 280px;

  flex: 0.8;
}
.address_top {
  display: flex;
}
.address_name {
  font-size: 16px;
  color: #000;
}
.address_tel {
  margin-top: 3px;
  font-size: 14px;
  color: rgb(78, 75, 75);
}
.address_ {
  margin-top: 5px;
  text-align: left;
  font-size: 13px;
}
.address_right {
  line-height: 50px;
  flex: 0.2;
}
.right_icon {
  vertical-align: middle;
  width: 28px;
}
.shop-ampunt {
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
}
.amount-title {
  font-size: 15px;
}
.amount-title1 {
  font-size: 13px;
  color: rgb(94, 93, 93);
}
.amount-add {
  margin-left: 90px;
}
.parameter1-bottom {
  width: 100%;
  height: 50px;
  /* border: 1px solid #d4cd49; */
  position: fixed;
  background-color: rgb(253, 253, 253);
  top: 92%;
  margin: 0 auto;
}
.complete1 {
  margin-top: 5px;
  margin-left: 6px;
  width: 85%;
  height: 30px;
  background-color: rgb(218, 87, 47);
  text-align: center;
  float: none;
  border-radius: 12px;
}
.complete1-text {
  margin-top: 10px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: azure;
}
.red {
  float: left;
  width: 70px;
  height: 25px;
  background-color: rgb(216, 210, 119);
  border-radius: 15px;
  margin: 5px;
  font-size: 14px;
  cursor: pointer;
  color: #000;
}

.blue {
  float: left;
  width: 70px;
  height: 25px;
  background-color: azure;
  border-radius: 15px;
  margin: 5px;
  font-size: 14px;
}
.nosize {
  float: left;
  width: 70px;
  height: 25px;
  background-color: rgb(216, 210, 119);
  border-radius: 15px;
  margin: 5px;
  font-size: 14px;
  cursor: pointer;
  color: #000;
}

.yessize {
  float: left;
  width: 70px;
  height: 25px;
  background-color: azure;
  border-radius: 15px;
  margin: 5px;
  font-size: 14px;
}
</style>
