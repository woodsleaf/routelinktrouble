/*jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
Vue.use(Router);

/*import Json5Pretty from 'vue-json5-pretty/src/index.vue';*/
//import routes from './routes';

//import routes from './routes.js';

import Hello from './components/Hello'
import About from './components/About';
const routes = [
    {path: '/', component: Hello},
    {path: '/about', component: About}
];

const router = new Router({
    mode: 'history',
    routes
  })

new Vue({
  el: '#app',
  data: {
  },
  computed: {
  },
  //template: '<App/>',
  router,
  render: createElement => createElement(App, {}, router)
}).$mount('#app');

export default {

}