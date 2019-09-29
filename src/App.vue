<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userName: sessionStorage.userName
    }
  },

  methods:{
    //子组件(register)将用户名传过来
    userSignIn(userName){
      sessionStorage.userName = userName;
      this.userName = sessionStorage.userName;
    }
  }
  // components: {
  //   [Dialog.Component.name]: Dialog.Component
  // }
}
</script>

<style>

</style>
