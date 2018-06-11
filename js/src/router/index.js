import Vue from 'vue'
import Router from 'vue-router'
import pagenation from "../pages/pagenation.vue"
import home from "../pages/home.vue"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/pagenation',
            name: 'pagenation',
            component: pagenation
        }

    ],
    scrollBehavior(to, from, savedPosition) {  // 路由跳转，滚到底层
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }

})