import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

/* import chats from './components/chats.vue';
import login from './components/login.vue';
import posts from './components/posts.vue';
import profile from './components/profile.vue';

const routes = [
  {
    name: 'login',
    path: '/', 
    component: login
  }, 
  {
    name: 'profile', 
    path: '/profile', 
    component: profile
  }, 
  {
    name: 'posts', 
    path: '/posts', 
    component: posts
  }, 
  {
    name: 'chats',
    path: '/chats',
    component: chats
  }
]; */
