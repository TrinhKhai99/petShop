import Vue from 'vue'
import App from './App.vue'
import store from './stores';
import VueRouter from 'vue-router';
import { routes } from './router';
import jQuery from 'jquery';
import Paginate from 'vuejs-paginate'
import Axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'
import '../node_modules/nprogress/nprogress.css'
import NProgress from 'nprogress';
import VueWait from 'vue-wait'

NProgress.configure({ easing: 'ease', speed: 500 });
Vue.component('paginate', Paginate)
window.$ = window.jQuery = jQuery;
Vue.use(VueWait)
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.use(VueRouter)
Vue.config.silent = true
const router = new VueRouter(
  {
    routes
  }
)

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn === 'admin') {
      next()
      return 
    }
    next('/login')
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  wait: new VueWait({
    // Defaults values are following:
    useVuex: true,              // Uses Vuex to manage wait state
    vuexModuleName: 'wait',      // Vuex module name
 
    registerComponent: true,     // Registers `v-wait` component
    componentName: 'v-wait',     // <v-wait> component name, you can set `my-loader` etc.
 
    registerDirective: true,     // Registers `v-wait` directive
    directiveName: 'wait',       // <span v-wait /> directive name, you can set `my-loader` etc.
 
  }),
  render: h => h(App)
})
