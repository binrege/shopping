<template>
  <div>
    <div>
      <search> </search>
      <foot> </foot>
    </div>
  </div>
</template>

<script>
//1.引入子组件
import foot from "../components/footer/Foot";
import search from "../components/top/Search";

export default {
  name: "Index",
  //2.注册子组件
  components: {
    //foot:foot
    foot,
    search
    // searchBottom
  },
  data() {
    return {
      msg: "我是Index"
    };
  }
};
</script>

<style scoped></style>
