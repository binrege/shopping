<template>
  <div>
    <div v-for="(odate,index) in dates" :key="index">
      <div class="payment">
        <div class="payment-head">
          <!-- 待付款（时间和待付款标签） -->
          <div class="nowtime">{{odate.odate| formatDate}}</div>
          <div class="payment-font">待付款</div>
        </div>
        <div class="payment-body">
          <!-- 待付款的商品信息，数量 -->
          <div class="body-picture">
            <img src="../../assets/personal/goods.svg" />
          </div>
          <div class="body-describe">
            <div class="body-describe-font">
              <div style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;width:220px">{{odate.closing.description}}</div>
              <div class="mn-font">
                <div>￥{{odate.closing.cprice}}</div>
                <div>×{{odate.orders_closing.onum}}</div>
              </div>
            </div>
            <div class="body-describe-check">查看产品使用说明</div>
          </div>
        </div>
        <div class="payment-bottom">
          <!-- 商品数量，总价，取消订单，立即付款 -->
          <div class="mn-font1">
            <div style="color:red">共{{odate.orders_closing.onum}}件 | 应付总额：￥{{odate.closing.cprice*odate.orders_closing.onum}}</div>
          </div>
          <div class="payment-bottom-two">
            <div class="payment-bottom-cancel">取消订单</div>
            <div class="payment-bottom-pay">立即付款</div>
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
      payments:[{
      money: 120,
      num: 2,
      NowTime: new Date()
      }
      ],
      dates:[],

    };
  },
  filters: {
    //获取当前时间
    formatDate: function(value) {
      var date = new Date(value);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDay() + 1;
      return year + "-" + month + "-" + day;
    }
  },

  created() {},
mounted(){
    //代付款
  let postData = this.$qs.stringify({
    status:1
  });
  axios
          .post("api/ordersController/ordersinfo",
                  postData
          )
          .then(response => {
            let res = response.data;

           // console.log(res);

            this.dates = res;
            //console.log( this.dates );
          })
          .catch(err => {
            console.log(err);
          });
},
  methods: {}
};
</script>

<style  scoped>
.payment {
  margin-top: 20px;
  width: 100%;
  height: 60%;
  justify-content: space-between;
  flex-direction: column;
}
.payment-head {
  font-size: 14px;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.payment-body {
  display: flex;

  flex: 2;
}

.body-picture {
  width: 70px;
  height: 70px;
  padding: 0 20px 0 10px;
}
.body-describe-font {
  font-size: 14px;
  display: flex;
}
.body-describe-check {
  padding: 4px 0 0 60%;
  text-align: center;
  font-size: 10px;
  color: red;
}
.mn-font {
  font-size: 17px;
}
.mn-font1 {
  font-size: 15px;
}
.payment-bottom {
  margin-left: 50%;
  flex: 2;
}
.payment-bottom-two {
  margin-top: 8px;
  display: flex;
  font-size: 14px;
}
.payment-bottom-cancel {
  width: 75px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 14px;
}
.payment-bottom-pay {
  width: 75px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: red;
  font-weight: 700;
  color: white;
  margin-left: 20px;
}
img {
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
}
</style>