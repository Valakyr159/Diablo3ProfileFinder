import Vue from 'vue'

// BootstrapVue
import './plugins/BootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'

// Archivos locales de la App
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Global
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
