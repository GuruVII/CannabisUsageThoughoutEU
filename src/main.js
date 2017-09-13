import Vue from 'vue'
import App from './App.vue'
import VueCharts from 'Vue-charts'

Vue.use(VueCharts)

new Vue({
  el: '#app',
  render: h => h(App)
})
