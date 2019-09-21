<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
    name: 'app',
    components: {
        Navbar
    }
}
/*
    <router-link to="/">{{this.$root.mi.shop}}</router-link>
    <!-- <a href="/#im">Я</a> -->
    <!-- <router-link to="/im">Я</router-link> -->
    <!-- <a href="/#o-nas">О нас</a> -->
    <router-link to="/o-nas">О нас</router-link>
    <a href="/#">Ассортимент</a>
    <!-- <a href="#price">Стоимость</a> -->
    <router-link to="/price">Стоимость</router-link>
    <!-- <a href="#nachinki">Начинки</a> -->
    <router-link to="/nachinki">Начинки</router-link>
    <a href="/#kak-oformit-zakaz">Как оформить заказ</a>
    <!-- <router-link to="/kak-oformit-zakaz">Как оформить заказ</router-link> -->
    <router-link to="/dostavka-oplata">Доставка/Оплата</router-link>
    <router-link to="/contact">Контакты</router-link>
    <router-link to="/navbar">Меню</router-link>
    <!--<router-link to="/actors">Actors</router-link>-->
    <!-- здесь будут отображаться наши компоненты -->
    <router-view></router-view>
*/
</script>

<style>
</style>