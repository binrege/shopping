<template>
  <div>
    <van-nav-bar
      title="地址栏"
      left-text="返回"
      right-text="确定"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    />
    {{chosenAddressId}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      addressx:[],
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },

  methods: {
    onAdd() {
      this.$router.replace("/Addaddress");
    },

    onEdit(item, index) {},
    onClickLeft() {
      this.$router.go(-1);
      // this.$router.push({
        
      //   // path: "/Details", //页面路劲 和上面名字任意一个都可以
      //   query: { add: this.list[this.chosenAddressId - 1].address , showchoice:"ture"} // 参数传值
      // });
      
    },
    onClickRight(data) {
      //  this.$toast("buy:" + JSON.stringify(this.list[this.chosenAddressId - 1]));

      //  this.addressx=JSON.stringify(this.list[this.chosenAddressId - 1]);
      let buy;
      buy= JSON.stringify(this.list[this.chosenAddressId - 1]);
      this.$toast(buy);
      this.$router.push({
        
        path: "/Details", //页面路劲 和上面名字任意一个都可以
        query: { add: this.list[this.chosenAddressId - 1].address, showchoice:"ture",buy} // 参数传值
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>