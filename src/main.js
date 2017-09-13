import Vue from 'vue'
import App from './App.vue'
import VueCharts from 'Vue-charts'

Vue.use(VueCharts)

new Vue({
  el: '#map',
  render: h => h(App)
})
