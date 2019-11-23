import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'swiper/dist/css/swiper.css'
import './style/variables.css'
import './assets/font-icon/index'
import 'vue-loaders/dist/vue-loaders.css'
// import './assets/font/font.css'

import "amfe-flexible"
import Msg from 'vue-message'
import Vueloaders from 'vue-loaders'
// import Dutils from 'd-js-utils'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(Vueloaders);
Vue.use(VueAwesomeSwiper);
Vue.use(Msg, {
  text: 'Hello World!', duration: 3000, background: 'rgba(7,8,9,0.8)'
})

Vue.config.productionTip = false

let vueProject = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default vueProject