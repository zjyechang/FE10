<template>
  <div>
      <h2>加减法计算器</h2>
    <div>
        <input type="button" value='+' @click="minHandle(6)">
        <span>{{num}}</span>
        <input type="button" value='-' @click="addHandle(3)">
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
      }
  },
  methods: {
      minHandle(num){
        //   this.num -=5;
        this.$store.commit('MinIncrement',{n:num,name: 'charley'})
      },
      addHandle(num){
        //   this.num +=5;
        this.$store.commit('AddIncrement',num)        
      }
  }
}
</script>

