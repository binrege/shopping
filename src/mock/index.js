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