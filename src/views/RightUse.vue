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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.head {
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
  width: 100%;
  height: 50px;
  border: 1px solid red;
  justify-content: space-between;

}
</style>