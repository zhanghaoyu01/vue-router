/**
 * 此文件为路由的配置文件
 */

//导入vue模块
import Vue from 'vue';

//导入vue-router模块
import VueRouter from 'vue-router';

//导入路由表
import routes from './routes';

//使用中间件
Vue.use(VueRouter);

//实例化VueRouter
const router = new VueRouter({
    mode: "history", //路由模式
    routes //引入路由表
})

//导出router模块
export default router;
//需要在main.js引用；