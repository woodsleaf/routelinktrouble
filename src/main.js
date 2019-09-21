const mi = require('./mi.js').mi;
const miuse = require('./miuse.js').miuse;
//import fs from 'fs';
//console.log(mi.fullname);
import Vue from 'vue';
//import axios from 'axios';
//import VueAxios from 'vue-axios';
//import Vuex from 'vuex';
import App from './App';
import Router from 'vue-router';
//import sharedplugin from './sharedplugin';
/*
const sharedplugin = {
    message: 'my global message'
}
sharedplugin.install = function() {
    Object.defineProperty(Vue.prototype, '$myGlobalStuff', {
        get() { return sharedplugin }
    })
}*/
Vue.use(Router/*, sharedplugin*/);  // , Vuex, VueAxios, axios

//import routes from './routes';
//import routes from './routes.js';
import Hello from './components/Home';
import Im from './components/Im';
import ONas from './components/ONas';
import Price from './components/Price';
import Nachinki from './components/Nachinki';
import KakOformitZakaz from './components/KakOformitZakaz';
import DostavkaOplata from './components/DostavkaOplata';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
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

const shared = {
    api: 'http://localhost/myApi',
    mySharedMethod(){
        //do shared stuff
        return {a:1, b:2};
    }
}

//const mo = {a:1, b:2};

const routes = [
    {path: '/', component: Hello},
    {path: '/#im', component: Im},
    {path: '/o-nas', component: ONas},
    {path: '/price', component: Price},
    {path: '/nachinki', component: Nachinki},
    {path: '/#kak-oformit-zakaz', component: KakOformitZakaz},
    {path: '/dostavka-oplata', component: DostavkaOplata},
    {path: '/contact', component: Contact},
    {path: '/navbar', component: Navbar},
    //{path: '/actors', component: Actors}
];

const router = new Router({
    mode: 'history',
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes
})
Vue.prototype.$appName = 'Моё приложение';
Vue.prototype.$dj = mi;
//mi: mi
const vm = new Vue({
    beforeCreate: function () {
        console.log(this.$appName);
    },
    el: '#app',
    props: {
    },
    data: {
        mi: mi,
        shared
    },
    computed: {
    },
    //template: '<App/>',
    //store,
    router,
    render: createElement => createElement(App, {}, router)
}).$mount('#app');
//console.log(mi.fullname);
/*
export default {
    mi,
    app,
    router
}*/
//exports.mi = mi;
exports.vm = vm;
//exports.router = router;
exports.miuse = miuse;
//exports.mi = mi;
//mo as mo, mi
//export {app as default};
export {mi as default};
