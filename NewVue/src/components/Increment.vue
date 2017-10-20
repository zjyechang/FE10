<template>
  <div>
      <h2>加减法计算器</h2>
    <div>
        <input type="button" value='-' @click="minHandle(5)">
        <span>{{num}}</span>
        <input type="button" value='+' @click="addHandle(3)">
        {{num2}}
    </div>
  </div>
</template>

<script>
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
  methods: {
      minHandle(num){
        //   this.num -=5;
        // this.$store.commit('MinIncrement',{n:num, name: 'charley'})
        this.$store.commit({
          type: 'MinIncrement',
          n:num,
          name: 'charley'
          })
      },
      addHandle(num){
        //   this.num +=5;
        this.$store.commit('AddIncrement',num)        
      },


  }
}
</script>

