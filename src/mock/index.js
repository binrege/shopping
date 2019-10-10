import Mock from 'mockjs'

Mock.mock('api/getList', 'get', {
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