module.exports = {
    devServer: {

        host:'0.0.0.0',
        proxy: {
            "/api": {
                ws: false,
                //只需要改动接口的根路径
                target: "http://localhost:8088",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}