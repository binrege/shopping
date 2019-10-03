<template>
  <div class="voucher">
    <div class="navigation">
      <van-nav-bar title="领卷中心" left-arrow>
        <van-icon name="share" slot="right" color="black" />
        <van-icon name="more" slot="right" color="black" />
      </van-nav-bar>
    </div>

    <div class="image">
      <img src="../assets/new.jpg" />
    </div>

    <div class="head">
      <div class="seckill">
        <van-icon name="location" slot="left" color="red" />神券秒杀
      </div>
      <div class="selected">精选</div>
      <div class="moba">母婴</div>
      <div class="nutrition">营养保健</div>
      <div class="pull">
        <van-icon name="more" slot="right" color="black" />
      </div>
    </div>

    <van-count-down :time="time">
      <template v-slot="timeData">
        <span class="item">{{ timeData.hours }}</span>
        <span class="item">{{ timeData.minutes }}</span>
        <span class="item">{{ timeData.seconds }}</span>
      </template>
    </van-count-down>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 30 * 60 * 1000
    };
  }
};
</script>

<style lang="scss" scoped>
.voucher {
  background-color: #f2f2f2;
}

//图片框
.image {
  height: 130px;
  width: 100%;
}
//图片自适应大小
img {
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
//导航栏
.head {
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  background-color: #ffffff;
}
//神券秒杀
.seckill {
  font-weight: 600;
  font-size: 15px;
  padding-top: 8px;
  color: red;
}
//精选
.selected {
  font-size: 15px;
  color: #949494;
  padding-top: 8px;
}
//母婴
.moba {
  font-size: 15px;
  color: #949494;
  padding-top: 8px;
}
//营养保健
.nutrition {
  font-size: 15px;
  color: #949494;
  padding-top: 8px;
}
//下拉分类框（未完善）
.pull {
  font-size: 20px;
  color: #949494;
  padding-top: 6px;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #e51c23;
}
</style>