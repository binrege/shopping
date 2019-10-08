module.exports = {
    devServer: {
<<<<<<< HEAD
=======

>>>>>>> d710e111ff3c1f6a9d4e3d1474b8b2fa54ca9b59
        host:'0.0.0.0',
        proxy: {
            "/api": {
                ws: false,
                //只需要改动接口的根路径
<<<<<<< HEAD
=======

>>>>>>> d710e111ff3c1f6a9d4e3d1474b8b2fa54ca9b59
                target: "https://douban.uieee.com/v2",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}