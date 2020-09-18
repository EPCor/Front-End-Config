export { default as types } from './types';
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import modules from './modules';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  state: { count: 0 },
  getters,
  mutations,
  actions,
});

console.log(store);
export default store;
