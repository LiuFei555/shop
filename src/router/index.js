//引入路由
import VueRouter from "vue-router";

//引入组件
import front from "../componemts/front"
import login from "../componemts/login"
import Home from "../componemts/Home"
import users from "../componemts/users"

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: "login"
        },
        {
            path: "/front",
            component: front,
            redirect: '/Home',
            children: [
                {
                    path: '/Home',
                    component: Home
                },
                {
                    path: '/users',
                    component: users
                }
            ]
        },
        {
            path: '/login',
            component: login,

        }
    ]
})
//配置前置路由守卫控制页面访问权限
router.beforeEach((to, from, next) => {
    if (to.path === "/login") return next()
    //获取token
    const tokenstr = window.sessionStorage.getItem('token')
    if (!tokenstr) return next('/login')
    next()
})
export default router