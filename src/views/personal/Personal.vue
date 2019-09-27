<template>
  <div class="all">

    <div class="head">
    <div class="head-picture">
      <img class="picture" src="../../assets/set.svg"/>
      <img class="picture" src="../../assets/message.svg"/>
    </div>
    <div class="head-person">
      <van-image class="head-portrait" round width="5.5rem" height="5.5rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.all{
  width: 100%;
  height: 100%;
}
.head-picture{
  width: 60px;
  height: 30px;
  position: absolute;
  margin: 15px 0 0 78%;
}
.picture{
  width: 22px;
  height: 22px;
  margin-left:4px ;
}

.head{
width: 100%;
background:#ac0215;
position:absolute;
height: 30%;
border-radius: 5px
}
.head-person{
width: 80%;
background:#f5f1f1;
position:relative;
height: 90%;
margin: 50px auto;
border-radius: 5px
}
.head-portrait{
  position: absolute;
  margin:-20px 0 0 15px ;

}
</style>