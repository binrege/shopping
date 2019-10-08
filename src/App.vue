<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      path: "",
      userName: sessionStorage.userName
    };
  },
  methods:{
    //子组件(register)将用户名传过来
    userSignIn(userName){
      sessionStorage.userName = userName;
      this.userName = sessionStorage.userName;
    }
  }
};
</script>
<style type="scss">
    @import "./styles/common";
    body, html {
        padding: 0;
        margin: 0;
    }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
