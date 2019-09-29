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
            placeholder="请输入搜索关键词"
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
    <div>

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
</style>