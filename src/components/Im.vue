<template>
  <div id="im">
    <p class="flx">
        <span class="img120">
            <img :src="this.$root.mi.mypicture" />
        </span>
        <span>Я благодарна каждому заказчику. Спасибо Вам за проявленный интерес и доверие!
        </span>
    </p>
    <p>{{$dj.fullname}}</p>
    <p>Основатель и кондитер {{$dj.shop}}<p>
  </div>
</template>

<script>
//import MyFancyComponent from './MyFancyComponent';
// $dj.mypicture
export default {
    name: 'im',
}
</script>
<!-- инкапсулированные стили компонента
$data.mi.fullname + '1'
$myGlobalStuff.message
-->
<style>
</style>