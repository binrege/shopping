<template>
  <div>
    <div class="top">
      <div class="title">限时活动</div>
      <div class="Time">{{time2}}</div>
      <div class="countdown">
        <van-count-down :time="time" />
      </div>
    </div>
    <div class="below">
      <div class="below-div">
        <div class="below-img">
          <img src="../../assets/WeCat.svg" />
        </div>
        <div class="going-price">$66</div>
        <div class="origin-price">$96</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeActivities",
  data() {
    return {
      time2: "",
      time: 60 * 60 * 1000
    };
  },
  mounted() {
    //获取当地时间
    let times = Date.now();
    let time1 = this.$dayjs(times).format("YYYY年MM月DD日 hh时mm分ss秒");
    this.time2 = this.$dayjs(times).format("hh时");
    console.log(time1);
  }
};
</script>

<style scoped>
.top {
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
}
.Time {
  padding-left: 3px;
}
.countdown {
  padding-left: 3px;
}
.below-div{
    width: 60px;
}
.going-price {
  text-align: center;
}
.origin-price {
  text-align: center;
}
</style>