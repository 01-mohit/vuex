import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //global state variable
    GlobleCounter: ''
  },
  getters: {
    getCounterValue(state){
      return state.GlobleCounter

    }
  },
  mutations: {
    ADD_COUNTER(state,data){
      state.GlobleCounter=data

    },
    // REMOVE_COUNTER(state,data){

    // }
  

  },
  actions: {
  },
  modules: {
  }
})
