<template>
  <div id="special">
    <div class="top">
      <div class="title">每日特价</div>
      <div class="explain">
        <div class="explain_text">省钱小帮手 ></div>
      </div>
    </div>
    <div class="centre">
      <div class="centre_text">9块9疯抢</div>
    </div>
    <div class="below">
      <div class="below-div" v-for="(discount,index) in discounts" :key="index">
        <div class="below-img">
          <img :src="discount.imagediscounts" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Special",
  data() {
    return {
         discounts: [],
    };
  },
  mounted() {
       axios
      .get("api/getListL")
      .then(response => {
        let res = response.data;
        if (res.code === 200) {
          this.discounts = res.data;
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.top {
  margin-top: 11px;
  margin-left: 5px;
  display: flex;
}
.explain {
  margin-left: 5px;
  width: 90px;
  height: 16px;
  border: 1px solid rgb(164, 149, 250);
  border-radius: 12px;
  margin-top: 4px;
}
.title{
  font-size: 17px;  
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight:600;
}
.explain_text {
  text-align: center;
  font-size: 11px;
  color: rgb(164, 149, 250);
}
.centre_text {
  /* margin-top: 2px; */
  padding-left: 5px;
  font-size: 12px;
  color: rgb(164, 149, 250);
}
.below {
   
  float: left;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  overflow: auto;
  padding-left:1px;
}
.below-div {
     margin-top: 5px;
  margin-left: 5px;
  
  float: left;
  padding-top: 5px;
  width: 75px;
  
}
.below-img {
  display: flex;
  justify-content: center;
}


</style>