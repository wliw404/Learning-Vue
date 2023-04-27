import Vue from 'vue'
import App from './App.vue'

//该项只是在终端中给予一个小提示，关于开发模式的。无意义，删除即默认true
Vue.config.productionTip = false

//定义全局自定义指令
// Vue.directive('color', {
//     bind(el, binding) {
//         el.style.color = binding.value
//     },
//     update(el, binding) {
//         el.style.color = binding.value
//     },
// })
Vue.directive('color', (el,binding)=>{
  el.style.color = binding.value
})


new Vue({
    render: h => h(App),
}).$mount('#app')
