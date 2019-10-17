<template>
  <div class="">
    <div v-if="isfocus == false" class="top top__icon">
      <img src="../../assets/saoyisao.svg" class="top1 ">
      <!-- <van-icon  color="#5F5F5F"  name="scan"></van-icon> -->
      <van-search
        class="top2"
        placeholder="请输入搜索关键词"
        v-model="value"
        @focus="searchItem"></van-search>

        <img src="../../assets/xiaoxi.svg" class="top3 " @click="onClickMsg">

      
    </div>
    <div v-else class="search_retuen">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />

      <div class="search1">
        <div class="nearlys">最近搜索</div>

        <van-icon
          class="deletes"
          @click="DeleteNearly"
          size="22px"
          name="delete"
        />
        <div v-if="items.length > 0">
          <div class="one_item" v-for="(item, index) in items" :key="index">
            <van-tag
              round
              class="one_item_"
              size="large"
              color="#F5F5F5"
              text-color="black"
              >{{ item }}</van-tag
            >
          </div>
        </div>
      </div>

      <div class="search2">
        <div class="fond">搜索发现</div>
        <div class="two_item">
          <van-tag round size="large" color="#F5F5F5" text-color="black"
            >工装裤</van-tag
          >
          <van-tag round type="primary" size="large">工装裤</van-tag>
          <van-tag round type="success" size="large">工装裤</van-tag>
          <van-tag round type="danger" size="large">工装裤</van-tag>
          <van-tag round type="warning" size="large">工装裤</van-tag>
        </div>
      </div>
      <div class="search3">
        <div class="sort">常用分类</div>
        <div class="three_item">
          <van-tag round size="large" color="#F5F5F5" text-color="black"
            >工装裤</van-tag
          >
          <van-tag round type="primary" size="large">工装裤</van-tag>
          <van-tag round type="success" size="large">工装裤</van-tag>
          <van-tag round type="danger" size="large">工装裤</van-tag>
          <van-tag round type="warning" size="large">工装裤</van-tag>
        </div>
      </div>
    </div>
    <van-dialog
      v-model="show"
      title="确定删除搜索历史？"
      show-cancel-button
      @confirm="confirm"
      @cancel="cancel"
    ></van-dialog>
  </div>
</template>

<script>
export default {
  name: "search",
  homeshow:"flase",
  data() {
    return {
      isfocus: false,
      value: "",
      items: [],
      show: false,
      
    };
  },

  methods: {
    onClickMsg(){
      this.$router.push("./Msg");
    },
    searchItem() {
      this.isfocus = true;
      //把字符串转成对象
    },
    confirm() {
      //移除所有
      this.items = [];
      this.show = false;
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    cancel() {
      this.show = false;
    },
    DeleteNearly() {
      this.show = true;
    },
    onSearch() {
      console.log("aaa" + this.value);
      this.items.push(this.value);
      this.value = "";
      console.log(this.items);
      //把对象转成字符串
      localStorage.setItem("items", JSON.stringify(this.items));
      //把字符串转成对象
      //let obj1=JSON.parse(localStorage.getItem('items'));
      console.log(this.items);
    },
    onCancel() {
      this.isfocus = false;
      

    }
  },
  mounted() {
    if (localStorage.items) {
      this.items = JSON.parse(localStorage.getItem("items"));
    }
  }
};
</script>

<style scoped lang="scss">
  .top{
    display: flex;
    height: 60px;
  }
.top1 {

  
  margin-left: 5px;
  margin-top: 15px;
  height: 30px;
  flex: 1;
}
.top2 {

  width: 77%;
  flex: 6;
}
.top3 {
  margin-right: 5px;
  margin-top: 15px;
  height: 30px;
  flex: 1;

}
.search1 {
  width: 100%;
  float: left;
  margin-top: 20px;
  
}
.search2 {
  margin-top: 85px;
  width: 100%;
  padding: 5px 5px;
}
.search3 {
  margin-top: 60px;
  width: 100%;

  padding: 5px 5px;
}
.nearlys {
  margin-top: -10px;
  margin-left: 3%;
  float: left;
}
.deletes {
  margin-top: 26px;
  margin-right: 10%;
  float: right;
}
.fond {
  margin-left: 2%;
  margin-top: 20px;
}
.sort {
  margin-left: 2%;
}

.one_item,
.two_item,
.three_item {
  margin-left: 3%;
  margin-top: 20px;
}
.one_item_ {
  float: left;
  margin-top: 5px;
  margin-left: 5px;
}
.search_retuen{
  height: 1000px;
}
</style>
