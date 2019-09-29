<template>
  <div class="main">
    <div class="main_body">
        <searchList_> </searchList_>

    </div>
  </div>
</template>

<script>
//1.引入子组件
import searchList_ from "../components/searchList/SearchList_";
export default {
  name: "searchList",
  //2.注册子组件
  components: {
    //foot:foot
      searchList_
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
