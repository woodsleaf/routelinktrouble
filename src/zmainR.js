/*jshint esversion: 6 */
import Vue from 'vue';
/*import Json5Pretty from 'vue-json5-pretty/src/index.vue';*/
import routes from './routes';

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute];
      return matchingView ?
       require('./pages/' + matchingView + '.vue') :
       require('./pages/404.vue');
    }
  },
  render (h) {
    return h(this.ViewComponent);
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
/*
export default {
    component: {
      Json5Pretty
    }
};
*/