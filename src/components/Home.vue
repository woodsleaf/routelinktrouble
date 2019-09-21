<template>
  <div id="home">
    <im></im>
    <!-- <o-nas></o-nas> -->
    <!-- <price></price> -->
    <!-- <nachinki></nachinki> -->
    <kak-oformit-zakaz></kak-oformit-zakaz>
  </div>
</template>

<script>
//import MyFancyComponent from './MyFancyComponent';
// $dj.mypicture
import Im from './Im';
//import ONas from './ONas';
//import Price from './Price';
//import Nachinki from './Nachinki';
import KakOformitZakaz from './KakOformitZakaz';
export default {
    name: 'home',
    components: {
        Im,
        KakOformitZakaz
    }
}
//ONas,
//Price,
//Nachinki,
</script>
<!-- инкапсулированные стили компонента
$data.mi.fullname + '1'
$myGlobalStuff.message
-->
<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>