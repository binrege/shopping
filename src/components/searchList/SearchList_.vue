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

        <div v-if="listmodel === false">
          <img src="../../assets/list.svg" @click="ToDatu" class="list_1" alt="" />
        </div>
        <div v-else>
          <img src="../../assets/datu.svg" @click="TouList" class="list_2" alt="" />
        </div>
      </div>

      <div class="top2">
          <div>
              <van-dropdown-menu>
                  <van-dropdown-item class="top2_1" v-model="value1" :options="option1" />
                  <van-dropdown-item class="top2_2" v-model="value2" :options="option2" />
                  <van-dropdown-item class="top2_2" v-model="value2" :options="option2" />
                  <van-dropdown-item class="top2_2" v-model="value2" :options="option2" />
                  <van-dropdown-item class="top2_2" v-model="value2" :options="option2" />
              </van-dropdown-menu>

          </div>


      </div>
      <div class="top3"></div>
      <div class="top4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchList_",
  data() {
    return {
        listmodel: false,
        value1: 0,
        value2: 'a',
        option1: [
            { text: '全部商品', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 }
        ],
        option2: [
            { text: '默认排序', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
        ]
    };
  },
    methods:{
        ToDatu(){
            this.listmodel=true;
        },
        TouList(){
            this.listmodel=false;
        },

    }


};
</script>

<style scoped>
.top1 {
  width: 100%;
  height: 60px;
}
.top2 {
  width: 100%;
  height: 100px;
  background-color: #1959c1;
}
.top3 {
  width: 100%;
  height: 50px;
  background-color: #bdc14d;
}
.top4 {
  width: 100%;
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
    .top2_1{
        margin-left: 2px;
    }
</style>
