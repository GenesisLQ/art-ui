import Vue from 'vue'
import App from './App.vue'
// 导入组件
import ArtButton from './components/button.vue'
import ArtDialog from './components/dialog.vue'

import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

// 注册组件
Vue.component(ArtButton.name, ArtButton)
Vue.component(ArtDialog.name, ArtDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
