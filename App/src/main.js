import tool from "./util/tool" // webpack 
import Vue from "vue"
import App from "./App.vue"
import router from './router'

 new Vue({ // 实例化
    el: '#app',
    components: {
        App
    },
    router,
    template: '<App/>'
})