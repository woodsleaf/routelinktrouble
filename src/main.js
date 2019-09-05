/*jshint esversion: 6 */
import Vue from 'vue'; // ./node_modules/vue/dist/vue.js

import App from './App.vue';
//import App from './Test.vue';

new Vue({
  render: h => h(App)
}).$mount('#app');

/*
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});
*/