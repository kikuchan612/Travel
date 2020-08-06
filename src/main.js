import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store/index'
import '../public/css/reset.css'
import '../public/css/border.css'
import fastClick from 'fastclick'
import '../src/assets/iconfont.css'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')