import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/reset.css'
import '../public/css/border.css'
import fastClick from 'fastclick'
import '../src/assets/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')