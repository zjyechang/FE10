<template>
  <div>
      <h2>加减法计算器</h2>
    <div>
        <input type="button" value='-' @click="minHandle(5)">
        <span>{{num}}</span>
        <input type="button" value='+' @click="addHandle(3)">
        {{name}},{{age}},{{num2}}
        getters{{count}}
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
//   data(){
//       return {
//           num:this.$store.state.num
//         //   num: 100
//       }
//   },
  computed: {
      num(){
          return this.$store.state.num
      },
      num2(){
        // return this.num> 130? 130: this.num;
        return this.$store.getters.count
      }
  },
  // 使用方式一：
  // computed: mapState(['num','age','name']),
  // 使用方式二：
  // computed: mapState({
  //   // num:state => state.age,   //写法一
  //   // num: 'num', //写法二
  //   num(state){
  //     return state.num+100
  //   },
  // }),
  // 使用方式三：
  computed: {
    ...mapState({
      num(){
        return this.$store.state.num
      },
      age(){
        return this.$store.state.age
      },
      name(){
        return this.$store.state.name
      }
    })
  },
  methods: {
      minHandle(num){
        //   this.num -=5;
        // this.$store.commit('MinIncrement',{n:num, name: 'charley'})
        
        // this.$store.commit({
          //   type: 'MinIncrement',
        //   n:num,
        //   name: 'charley'
        //   })

        this.$store.dispatch('addAction');
      },
      addHandle(num){
        //   this.num +=5;
        this.$store.commit('AddIncrement',num)        
      },
      // ...mapActions({
      //   addHaldle: 'addActive',
      // })

  }
}
</script>

