import Vue from 'vue'
import App from './App.vue'
// import HelloWorld from "./components/test.vue"
import vuetify from './plugins/vuetify';
import Chart from 'chart.js'
import VueChartkick from 'vue-chartkick'

Vue.config.productionTip = false
// Vue.component("hello-world", HelloWorld);
Vue.use(VueChartkick, { adapter: Chart })
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
