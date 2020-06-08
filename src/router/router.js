import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
Vue.use(Router)
const router = new Router({
    routes: [
    {
        path: '*',
        redirect: '/index'
    }, 
    {
        path: '/index',
        name: 'index',
        meta: {
            title : '主页',
            // IsPath: false
         },
         component: () => import ('@/view/index/index'),
        //  children: [{
        //      path: '/land',
        //      name: 'land',
        //      meta: {
        //          title : '账号登录',
        //         //  IsPath: false
        //      },
        //      component: () =>import ('@/view/index/land')                 
        //  }]
    },{
        path: '/land',
        name: 'land',
        meta: {
            title : '账号登录',
            // IsPath: false
         },
         component: () => import ('@/view/index/land'),
    },{
        path: '/forget',
        name: 'forget',
        meta: {
            title : '找回密码',
            // IsPath: false
         },
         component: () => import ('@/view/index/forget'),
    },{
        path: '/home',
        name: 'home',
        meta: {
            title : '我的主页',
            // IsPath: false
         },
         component: () => import ('@/view/home/home'),
    },{
        path: '/school',
        name: 'school',
        meta: {
            title : '寻找校景',
            // IsPath: false
         },
         component: () => import ('@/view/home/school'),
    },{
        path: '/forum',
        name: 'forum',
        meta: {
            title : '校园论坛',
            // IsPath: false
         },
         component: () => import ('@/view/home/forum'),
    },{
        path: '/imgPage',
        name: 'imgPage',
        meta: {
            title : '图库一览',
            // IsPath: false
         },
         component: () => import ('@/view/home/imgPage'),
    },{
        path: '/edit',
        name: 'edit',
        meta: {
            title : '编辑资料',
            // IsPath: false
         },
         component: () => import ('@/view/home/edit'),
    }]
})
router.beforeEach((to, from, next) => {
    // if(to.name !== 'index'){
    //     if(store.state.user.token){
    //         console.log(0)
    //         next();
    //     }else{
    //         console.log(1)
    //         next({ name: 'index' })
    //     }
    // }else{
    //     console.log(2)
    //     next()
    // }
    next()
})
export default router;