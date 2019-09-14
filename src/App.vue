<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/o-nas">О нас</router-link>
    <router-link to="/about">About</router-link>
    <!--<router-link to="/actors">Actors</router-link>-->
    <!-- здесь будут отображаться наши компоненты -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
}
</script>
<!-- стили компонента -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>