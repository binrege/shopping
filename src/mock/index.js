import Mock from 'mockjs'

Mock.mock('api/getList', 'get', {
    //code为200代表请求成功
    code: 200,
    msg: 'success',
    'data|8': [{
        image: '@dataImage(124x142)',
        text: '@csentence(8,16)',
        img: '@dataImage(70x70)',
    }]
})