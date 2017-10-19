import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        num: 100
    },
    mutations: {
        AddIncrement(state,num) {
            // 函数接受一个参数state，就是上面这个state
            state.num += num;
        },
        MinIncrement(state,num) {
            // 函数接受一个参数state，就是上面这个state
            state.num -= num.n;
        }
    }
})

export default store