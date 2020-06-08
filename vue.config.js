const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    //打包配置
    publicPath:'',
    outputDir: './dist/web_school',
    assetsDir:'static',

    // 本地启动配置
    devServer: {
        open: true,  
        // host: '192.168.2.13',  
        host: 'localhost',
        port: 8080,  
        https: false,  
        hotOnly: false,  
        proxy: null,
    },
    // 自动打开
    lintOnSave: true,

    // 自定义路径
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_js', resolve('src/customJs'))
            .set('_c', resolve('src/components'))
            .set('_bj', resolve('src/img/bjImg'))
            .set('_icon', resolve('src/img/iconImg'))
            .set('_imgList', resolve('src/img/imgList'))
    }
}