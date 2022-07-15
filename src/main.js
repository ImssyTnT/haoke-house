import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Toast } from 'vant'

import 'amfe-flexible'
import 'vant/lib/index.css'
import './assets/fonts/iconfont.css'

Vue.use(Toast)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
