import Vue from 'vue'
import VueRouter from 'vue-router'



const Home     = () => import('view/home/Home')
const Category = () => import('view/category/Category')
const ShopCart = () => import('view/shopcart/ShopCart')
const Profile  = () => import('view/profile/Profile')
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
