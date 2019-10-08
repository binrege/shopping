<template>
  <div class="main">
    <div class="main_top">
      <div class="top1">
        <van-icon class="back" size="35px" name="arrow-left" />
        <van-search
          class="search"
          placeholder="请输入搜索关键词"
          v-model="value"
        />

        <div v-if="this.listmodle === false">
          <img src="../../assets/list.svg" @click="ToDa" class="list_1" />
        </div>
        <div v-else>
          <img
            src="../../assets/datu.svg"
            @click="TouList"
            class="list_2"
            alt=""
          />
        </div>
      </div>

      <div class="top2">
        <div class="home__select">
          <van-dropdown-menu class="select_1">
            <van-dropdown-item
              class="top2_1"
              v-model="value1"
              :options="option1"
            />
          </van-dropdown-menu>
          <div class="sale">
            销量
          </div>

          <div class="price1">
            <div class="price">
              价格
            </div>
            <div class="ico">
              <div class="up"><van-icon size="10px" name="arrow-up" /></div>
              <div class="down"><van-icon size="10px" name="arrow-down" /></div>
            </div>
          </div>
          <div class="brand">
            逛品牌
          </div>
          <div class="choose">
            <div class="filter">
              筛选
            </div>

            <div class="icon">
              <van-icon name="filter-o" />
            </div>
          </div>
        </div>
      </div>
      <div class="top3">
        <div class="top3_1">
          杭州四季青
        </div>
        <div class="top3_2">
          广州
        </div>

        <van-dropdown-menu class="brand">
          <van-dropdown-item
            class="brand_item"
            v-model="this.value3"
            :options="this.option3"
          />
        </van-dropdown-menu>

        <van-dropdown-menu class="sort">
          <van-dropdown-item v-model="this.value3" :options="this.option4" />
        </van-dropdown-menu>
      </div>
      <div v-if="this.listmodle === false">
        <div class="booklist1">
          <div class="template1">
            <div v-for="(book, index) in books" :key="index" class="book_list">
              <div>
                <img
                  style="margin-left: 11%"
                  :src="book.image"
                  :title="book.name"
                  class="image"
                />
                <div style="width: 50% ;margin-left: 11%">{{ book.date }}</div>
                <div style="width: 50% ;margin-left: 11%">111</div>
                <div style="width: 50% ;margin-left: 11%">222</div>
                <div style="width: 50% ;margin-left: 11%">333</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="booklist2">
          <div class="template2">
            <div v-for="(book, index) in books" :key="index" class="book_list2">
              <div>
                <div style="margin-left:10px;float: left;height: 150px">
                  <img
                    style=""
                    :src="book.image"
                    :title="book.name"
                    class="image"
                  />
                </div>
                <div style="margin-left:10px;float: left;background-color: #0570db; width: 50%; height: 150px">{{ book.date }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "searchList_",
  data() {
    return {
      listmodle: false,
      value: "",
      value1: 0,
      value2: "a",
      value3: 0,
      option1: [
        { text: "综合", value: 0 },
        { text: "信用", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "品牌1", value: 0 },
        { text: "品牌2", value: 1 },
        { text: "品牌3", value: 2 }
      ],
      option4: [
        { text: "分类", value: 0 },
        { text: "品牌2", value: 1 },
        { text: "品牌3", value: 2 }
      ],
      books: []
    };
  },
  methods: {
    ToDa() {
      this.listmodle = true;
    },
    TouList() {
      this.listmodle = false;
    }
  },
  mounted() {
    axios
      .get("api/SearchList_")
      .then(response => {
        let res = response.data;
        this.books = res.data;
        console.log(this.books);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.top1 {
  width: 100%;
  height: 60px;
}
.top2 {
  border-top: 1px solid;
  border-color: rgba(250, 0, 255, 0.5);

  width: 100%;
  height: 50px;
}
.top3 {
  border-top: 1px solid;
  border-color: rgba(250, 0, 255, 0.5);

  display: flex;
  width: 100%;
  height: 50px;
}
.top4 {
  border-top: 1px solid;
  border-color: rgba(250, 0, 255, 0.5);

  width: 100%;
  height: 400px;
}
.search {
  width: 74%;
  float: left;
}
.back {
  margin-top: 9px;
  float: left;
}
.list_1 {
  margin-top: 9px;
  margin-right: 5px;
  height: 33px;
  width: 50px;
  size: 20px;
}
.list_2 {
  margin-top: 9px;

  width: 52px;
  height: 33px;
  size: 20px;
}
.top2_1 {
  margin-left: 2px;
}
.select_1 {
  height: 50px;
  float: left;
  width: 100px;
}

.price {
  font-size: 16px;
}
.price1 {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  height: 50px;
  width: 100px;
}
.ico {
}
.up {
  padding-bottom: 0px;
  margin-left: 3px;
  height: 9px;
  margin-top: 8px;
}
.down {
  padding-top: 0px;
  margin-left: 3px;
  margin-bottom: 9px;
}
.sale {
  text-align: center;
  line-height: 50px;

  height: 50px;
  width: 100px;
  background-color: white;
}
.brand {
  text-align: center;
  line-height: 50px;

  height: 50px;
  width: 100px;
  background-color: white;
}
.home__select {
  display: flex;
}
.choose {
  display: flex;
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 100px;
  background-color: white;
  justify-content: center;
  border: white;
}
.filter {
}
.icon {
  border: 0px;
  margin-top: 3px;
}
.top3_1 {
  margin-left: 16px;
  text-align: center;
  line-height: 50px;
  flex: 1;
  color: red;
}
.top3_2 {
  text-align: center;
  line-height: 50px;
  flex: 1;
}
.sort {
  flex: 1;
}
.book_list {
  display: inline-block;
  width: 50%;
  margin: 0px auto;
}
</style>
