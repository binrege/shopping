<template>
  <div class="main" style="background-color: #0570db">
    <div class="search1">
      <div class="nearlys">最近搜索</div>
      <van-icon class="deletes" size="22px" name="delete" />
    </div>
        <div class="search2">
          <div class="fond">搜索发现</div>

          <div class="sort">常用分类</div>
        </div>
      <div class="search3">

          <div class="sort">常用分类</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "SearchBottom"
};
</script>

<style scoped>
.search1 {
  height: 30%;
  background: #0570db;
}
.search2{
    margin-left: 3%;
}
.nearlys {
  margin-left: 3%;
  float: left;
}
.deletes {
  margin-right: 4%;
  float: right;
}
.fond {
    margin-left: 3%;
}
.main {
    background-color: #0570db;
}
.sort {
    margin-left: 3%;
}
</style>
