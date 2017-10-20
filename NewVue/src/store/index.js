import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    num: 100
  },
  mutations: {
    AddIncrement(state, payload) {
        // 函数接受一个参数state，就是上面这个state
      state.num += payload;
    },
    MinIncrement(state, payload) {
        // 函数接受一个参数state，就是上面这个state
      state.num -= payload.n;
    }
  }
})

export default store