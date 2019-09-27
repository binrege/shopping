<template>
  <div class="all">
    <div class="head">
      <div class="head-picture">
        <img class="picture" src="../../assets/set.svg" />
        <img class="picture" src="../../assets/message.svg" />
      </div>
      <div class="head-person">
        <van-image
          class="head-portrait"
          round
          width="5.5rem"
          height="5.5rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <label class="head-name">墨白</label>
        <div class="elasticity">
          <div v-for="(item,index) in arr" :key="index" class="item">
            <div
              @click="clickNumber(item,index)"
              class="item-number"
              :class="{}"
              :style="{}"
            >{{item.number}}</div>
            <div
              @click="clickIncident(item,index)"
              class="item-incident"
              :class="{}"
              :style="{}"
            >{{item.incident}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "red",
      arr: [
        {
          number: 1,
          incident: "收藏"
        },
        {
          number: 2,
          incident: "关注"
        },
        {
          number: 3,
          incident: "足迹"
        },
        {
          number: 3,
          incident: "钱包"
        }
      ]
    };
  },
  methods: {
    clickNumber(item, index) {
      //alert(item.name+" "+item.price+" "+index)
    }
  }
};
</script>

<style  scoped>
.all {
  width: 100%;
  height: 100%;
}
.head-picture {
  width: 60px;
  height: 30px;
  position: absolute;
  margin: 15px 0 0 78%;
}
.picture {
  width: 22px;
  height: 22px;
  margin-left: 4px;
}

.head {
  width: 100%;
  background: #ac0215;
  position: absolute;
  height: 30%;
  border-radius: 5px;
}
.head-person {
  width: 80%;
  background: #f5f1f1;
  position: relative;
  height: 90%;
  margin: 50px auto;
  border-radius: 5px;
}
.head-portrait {
  position: absolute;
  margin: -20px 0 0 15px;
}
.head-name {
  margin: 30px 0 0 130px;
  font-size: 25px;
}
.elasticity{
  margin-top: 85px;
  display:flex;
}
.item{
  margin-left: 10px
}
.item-number ,.item-incident{
  width: 60px;
  height: 20px;
  font-size: 16px;
  text-align:center;
}
.item-number{
  
}
</style>