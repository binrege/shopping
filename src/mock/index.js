<<<<<<< HEAD
<<<<<<< HEAD
import Mock from "mockjs";

Mock.mock("api/SearchList_", "get", {
  //code为200代表请求成功
  code: 200,
  msg: "success",
  "data|20": [
    {
      image: "@dataImage(150x150,@cname)",
      county: "@county(true)",
      date: "@date",
      name: "@cname",

    }
  ]
});
=======
import Mock from 'mockjs'

Mock.mock('api/getList', 'get', {
    // 200为成功
    code: 200,
    msg: 'success',
    'data|6': [{
        image: '@dataImage(32x32)',
        name: '@cname()',
        images: '@dataImage(300x300)'
    }]

})
>>>>>>> 35300706a8d8746a970e788a820ed45ec1891ab3
=======
import Mock from 'mockjs'

Mock.mock('api/getList', 'get', {
    //code为200代表请求成功
    code: 200,
    msg: 'success',
    'data|6': [{
        image: '@dataImage(124x142)',
        text: '@csentence(10,16)',
        img: '@dataImage(70x70)',
    }]
})
>>>>>>> 2e5ebc38708571d8b1ed6945ae63f4c2c07a7d66
