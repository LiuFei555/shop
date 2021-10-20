module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
        },
    },
    //开启代理服务器
    // devServer: {
    //     proxy: 'http://119.23.160.159:3000'
    // }
    devServer: {
        proxy: {
            '/api': {
                target: 'http://119.23.160.159:3000',
                ws: true,
                changeOrigin: true
            }
        }
    }
}