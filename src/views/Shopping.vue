<template>
  <div id="app">
    <div>
      购物车详情
      <div>
        <Commodity @childClose="childClose"/>
      </div>
      <Settlement />
    </div>
    <div>
      <SubmitBar @childFn="qx" :add="add" show="show">{{totalPrice}}</SubmitBar>
    </div>
  </div>
</template>

<script>
import SubmitBar from "@/components/shopping trolley/SubmitBar.vue";
import Commodity from "@/components/shopping trolley/Commodity.vue";
import Settlement from "@/components/shopping trolley/Settlement.vue";
import foot from "../components/footer/Foot";
export default {
  name: "app",
  data() {
    return {
      //商品总和
      sum: 49,
      quanxuan: " ",
      csum: 0,
      csum1: 0,
      add: this.$route.query.add,
      show:this.$route.query.show,
    };
  },
  components: {
    //子组件的引用
    SubmitBar,
    Commodity,
    Settlement,
    foot
  },
  methods: {
    childClose(data) {
      // childValue就是子组件传过来的值
      this.csum = data;
      this.sum = data;
      console.log(data);
    },
    qx(data) {
      if (data === true) data = false;
      else data = true;
      this.quanxuan = data;
    }
  },
  computed: {
    //未优惠总价
    totalPrice() {
      return (this.$store.state.totalPrice = this.zong);
    },
    zong() {
      return this.sum;
    }
  },
  created: function() {
    this.getParams();
  },
  watch: {
  // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
  '$route': 'getParams'
},
};
</script>

<style lang="scss" scoped>
</style>