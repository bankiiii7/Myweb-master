// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase'
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
Vue.use(BootstrapVue);
Vue.use(VueFire)
Vue.config.productionTip = false
let app;
firebase.auth().onAuthStateChanged(function (user) {
  if(!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App },
      router
    })
  }
});


