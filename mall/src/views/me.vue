<template>
    <div class="main">
        <van-nav-bar
            title="个人中心"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="header">
        <img class="set" src="../assets/img/set.png" alt="">
        <div class="user_info">
          <img src="../assets/img/user-logo-004.png">
          <span class="user_phone">185****1923</span>
        </div>
      </div>
      <div class="nav_myorder">
        <div class="nav_myorder_top">
          <span>我的订单</span>
          <a href="#">查看全部 ></a>
        </div>
        <div class="nav_myorder_content">
          <a href="#">
            <div class="order_icon">
              <img src="../assets/img/icon-mo-001.png" alt="">
            </div>
            <div class="icon_des">待付款</div>
          </a>
          <a href="#">
            <div class="order_icon">
              <img src="../assets/img/icon-mo-002.png" alt="">
            </div>
            <div class="icon_des">待发货</div>
          </a>
          <a href="#">
            <div class="order_icon">
              <img src="../assets/img/icon-mo-003.png" alt="">
            </div>
            <div class="icon_des">待收获</div>
          </a>
          <a href="#">
            <div class="order_icon">
              <img src="../assets/img/icon-mo-004.png" alt="">
            </div>
            <div class="icon_des">待晒单</div>
          </a>
          <a href="#">
            <div class="order_icon">
              <img src="../assets/img/icon-mo-005.png" alt="">
            </div>
            <div class="icon_des">售后服务</div>
          </a>
        </div>
      </div>
      <div class="nav_service">
        <div class="nav_service_top">常用业务</div>
        <div class="nav_service_list">
          <a href="#">
            <div>
              <img src="../assets/img/icon-mo-006.png" alt="">
            </div>
            <span>待付款</span>
          </a>
          <a href="#">
            <div>
              <img src="../assets/img/icon-mo-007.png" alt="">
            </div>
            <span>租赁服务</span>
          </a>
          <a href="#">
            <div>
              <img src="../assets/img/icon-mo-008.png" alt="">
            </div>
            <span>待付款</span>
          </a>
          <a href="#">
            <div>
              <img src="../assets/img/icon-mo-009.png" alt="">
            </div>
            <span>待评级</span>
          </a>
          <a href="#">
            <div>
              <img src="../assets/img/icon-mo-010.png" alt="">
            </div>
            <span>售后服务</span>
          </a>
          <a href="#">
            <div>
              <img src="../assets/img/icon-mo-011.png" alt="">
            </div>
            <span>购物车</span>
          </a>
          <a href="#">
            <div>
              <img src="../assets/img/icon-mo-012.png" alt="">
            </div>
            <span>发送提醒</span>
          </a>
          <a href="#">
            <div>
              <img src="../assets/img/icon-mo-013.png" alt="">
            </div>
            <span>收货位置</span>
          </a>
        </div>
      </div>
      <section class="adv">
        <img src="../assets/img/ad-001.png" alt="adv">
      </section>
      <div class="nav_list">
        <a href="#">
          <div class="nav_list_img">
            <img src="../assets/img/icon-fl-mo-001.png" alt="">
          </div>
          <div class="nav_list_info">
            <p>我的分期额度</p>
            <p>></p>
          </div>
        </a>
        <a href="#">
          <div class="nav_list_img">
            <img src="../assets/img/icon-fl-mo-002.png" alt="">
          </div>
          <div class="nav_list_info">
            <p>我的收藏</p>
            <p>></p>
          </div>
        </a>
        <a href="#">
          <div class="nav_list_img">
            <img src="../assets/img/icon-fl-mo-003.png" alt="">
          </div>
          <div class="nav_list_info">
            <p>我的足迹</p>
            <p>></p>
          </div>
        </a>
        <a href="#">
          <div class="nav_list_img">
            <img src="../assets/img/icon-fl-mo-004.png" alt="">
          </div>
          <div class="nav_list_info">
            <p>电子保修卡</p>
            <p>></p>
          </div>
        </a>
        <a href="#">
          <div class="nav_list_img">
            <img src="../assets/img/icon-fl-mo-005.png" alt="">
          </div>
          <div class="nav_list_info">
            <p>投诉中心</p>
            <p>></p>
          </div>
        </a>
      </div>
        <tab-btn></tab-btn>
    </div>
</template>

<script>
import axios from "axios"
import tabBtn from '../components/tabBtn.vue'
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
    },
    components:{
        tabBtn
    }
}
</script>
<style scoped>
    .main {
    width: 100%;
    height: 100%;
    background-color: #e4e4e5;
  }
  .header {
    width: 100%;
    background-image: url('../assets/img/head-bg.png');
    background-size: 100%;
    display: flex;
    align-items: center;
    position: relative;
  }
  .header .set {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .header .user_info {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 40px 0 40px 10px;
  }
  .header .user_info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .header .user_info .user_phone{
    color: #fff;
  }
  .nav_myorder {
    width: 94%;
    background-color: #fff;
    border-radius: 8px;
    margin: -20px auto 10px;
    position: relative;
  }
  .nav_myorder .nav_myorder_top {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .nav_myorder .nav_myorder_top span {
    font-size: 16px;
    font-weight: 600;
  }
  .nav_myorder .nav_myorder_top a {
    font-size: 14px;
    color: #ccc;
  }
  .nav_myorder a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
  }
  .nav_myorder .nav_myorder_content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }
  .nav_myorder .nav_myorder_content .order_icon{
    width: 30px;
    height: 30px;
  }
  .nav_myorder .nav_myorder_content .order_icon img {
    width: 100%;
  }
  .nav_myorder .nav_myorder_content .icon_des {
    font-size: 12px;
    font-weight: normal;
  }
  .nav_service {
    width: 94%;
    background-color: #fff;
    margin: 10px auto 10px;
    border-radius: 8px;
  }
  .nav_service .nav_service_top{
    padding: 0 15px;
    font-size: 16px;
    font-weight: 600;
    height: 50px;
    line-height: 50px;
    margin-bottom: 15px;
    text-align: left;
  }
  .nav_service .nav_service_list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  .nav_service_list a {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1px;
    box-sizing: border-box;
    margin-bottom: 15px;
  }
  .nav_service_list a div {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }
  .nav_service_list a div img {
    width: 100%;
  }
  .nav_service_list a span {
    font-size: 12px;
  }
  section {
    width: 94%;
    margin: 0 auto 10px;
  }
  .adv img{
    width:  100%;
    border-radius: 8px;
  }
  .nav_list {
    width: 94%;
    margin: 0 auto 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-bottom: 52px;
  }
  .nav_list a {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 1px solid #efefef;
    font-size: 14px;
    color: #333;
  }
  .nav_list a .nav_list_img {
    width: 23px;
    height: 23px;
    margin-right: 5px;
  }
  .nav_list a .nav_list_img img {
    width: 100%;
  }
  .nav_list a .nav_list_info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>