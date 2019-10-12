<template>
  <div>
    <div class="classify">
      <!-- 头部搜索 -->
      <div>
        <search> </search>
      </div>
      <van-divider
        :style="{
          color: 'white',
          borderColor: 'red',
          padding: '0 0 0 0',


        }"
      ></van-divider>
      <div class="classify-body">
        <!-- 侧边推荐 -->
        <div class="sidebar">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="为你推荐"></van-sidebar-item>
            <van-sidebar-item title="裤装"></van-sidebar-item>
            <van-sidebar-item title="衬衫"></van-sidebar-item>
            <van-sidebar-item title="T恤"></van-sidebar-item>
            <van-sidebar-item title="包包"></van-sidebar-item>
            <van-sidebar-item title="女鞋"></van-sidebar-item>
            <van-sidebar-item title="连衣裙"></van-sidebar-item>
          </van-sidebar>
        </div>
        <div class="vertical"></div>
        <div class="sidebar-contents">
          <div class="shuffling">
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img class="img1" v-lazy="image.images" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <div>
            <div class="commonly">常用分类</div>
            <div class="commonly-cycle">
              <div
                class="commonly-cycle-one"
                v-for="(icon, index) in images"
                :key="index"
              >
                <div class="commonly-cycle-two">
                  <div class="commonly-icon">
                    <img :src="icon.image" />
                  </div>
                  <div class="commonly-name">{{ icon.name }}</div>
                </div>
              </div>
            </div>
          </div>
          <van-divider
            :style="{ color: '#141212', borderColor: '#141212', padding: '0' }"
          ></van-divider>
          <div>
            <div class="hot-top">
              <div class="hot">热门分类</div>
              <div class="hotlist">热销榜</div>
              <div class="hot-arrow">
                <van-icon name="arrow" />
              </div>
            </div>
            <div class="hot-cycle">
              <div
                class="hot-cycle-one"
                v-for="(icon, index) in images"
                :key="index"
              >
                <div class="hot-cycle-two">
                  <div class="hot-icon">
                    <img :src="icon.image" />
                  </div>
                  <div class="hot-name">{{ icon.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
//1.引入子组件

import axios from "axios";
import search  from "../../components/top/Search";
import foot from "../../components/footer/Foot";
export default {
  name: "",
  components: {
    foot,
    search
  },
  data() {
    return {
      activeKey: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  mounted() {
    axios
      .get("api/yyp")
      .then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.images = res.data;
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.classify {
  width: 100%;
  height: 100%;
}
.classify-body {
  display: flex;
  height: 600px;
}
.sidebar {
  width: 90px;
}
.vertical {
  height: auto;
  margin-top: -16px;
  width: 0px;
  border-left: #969799 2px solid;
}
.sidebar-contents {
  width: 75%;
  height: auto;
}
.shuffling {
  width: 100%;
  height: 200px;
}
.img1 {
  width: 100%;
  height: 160px;
  max-height: 100%;
  max-width: 100%;
}
.commonly,
.hot {
  margin-left: 25px;
  font-size: 12px;
}
.hot-top {
  display: flex;
}
.hotlist {
  margin-left: 50%;
  font-size: 12px;
  color: red;
}
.hot-arrow {
  color: red;
}

// 常用分类循环
.commonly-cycle {
  margin: 0 auto;
}
.commonly-cycle-one {
  display: inline-block;
  margin: 0 auto;
}
.commonly-cycle-two {
  width: 85px;
}
.commonly-icon {
  text-align: center;
  margin-top: 15px;
}
.commonly-name {
  text-align: center;
  margin-bottom: 15px;
  font-size: 12px;
  color: #969799;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
// 热门分类循环
.hot-cycle {
  margin: 0 auto;
}
.hot-cycle-one {
  display: inline-block;
  margin: 0 auto;
}
.hot-cycle-two {
  width: 85px;
}
.hot-icon {
  text-align: center;
  margin-top: 15px;
}
.hot-name {
  text-align: center;
  margin-bottom: 15px;
  font-size: 12px;
  color: #969799;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
