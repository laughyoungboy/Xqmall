<template>
    <div id="subject">
        <van-nav-bar
            title="专题列表"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <h1>专题列表等待补充</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        onClickLeft:function(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>

</style>