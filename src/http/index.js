import axios from 'axios';
import qs from 'qs';
export default {
    req(...params) {
        if (params.length === 1) {
            //代表发送的是get请求 params代表的是请求路径
            return axios.get(params)
        }
        if (params.length === 2) {
            //发送的是post请求  第一个参数代表路径  第二个参数代表 请求参数
            return axios.post(params[0], qs.stringify(params[1]))
        }
    }
}