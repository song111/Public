import Vue from 'vue'
import Router from 'vue-router'
import pagenation from "../pages/subPages/pagenation.vue"
import vtree from "../pages/subPages/vtree.vue"
import home from "../pages/home.vue"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                 {
                    path: '/',
                    name: 'pagenation',
                    component: pagenation
                },
                {
                    path: '/vtree',
                    name: 'vtree',
                    component: vtree
                }
            ]
        },
       

    ],
    scrollBehavior(to, from, savedPosition) {  // 路由跳转，滚到底层
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }

})