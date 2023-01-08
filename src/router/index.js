import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../components/formComponent.vue'
import signupComponent from '../components/signupComponent.vue'
import problemApp from "../components/problemView.vue" ; 
import addProblem from "../components/addProblem.vue"
import profile from "../components/profileComponent.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/problem',
    name: 'problem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login' , 
    name: 'LoginView' ,
    component: LoginView 
  }, {
    path: '/signup' , 
    name:'SignUp' , 
    component: signupComponent 
  }, 
  {
    path: '/profile' , 
    name: 'Profile', 
    component: profile
  } , 
  {
    path:'/problemSolve/:id' ,
    name: 'problemSolve' , 
    component: problemApp
  } , 
  {
    path: '/addProblem' ,
    name: 'addProblem' ,
    component : addProblem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
