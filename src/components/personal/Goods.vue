<template>
  <div>
    <div v-for="(odate,index) in dates" :key="index">
      <div class="goods">
        <div class="goods-head">
          <!-- 待付款（时间和待付款标签） -->
          <div class="nowtime">{{odate.odate| formatDate}}</div>
          <div class="goods-font">待发货</div>
        </div>
        <div class="goods-body">
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
        <div class="goods-bottom">
          <!-- 商品数量，总价，取消订单，立即付款 -->
          <div class="mn-font">
            <div style="color:red;padding-left:60px">共{{odate.orders_closing.onum}}件 | 应付总额：￥{{odate.closing.cprice*odate.orders_closing.onum}}</div>
          </div>
          <div class="goods-bottom-three">
            <div class="goods-bottom-remind">提醒发货</div>
            <div class="goods-bottom-cancel">取消订单</div>
            <div class="goods-bottom-logistics">查看物流</div>
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
      goods: [
        {
          money: 120,
          num: 2,
          NowTime: new Date()
        },
        {
          money: 250,
          num: 2,
          NowTime: new Date()
        },
        {
          money: 630,
          num: 3,
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
  //更新时间
  //   mounted() {
  //     var that = this;
  //     this.timer = setInterval(() => {
  //       that.date = new Date(); //修改数据date
  //     }, 1000);
  //   },
  //   beforeDestroy() {
  //     if (this.timer) {
  //       clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
  //     }
  //   },
  created() {},
  mounted(){
    //代发货
    let postData = this.$qs.stringify({
          status:2
    });
    axios
            .post("api/ordersController/ordersinfo",
                    postData
            )
            .then(response => {
              let res = response.data;

              //console.log(res);

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
.goods {
  margin-top: 20px;
  width: 100%;
  height: 60%;
  justify-content: space-between;
  flex-direction: column;
}
.goods-head {
  font-size: 14px;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.goods-body {
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
.goods-bottom {
  margin-left: 30%;
  flex: 2;
}
.goods-bottom-three {
  margin-top: 8px;
  display: flex;
}
.goods-bottom-remind {
  width: 75px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 14px;
}
.goods-bottom-cancel {
  width: 75px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 14px;
}
.goods-bottom-logistics {
  width: 75px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 14px;
}
img {
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
}
</style>