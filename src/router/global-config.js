// 书写全局导航守卫 
import router from './index';
// 1.前置守卫
// // 挂载路由守卫
// 挂载路由守卫
router.beforeEach((to, from, next) => {
    // to and from are both route objects.must call `next`.
    // if (to.path === '/mine') return next()
    // const tokenStr = window.sessionStorage.getItem('token')
    // if (!tokenStr) return next('/mine')
    // next()

    const token = window.sessionStorage.getItem('token')
    if (!token) {
        if (to.path === '/home/zhy') {
            next('/mine');
        } else {
            next()
        }
    } else {
        next()

    }



    // if (to.path === '/recommend') {
    //     if (confirm('hello')) {
    //         next()
    //     } else {
    //         next(false)
    //     }
    // } else {
    //     next()
    // }



    // next()
})

router.afterEach((to, from) => {
    // to and from are both route objects.
    if (to.path === '/recommend') {
        alert('bye')
    }
})