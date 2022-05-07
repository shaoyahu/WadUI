import Vue from 'vue'
import App from './App.vue'
import WadUI from '../packages/index'
Vue.config.productionTip = false
Vue.use(WadUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
