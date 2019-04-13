import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default () => {
  return new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
  });
};
