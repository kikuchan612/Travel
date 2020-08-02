import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/reset.css'
import '../public/css/border.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')