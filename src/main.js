import Vue from 'vue'
import App from './App.vue'
import ArtButton from './components/button.vue'

import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

Vue.component(ArtButton.name, ArtButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
