<template>
<div>

    <div v-for="(item,index) in stories" :key="index">
        <div>名字：{{item.title}}</div>
        <div>描述：{{item.ga_prefix}}</div>
        <img :src="getImage(item.images)" alt="">

    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            stories: {}
        }
    },
    created(){
        this.getHttpNews();
    },
    methods: {
        getNews(){
            axios.get('/api/news/latest')
            .then( res => {
                console.log(res.data)
                this.stories = res.data.stories;
            })
        },
        getHttpNews(){
            this.$http.get('/api/news/latest')
            .then( res => {
                console.log(res.data)
                this.stories = res.data.stories;
            })
        },
        getImage(url){
            // 把现在的图片传进来，返回一个不受限制的图片
            if( url ){
                return url[0].replace(/http\w?:\/\//g,'https://images.weserv.nl/?url=')
            }
        }
    }
}

</script>