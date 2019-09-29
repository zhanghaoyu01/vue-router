module.exports = {
    devServer: {
        proxy: { //一对键值对就是一个反向代理的配置
            '/index.php': {
                target: 'http://www.qinqin.net', //目标源就是你要跨域的目标
                ws: true,
                changeOrigin: true //修改目标源为我们当前的源
            }
        }
    }
}