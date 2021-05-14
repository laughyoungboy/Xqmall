<template>
    <van-tabbar v-model="tabActive">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="qr" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/buycart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/me">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data(){
        return {
            tabActive:0
        }
    },
    mounted() {
        switch(this.$route.path){
                case '/':
                    this.tabActive = 0;
                    break;
                case "/category":
                    this.tabActive = 1;
                    break;
                case "/buycart":
                    this.tabActive = 2;
                    break;
                case "/me":
                    this.tabActive = 3;
                    break;
                default:
                    this.tabActive = 0;
            }
    },
    
}
</script>