import Vue from 'vue';
import router from '~/router';
import store from '~/store';
import App from './app.vue';

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
