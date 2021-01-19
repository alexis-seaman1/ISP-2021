import Vue from 'vue'
import VueRouter from 'vue-router'

import profilePage from '../components/profile.vue'
import postsPage from '../components/posts.vue'
import chatsPage from '../components/chats.vue'
import loginPage from '../components/login.vue'
import homePage from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: profilePage
  },
  {
    path: '/posts',
    name: 'Posts',  
    component: postsPage
  }, 
  {
    path: '/chats',
    name: 'Chats',
    component: chatsPage
  }, 
  {
    path: '/login',
    name: 'Login',
    component: loginPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
