import Vue from 'vue'
import Vuex from 'vuex'
import mushi from './modules/mushi';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mushi1: mushi,
    mushi2: mushi,
  }
})
