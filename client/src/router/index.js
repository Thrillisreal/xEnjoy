import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import About from '../pages/About'

Vue.use(VueRouter)

const routes = [
  {path:'/home', component:Home, name:'Home'},
  {path: '/signin', component:SignIn, name:'SignIn' },
  {path: '/', component:SignUp, name:'SignUp' },
  {path: '/about', component:About, name:'About' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
