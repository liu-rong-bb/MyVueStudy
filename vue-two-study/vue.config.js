const webpack = require("webpack");
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js'
        },
    },
    lintOnSave: false,
    // 开启代理服务器
    // 方式一
    // devServer: {
    //     proxy: 'http://192.168.118.1:15051/'
    // },
    // 方法二，可以配置多个代理服务器
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.118.1:15051/',
                ws: true, // 支持websocket
                changeOrigin: true,// 对后台服务器说和服务器一个端口，用于控制请求头中的host
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/api2': {
                target: 'http://192.168.118.1:15051/',
                ws: true, // 支持websocket
                changeOrigin: true,// 对后台服务器说和服务器一个端口，用于控制请求头中的host
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
    // 配置插件参数
    // configureWebpack: {
    //     plugins: [
    //         // 配置 jQuery 插件的参数
    //
    //         new webpack.ProvidePlugin({
    //             $: "jquery",
    //
    //             jQuery: "jquery",
    //
    //             "window.jQuery": "jquery",
    //
    //             Popper: ["popper.js", "default"],
    //         }),
    //     ],
    // },
}
