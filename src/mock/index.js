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
Mock.mock('api/lh', 'get', {
    //code为200代表请求成功
    code: 200,
    msg: 'success',
    'data|6': [{
        image: '@dataImage(124x142)',
        text: '@csentence(10,16)',
        img: '@dataImage(70x70)',
    }]
})

Mock.mock('api/yyp', 'get', {
    // 200为成功
    code: 200,
    msg: 'success',
    'data|6': [{

        image: '@dataImage(32x32)',
        name: '@cname()',
        images: '@dataImage(300x300)'
    }]

})
Mock.mock('api/getListL', 'get', {
    //200代表请求成功
    code: 200,
    msg: 'success',
    'data|10': [{
        images: '@dataImage(1080x400)',
        image: '@dataImage(32x32)',
        image_good: '@dataImage(170x170)',
        title: '@ctitle( 3, 7 )',
        imagediscounts: '@dataImage(70x70)',
        going_price: '@Int(60,1000)',
        origin_price: '@Int(60,1000)',
        name: '@cname()',
        number: '@Int(100,100000)'

    }],

});
Mock.mock('api/getListR', 'get', {
    //200代表请求成功
    code: 200,
    msg: 'success',
    'data|2': [{

        images: '@dataImage(1080x400)',
        image: '@dataImage(32x32)',
        image_good: '@dataImage(170x170)',
        title: '@ctitle( 3, 7 )',
        imagediscounts: '@dataImage(70x70)',
        going_price: '@Int(60,1000)',
        origin_price: '@Int(60,1000)',
        name: '@cname()',
        number: '@Int(100,100000)'


    }],

})
