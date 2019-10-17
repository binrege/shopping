
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
        <img src="../assets/load.svg" width="24px"/>
      </div>
      <div class="address">上海</div>
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
      <van-sku
        v-model="showshop"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        :initial-sku="initialSku"
        :message-config="messageConfig"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
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
      amount: "1",
      radio: "1",
      fixed: true,
      show: false,
      show1: false,
      showsize: false,
      showyoufei: false,
      showchoice: false,
      classifys: [],

      time2: "",
      time: 60 * 60 * 1000,
      showshop: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色",
            k_id: "1",
            v: [
              {
                id: "30349",
                name: "天蓝色",
                imgUrl:
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
              },
              {
                id: "1215",
                name: "白色"
              },
              {
                id: "1216",
                name: "黑色"
              }
              ,
              {
                id: "1217",
                name: "墨绿色"
              }
            ],
            k_s: "s1",
            count: 4
          },
          {
            k: "尺寸",
            k_id: "2",
            v: [
              {
                id: "1193",
                name: "27"
              },
              {
                id: "1194",
                name: "28"
              },
              {
                id: "1195",
                name: "29"
              },
              {
                id: "1196",
                name: "30"
              }
              ,
              {
                id: "1197",
                name: "31"
              }
              ,
              {
                id: "1198",
                name: "32"
              }
            ],
            k_s: "s2",
            count: 6
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 120, // 当前 sku 组合对应的库存
            discount: 112,
            goodsId: 946755
          },
          {
            id: 2257,
            price: 130,
            discount: 132,
            s1: "30349",
            s2: "1194",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 40, //库存
            goodsId: 946755
          },
          {
            id: 2257,
            price: 130,
            discount: 132,
            s1: "30349",
            s2: "1195",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 30, //库存
            goodsId: 946755
          },
          {
            id: 2258,
            price: 100,
            discount: 100,
            s1: "30349",
            s2: "1194",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 50, //库存
            goodsId: 946755
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: "唐狮",
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/1.jpg"
      },

      goodsId: "946755",
      quota: 3, //限购数量
      quotaUsed: 0, //已经购买过的数量
      //默认选中
      initialSku: {
        // s1: "0001",
        // s2: "1001",
        selectedNum: 1
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        }
      },
      customStepperConfig: {
        // 自定义限购文案
        quotaText: "每次限购3件",
        // 自定义步进器超过限制时的回调
        handleOverLimit: data => {
          const { action, limitType, quota, quotaUsed } = data;

          if (action === "minus") {
            Toast("至少选择一件商品");
          } else if (action === "plus") {
            // const { LIMIT_TYPE } = Sku.skuConstants;
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              let msg = `单次限购${quota}件`;
              if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
              Toast(msg);
            } else {
              Toast("库存不够了");
            }
          }
        },
        // 步进器变化的回调
        handleStepperChange: currentValue => {},
        // 库存
        stockNum: 1999,
        // 格式化库存
        stockFormatter: stockNum => {}
      }
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
    Return() {
      this.$router.go(-1);
    },
    onClickIcon() {
      //   Toast('点击图标');
    },
    onClickButton() {
      this.showshop = true;
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
    // onBuyClicked() {},
    // onAddCartClicked() {},
    complete() {
      this.show = false;
    },
    sure() {},
    onBuyClicked() {},
    onAddCartClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
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
  margin-top: -5px;
  margin-left: 30px;
}
/* //竖线 */
.divider {
  border-left: 1px solid rgb(189, 188, 188);
  margin-top: 3px;
  height: 15px;
  margin-left: 5px;
}
.address {
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
}
.shop-right {
  margin-left: 80px;
  margin-top: 10px;
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
.choice-size {
  margin-top: 120px;
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
.shop-ampunt {
  margin-top: 130px;
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
  color: azure;
}
</style>
