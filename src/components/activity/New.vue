<template>
  <div id="new">
    <div class="top">
      <div class="title">新品首发</div>
      <div class="explain">
        <div class="explain_text">潮流新时尚 ></div>
      </div>
    </div>
    <div class="centre">
      <div class="centre_text">上市优品</div>
    </div>
    <div class="below">
      <div class="below-div" v-for="(discount,index) in discounts" :key="index">
        <div class="below-img">
          <img :src="discount.imagediscounts" class="img"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "New",
    data() {
      return {
        discounts: [],
      };
    },
    mounted() {
      axios
              .get("api/getListR")
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
    border: 1px solid rgb(126, 199, 241);
    border-radius: 12px;
    margin-top: 4px;
  }
  .explain_text {
    text-align: center;
    font-size: 11px;
    color: rgb(126, 199, 241);

  }
  .title{
    font-size: 17px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight:600;
  }
  .centre_text {
    /* margin-top: 2px; */
    float: left;
    margin-left: 6px;
    font-size: 12px;
    color: rgb(126, 199, 241);
  }
  .below {
    float: left;
    margin: 0 auto;
    width: 170px;
    height: auto;
    overflow: auto;
  }
  .below-div {
    margin: 6px 4px;

    float: left;
    width: 70px;
    border-radius: 12px;
  }

  .below-img {
    display: flex;
    justify-content: center;
    /* width: 160px;
    height: 160px;
    border-radius: 12px 12px 0px 0px; */
  }

  .img{
    width: 100%;
  }


</style>