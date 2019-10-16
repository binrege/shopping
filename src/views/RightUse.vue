<template>
  <div>
    <div class="head">
      <div class="returnimg">
        <van-icon name="arrow-left" @click="onClickReturn"/>
      </div>
      <div class="serch">
        <form action="/">
          <van-search
            v-model="value"
            placeholder="在优惠券适用商品中搜索"
            show-action
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
      <div class="classfy">
        <img src="../assets/classfy.svg" />
      </div>
    </div>
    <div class="screen">
      <div class="Compre">
        综合
        <div class="compre">
          <van-icon name="arrow-down" />
        </div>
      </div>
      <div>销售</div>
      <div class="Price">
        价格
        <div class="price">
          <van-icon name="arrow-up" />
          <van-icon name="arrow-down" />
        </div>
      </div>
      <div>逛品牌</div>
      <div class="Filter">
        筛选
        <div class="filter">
          <van-icon name="filter-o" />
        </div>
      </div>
    </div>
    <div class="Brand">
      <div class="year">
        <div class="min-year">考拉3周年</div>
      </div>
      <div class="own">
        <div class="min-own">考拉自营</div>
      </div>
      <div class="brand">
        <div class="min-brand">
          品牌
          <div class="brandicon">
            <van-icon name="arrow-down" />
          </div>
        </div>
      </div>
      <div class="classfying">
        <div class="min-classfying">
          分类
          <div class="classfyicon">
          <van-icon name="arrow-down" />
          </div>
        </div>
      </div>
    </div>
    <div class="model">
      <Model msg />
    </div>
  </div>
</template>

<script>
import Model from "../components/Guess/Model.vue";
export default {
  name: "model",
  components: {
    Model
  },
  data() {
    return {
       value:""
    };
  },
  methods: {
    onClickReturn(){
      this.$router.push("./CouPon");
    },
    onSearch() {
      this.$toast("搜索成功");
    },
    onCancel() {
      this.$toast("取消成功");
    }
  }
};
</script>

<style lang="scss" scoped>
//导航栏
.head {
  height: 43px;
  display: flex;
}
//返回按钮
.returnimg {
  margin: 20px 0 14px 5px;
}
//搜索框
.serch {
  flex: 4;
  padding-right: 5px;
}
//分类框
.classfy {
  padding: 16px 5px 15px 5px;
}
//筛选栏
.screen {
  display: flex;
  width: 100%;
  height: 34px;
  font-size: 14px;
  color: #c0c0c0;
  border-bottom: 1px solid rgb(248, 245, 245);
  border-top: 1px solid rgb(248, 245, 245);
  justify-content: space-around;
  padding-top: 8px;
  margin-top: 11px;
}
//综合
.Compre {
  font-weight: 700;
  color: red;
  display: flex;
}
//综合icon
.compre {
  font-size: 1px;
  margin-left: 1px;
  margin-top: 4px;
}
//价格
.Price {
  display: flex;
}
//价格icon
.price {
  font-size: 2px;
  display: flex;
  flex-direction: column;
  margin-left: 1px;
}
//筛选
.Filter {
  display: flex;
}
//筛选icon
.filter {
  margin-top: 2px;
}
//分类栏
.Brand {
  display: flex;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 10px;
  padding-top: 5px;
  border-bottom: 1px solid rgb(248, 245, 245);
}
//考拉3周年
.year {
  flex: 1;
  height: 28px;
  width: 92px;
  text-align: center;
  padding: 0;
  margin: 0;
  // border: 1px solid red;
}
//文本盒子
.min-year {
  height: 85%;
  width: 90%;
  text-align: center;
  font-weight: 600;
  padding-top: 4px;
  margin: 0 4.5px;
  font-size: 14px;
  color: #e62c30;
  background-color: #f5f5f5;
}
//考拉自营
.own {
  flex: 1;
  height: 28px;
  width: 92px;
  padding: 0;
  margin: 0;
}
//own文本盒子
.min-own {
  height: 85%;
  width: 90%;
  text-align: center;
  font-weight: 600;
  padding-top: 4px;
  margin: 0 4.5px;
  font-size: 14px;
  background-color: #f5f5f5;
}
//品牌
.brand {
  flex: 1;
  height: 28px;
  width: 92px;
  padding: 0;
  margin: 0;
}
//brand文本盒子
.min-brand {
  height: 85%;
  width: 90%;
  font-weight: 600;
  padding-top: 4px;
  margin: 0 4.5px;
  font-size: 14px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
}
//brand icon
.brandicon {
  font-size: 10px;
  margin-left: 1px;
  margin-top: 4px;
}
//分类
.classfying {
  flex: 1;
  height: 28px;
  width: 92px;
  padding: 0;
  margin: 0;
}
//classfing文本盒子
.min-classfying {
  height: 85%;
  width: 90%;
  font-weight: 600;
  padding-top: 4px;
  margin: 0 4.5px;
  font-size: 14px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
}
//classfy icon
.classfyicon{
  font-size: 10px;
  margin-top: 4px;
  margin-left: 1px;
}
.model {
  height: auto;
  width: 100%;
}
</style>