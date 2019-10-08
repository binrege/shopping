<template>
  <div id="app">
<<<<<<< HEAD

    <div id="nav">
<<<<<<< HEAD
<<<<<<< HEAD
      
=======

>>>>>>> origin/yangyu
    </div>

    <router-view/>
  </div>
</template>

<<<<<<< HEAD
<<<<<<< HEAD
<style lang='scss'>
  @import './style/common'
=======
=======
<style lang="scss">
  @import "./styles/common";
  body, html {
    padding: 0;
    margin: 0;
  }
=======
    </div>
    <router-view />
  </div>
</template>

=======
    <router-view />
  </div>
</template>
>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153
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
<<<<<<< HEAD
>>>>>>> wuhong

>>>>>>> d710e111ff3c1f6a9d4e3d1474b8b2fa54ca9b59
<style>

>>>>>>> origin/yangyu
=======
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153
</style>
