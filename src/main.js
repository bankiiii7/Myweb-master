// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase'
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
import AnimateCss from 'animate.css'
import moment from 'moment'
Vue.use(BootstrapVue);
Vue.use(VueFire);
Vue.use(AnimateCss);
Vue.use(moment);
Vue.config.productionTip = false;
let app;
let app2;
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

if(!app2) {
  app2 = new Vue({
    el:'#app',
    data: {
      message: 'This is app 2'
    }
  })
}




