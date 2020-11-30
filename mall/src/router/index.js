import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import category from '@/views/category'
import categorylist from '@/views/categorylist'
import product from '@/views/product'
import buycart from '@/views/buycart'
import subject from '@/views/subject'
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
    path:"/subject",
    name:"subject",
    component:subject
  },
  {
    path:"/me",
    name:'me',
    component:me
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
