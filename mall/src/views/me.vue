<template>
    <div id="me">
        <van-nav-bar
            title="个人中心"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <h1>个人中心等待补充</h1>
    </div>
</template>

<script>
import axios from "axios"
import api from "../assets/config/api"
export default {
    data(){
        return {

        }
    },
    async created(){
        let res1 = await axios.get("http://127.0.0.1:8360/api/")
        console.log(res1)
    },
    methods:{
        onClickLeft:function(){
            this.$router.go(-1)
        }
    }
}
</script>