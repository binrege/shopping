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
