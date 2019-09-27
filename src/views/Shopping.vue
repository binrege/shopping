<template>
  <div id="app">
    <div>
      <Commodity />
      <Commodity />
      <Settlement/>
    </div>
    <div>
      <SubmitBar />
    </div>
  </div>
</template>

<script>
import SubmitBar from "@/components/shopping trolley/SubmitBar.vue";
import Commodity from "@/components/shopping trolley/Commodity.vue";
import Settlement from "@/components/shopping trolley/Settlement.vue";
export default {
  name: "app",
  components: {
    SubmitBar,
    Commodity,
    Settlement
  }
};
</script>

<style lang="scss" scoped>
</style>