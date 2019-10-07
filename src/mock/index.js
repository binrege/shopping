import Mock from 'mockjs'

Mock.mock('api/getList', 'get', {
    //200代表请求成功
    code: 200,
    msg: 'success',
    'data|10': [{
        images: '@dataImage(1080x400)',
        image: '@dataImage(32x32)',
        image_good: '@dataImage(170x170)',
        title: '@csentence( 3, 7 )',
        imagediscounts: '@dataImage(70x70)',
        going_price: '100',
        // 'origin_price|1-20': number,
        origin_price: '80',
        name: '@cname()',

    }],

})