import Vue from 'vue'
import App from './App.vue'


import '@common/array-extend.js'
import '@style/reset.scss'
import '@style/layout.scss'
import '@style/scrollbar.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
