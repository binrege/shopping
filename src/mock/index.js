import Mock from 'mockjs'

Mock.mock('api/getList', 'get', {
    //200代表请求成功
    code: 200,
    msg: 'success',
    'data|10': [{
        image: '@dataImage(32x32)',
        name: '@cname()',

    }],

})