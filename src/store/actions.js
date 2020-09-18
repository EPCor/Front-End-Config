import types from './types';

export default {
  changeCount({ commit }) {
    setTimeout(() => commit(types.INCREMENT), 1000);
  },
};
