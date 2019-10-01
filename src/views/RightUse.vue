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
      <div class="year"><div class="min-year">考拉3周年</div></div>
      <div class="own">考拉自营</div>
      <div class="brand">品牌</div>
      <div class="classfying">分类</div>
    </div>
  </div>
</template>

<script>
export default {
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
.year {
  flex: 1;
  height: 28px;
  width: 92px;
  text-align: center;
  padding:0;
  margin: 0;
  // border: 1px solid red;
}
.min-year{
  height:85%;
  width: 90%;
  text-align: center;
  font-weight: 600;
  padding-top: 4px;
  margin: 0 4.5px;
  font-size: 14px;
  color: red;
  background-color: rgb(233, 231, 231);
}
.own {
  flex: 1;
  height: auto;
  font-weight: 700;
  text-align: center;
  padding-top: 3px;
  background-color: rgb(241, 241, 241);
  border: 1px solid red;
}
.brand {
  flex: 1;
  height: auto;
  font-weight: 700;
  text-align: center;
  padding-top: 3px;
  background-color: rgb(241, 241, 241);
  border: 1px solid red;
}
.classfying {
  flex: 1;
  height: auto;
  font-weight: 700;
  text-align: center;
  padding-top: 3px;
  background-color: rgb(241, 241, 241);
  border: 1px solid red;
}
</style>