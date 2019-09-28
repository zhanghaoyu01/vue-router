import Home from '../pages/home';

import Category from '../pages/category';

import Recommend from '../pages/recommend';

import ShopCar from '../pages/shopcar';

import Mine from '../pages/mine';

import Error from '../pages/error';

import Zhy from '../pages/home/children/zhy.vue';

import Lsy from '../pages/home/children/lsy.vue';


const routes = [{
        path: '', //路由路径
        redirect: '/home'
    },
    {
        path: '/home', //路由路径
        component: Home, //当前路由路径对应的组件
        children: [{
                path: '', //这里不写‘/’
                redirect: 'zhy'
            },
            {
                path: 'zhy', //这里不写‘/’
                component: Zhy,
                name: 'zhy'
            },
            {
                path: 'lsy',
                component: Lsy,
                name: 'lsy',
                alias: 'lishanyu'
            }
        ]
    },
    {
        path: '/category', //路由路径
        component: Category //当前路由路径对应的组件
    },
    {
        path: '/recommend', //路由路径
        component: Recommend //当前路由路径对应的组件
    },
    {
        path: '/shopcar', //路由路径
        component: ShopCar //当前路由路径对应的组件
    },
    {
        path: '/mine', //路由路径
        component: Mine //当前路由路径对应的组件
    },
    {
        path: '/error', //路由路径
        component: Error //当前路由路径对应的组件
    },
    // {
    //     path: '**', //错误路由匹配，vue规定这个必须放在最下面，它必须将上面的路由全找一遍，找不到才用当前这个
    //     redirect: '/error' //重定向
    // },

];

// 导出模块

export default routes;