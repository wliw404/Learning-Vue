import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入并安装 Vant 组件库
import Vant from 'vant'
// import 'vant/lib/index.css'
// 定制主体
// 为了能够覆盖默认的 less 变量，这里要引入 vant 的 less文件
import 'vant/lib/index.less'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
