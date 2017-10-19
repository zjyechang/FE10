<template>
  <div>
      <router-link :to="'/drrr/'+item.id" v-for="(item,index) in userList" :key="index" tag="p">{{item.username}}</router-link>
        <div>
            <p> 姓名：{{userInfo.username}}</p>
            <p> 爱好：{{userInfo.hobby}}</p>
            <p> 性别：{{userInfo.sex}}</p>
        </div>
  </div>
</template>

<script>
let data = [
        {
            id:1,
            tip:'vip',
            username:'luchang',
            sex:'男',
            hobby:'coding'
        },
        {
            id:2,
            tip:'vip',
            username:'guomian',
            sex:'男',
            hobby:'女'
        },
        {
            id:3,
            tip:'common',
            username:'zhangming',
            sex:'男',
            hobby:'bug'
        },
    ]
export default {
    
    data(){
        return {
            userList:data,
            userInfo:'',
        }
    },
    watch:{
        $route(){
            this.getData();
        }
    },
    created(){
        this.getData();
        console.log(this.userInfo)
    },
    methods: {
        getData(){
            // 思路：
                // 在浏览器输入id
                // 然后在页面中显示不同的数据

                // 在路由里面写 userId 
                // 怎么获取浏览器的id参数
            console.log(this.$route.params.userId)
            let id = this.$route.params.userId;
            if(id){
                this.userInfo = this.userList.filter( (item) => {return item.id == id})[0];
            }
            console.log(this.useInfo)
        }
    }
} 
</script>
