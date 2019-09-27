<template>
  <div>
    <div v-if="isfocus==false"  class="top">
      <van-icon class="top1" color="#5F5F5F" size="33px" name="scan" />
      <van-search class="top2" placeholder="请输入搜索关键词" v-model="value" @focus="searchItem" />
      <van-icon class="top3"  color="#5F5F5F"  size="33px" name="comment-o" />
    </div>
    <div v-else>
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
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
      return {
         isfocus: false,  
         value:''
      }
  },
 
  methods: {
    searchItem() {
        this.isfocus=true;
    },
    onSearch(){
       console.log(this.value);
    },
    onCancel(){
          this.isfocus=false;
    }

  }
};
</script>

<style scoped>
.tpp {
  float: left;
}
.top1 {
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}
.top2 {
  float: left;
  width: 77%;
}
.top3 {
  margin-top: 10px;
  float: left;
}
</style>