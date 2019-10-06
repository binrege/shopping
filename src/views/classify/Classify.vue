<template>
  <div class="classify">
    <!-- 头部搜索 -->
    <div></div>
    <van-divider :style="{ color: '#141212', borderColor: '#141212', padding: '50px 0 0 0' }"></van-divider>
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
              <img class="img1" v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div>
          <van-grid :column-num="3">
            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      activeKey: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
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
  width: 80%;
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
</style>

