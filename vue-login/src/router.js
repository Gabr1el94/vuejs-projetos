import Vue from 'vue';
import Router from 'vue-router';  //npm install --save vue-router

import Home from './views/Home.vue';
import Login from './views/Login';
import SignUp from './views/SignUp';
import About from './views/About';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registrar',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
});

export default router;
