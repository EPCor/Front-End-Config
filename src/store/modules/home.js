import types from '../types';

export default {
  namespaced: true,
  state: () => ({
    someData: 1,
  }),
  getters: {
    drivedData(state, getters, rootState, rootGetter) {
      return state.someData * 2;
    },
  },
  mutations: {
    [types.SOME_MUTATION](state, paylaod, ...rest) {
      state.someData++;
    },
  },
  actions: {
    [types.SOME_ACTION]({ state, commit, rootState }) {},
  },
};
