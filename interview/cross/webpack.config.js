
let HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",  //配置模式
    devServer: {
        // 配置代理，代理请求url,以/api开头请求，转发到后端
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                pathRewrite: { // 去掉抬头
                    '/api': ""
                }
            },
            '/api2': {
                target: "http://localhost:3000",
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
}