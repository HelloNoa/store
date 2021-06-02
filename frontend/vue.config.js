module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: '//0100.ga:3000',
                changeOrigin: true
            }
        }
    }
}