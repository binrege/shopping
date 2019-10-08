<template>
  <div id="app">
    <div>
      <Commodity @childClose="childClose"/>
      <Settlement />
    </div>
    <div>
      <SubmitBar ></SubmitBar>
    </div>
  </div>
</template>

<script>
import SubmitBar from "@/components/shopping trolley/SubmitBar.vue";
import Commodity from "@/components/shopping trolley/Commodity.vue";
import Settlement from "@/components/shopping trolley/Settlement.vue";
export default {
  name: "app",
  data() {
    return {
      //商品总和
      sum:"",
    }
  },
  components: {
    //子组件的引用
    SubmitBar,
    Commodity,
    Settlement
  },
  methods: {
   childClose(data) {
    // childValue就是子组件传过来的值
    this.sum = data;
    console.log(data)
   }
  },
  computed: {
    //未优惠总价
    totalPrice () {
      return this.$store.state.totalPrice
    }
  }
};
</script>

<style lang="scss" scoped>
</style>