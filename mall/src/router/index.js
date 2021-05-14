import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import category from '@/views/category'
import categorylist from '@/views/categorylist'
import product from '@/views/product'
import buycart from '@/views/buycart'
import me from '@/views/me'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/category',
    name:'category',
    component:category
  },
  {
    path:'/categorylist/:id',
    name:'categorylist',
    component:categorylist,
    //可以使路由页面获取当前id
    props:true
  },
  {
    path:'/product/:id',
    name:'product',
    component:product,
    props:true
  },
  {
    path:"/buycart",
    name:"buycart",
    component:buycart
  },
  {
    path:"/me",
    name:'me',
    component:me
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login.vue'),
    meta:{isLogin:false}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


router.beforeEach((to,from,next)=>{
  console.log(to)
  if(to.path === '/me' && to.meta === false){
    next('/login')
  }else{
    next()
  }
})
  
export default router
