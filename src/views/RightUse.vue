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
    <div class="brand">
      <div>考拉3周年</div>
      <div>考拉自营</div>
      <div>品牌</div>
      <div>分类</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // value:[],
    }
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
.head {
  height: 45px;
  display: flex;
}
.returnimg {
  margin: 14px 0 14px 5px;
}
.serch {
  flex: 4;
  padding-right: 5px;
}
.classfy {
  padding: 15px 5px 15px 5px;
}

.screen {
  display: flex;
  width: 99%;
  height: 30px;
  border: 1px solid rgb(248, 245, 245);
  justify-content: space-between;
  padding-top: 10px;
}
.brand{
  display: flex;
  justify-content: space-between;
  height: 30px;
  border: 1px solid rgb(248, 245, 245);
  justify-content: space-between;
  padding-top: 10px;
}
</style>