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
    } 
  },
  mutations: {
    AddIncrement(state, payload) {
        // 函数接受一个参数state，就是上面这个state
        // 如果在这里面写异步的话状态会发生混乱，mutation的设计是同步的
    //   setTimeout(function () {
    //     state.num += payload
    //   }, 10)
    },
    MinIncrement(state, payload) {
        // 函数接受一个参数state，就是上面这个state
      state.num -= payload.n
    },
    actions: {
        addAction(context) {
            // context是一个对象
          console.log(context);
          setTimeout(() => {
                // state.num += payload
            context.commit('AddIncrement', {num: 5})
          }, 10)
        },
        textAction() {
          console.log('textAction被触发了')
        }

    }
  }
})

export default store





import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        num: 102,
        name: 'stark',
        age: 18
    },
    getters: {
        count: state => {
            return state.num > 130 ? 130 : state.num;
        }
    },
    mutations: {
        AddIncrement(state, payload) {
            // 函数接收一个参数state 这个state就是上面的state
            console.log(payload);
            // state.num += num.n;
            // 如果在这里面写异步的话， 状态会发生混乱
            // mutations设计原则是同步的

            // setTimeout(() => {
            state.num += payload.num;
            // }, 1000)

        },
        MinIncrement(state, num) {
            state.num -= num;
        }
    },
    actions: {
        addAction(context) {
            // context是一个对象
            console.log(context);
            setTimeout(() => {
                // state.num += payload.num;

                context.commit('AddIncrement', { num: 5 })
            }, 1000)

            context.dispatch('textAction');

        },
        textAction() {
            console.log("textAction触发了");
        }
    }
})

export default store