import tool from "./util/tool" // webpack 
import Vue from "vue"
import App from "./App.vue"
import router from './router'

// Vue.component('button-counter', {
//     data: function () {
//         return {
//             count: 0
//         }
//     },
//     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })

var app = new Vue({ // 实例化
    el: '#app',
    components: {
        App
    },
    router,
    template: '<App/>'
})