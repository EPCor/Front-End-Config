import Vue from 'vue';
import store from '~/store';
import App from './app.vue';

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
});
