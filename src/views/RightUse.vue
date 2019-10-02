<template>
  <div>
    <div class="head">
      <div class="returnimg">
        <img src="../assets/return.svg" />
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
      <div>综合</div>
      <div>销售</div>
      <div>价格</div>
      <div>逛品牌</div>
      <div>筛选</div>
    </div>
    <div class="Brand">
      <div class="year">
        <div class="min-year">考拉3周年</div>
      </div>
      <div class="own">
        <div class="min-own">考拉自营</div>
      </div>
      <div class="brand">
        <div class="min-brand">品牌</div>
      </div>
      <div class="classfying">
        <div class="min-classfying">分类</div>
      </div>
    </div>
    <div class="model">
      <Model msg=""/>
    </div>
  </div>
</template>

<script>
import Model from '../components/Guess/Model.vue'
export default {
  name:'model',
  components:{
    Model
  },
  data() {
    return {
      // value:[],
    };
  },
  methods: {
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
  height: 45px;
  display: flex;
}
//返回按钮
.returnimg {
  margin: 14px 0 14px 5px;
}
//搜索框
.serch {
  flex: 4;
  padding-right: 5px;
}
//分类框
.classfy {
  padding: 15px 5px 15px 5px;
}
//筛选栏
.screen {
  display: flex;
  width: 99%;
  height: 30px;
  border: 1px solid rgb(248, 245, 245);
  justify-content: space-between;
  padding-top: 10px;
}
//分类栏
.Brand {
  display: flex;
  justify-content: space-between;
  height: 30px;
  // border: 1px solid rgb(248, 245, 245);
  justify-content: space-between;
  padding-top: 10px;
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
  background-color: #F5F5F5;
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
  background-color: #F5F5F5;
}
//品牌（未完善）
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
  text-align: center;
  font-weight: 600;
  padding-top: 4px;
  margin: 0 4.5px;
  font-size: 14px;
  background-color: #F5F5F5;
}
//分类（未完善）
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
  text-align: center;
  font-weight: 600;
  padding-top: 4px;
  margin: 0 4.5px;
  font-size: 14px;
  background-color: #F5F5F5;
}
.model{
  height: auto;
  width: 100%;
}
</style>