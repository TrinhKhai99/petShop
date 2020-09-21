import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import state from "./state";
import * as getters from './getter';
import * as mutations from './mutation';
import * as actions from './action';
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
