import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    num: 100
  },
  getters: {
    count: state => {
        return state.num >130?130:state.num
    },
  },
  mutations: {
    AddIncrement(state, payload) {
        // 函数接受一个参数state，就是上面这个state
        // 如果在这里面写异步的话状态会发生混乱，mutation的设计是同步的
    //   setTimeout(function () {
        state.num += payload
    //   }, 10)
    },
    MinIncrement(state, payload) {
        // 函数接受一个参数state，就是上面这个state
      state.num -= payload.num
    },
  },
    actions: {
        addAction(context) {
            // context是一个对象
            console.log(context);
            setTimeout(() => {
                // state.num += payload
            context.commit('MinIncrement', {num: 5})
            }, 1000)
            context.dispatch('textAction');
            
        },
        textAction() {
            console.log('textAction被触发了')
        }

    }
})

export default store

