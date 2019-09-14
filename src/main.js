/*jshint esversion: 6 */
//import mi from './mi.js';
import Vue from 'vue';
//import axios from 'axios';
//import VueAxios from 'vue-axios';
//import Vuex from 'vuex';
import App from './App';
import Router from 'vue-router';
Vue.use(Router);  // , Vuex, VueAxios, axios

/*import Json5Pretty from 'vue-json5-pretty/src/index.vue';*/
//import routes from './routes';
//import routes from './routes.js';

const mi = {
    'fullname': 'Виктория Миронова'
};
//console.log(mi.fullname);

import Hello from './components/Home';
import ONas from './components/ONas';
import About from './components/About';
//import Actors from './components/Actors';

/*
const store = new Vuex.Store({
    state: {
        movies: [],
        actors: []
    },
    getters: {
        movies: state => {
            return state.movies
        },
        actors: state => {
            return state.actors
        }
    },
    actions: {
        getMovies (context) {
            axios.get('/api/movies')
                .then((movies) => {
                    context.commit('setMovies', movies)
                })
        },
        getActors (context) {
            axios.get('/api/actors')
                .then((actors) => {
                    context.commit('setActors', actors)
                })
        }
    },
    mutations: {
        setMovies (state, movies) {
            state.movies = movies
        },
        setActors (state, actors) {
            state.actors = actors
        }
    }
})
*/

const routes = [
    {path: '/', component: Hello},
    {path: '/o-nas', component: ONas},
    {path: '/about', component: About},
    //{path: '/actors', component: Actors}
];

const router = new Router({
    mode: 'history',
    routes
})

const app = new Vue({
el: '#app',
data: {
},
computed: {
},
//template: '<App/>',
//store,
router,
render: createElement => createElement(App, {}, router)
}).$mount('#app');


export default {
    mi,
    app,
    router
}