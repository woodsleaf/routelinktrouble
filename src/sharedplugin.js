import Vue from 'vue';
const sharedplugin = {
    message: 'my global message'
}

sharedplugin.install = function(){
    Object.defineProperty(Vue.prototype, '$myGlobalStuff', {
        get () { return sharedplugin }
    })
}

export {sharedplugin as default};