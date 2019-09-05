/*jshint esversion: 6 */
import Vue from 'vue'; // ./node_modules/vue/dist/vue.js

import App from './App.vue';
//import App from './Test.vue';

new Vue({
  render: h => h(App)
}).$mount('#app');