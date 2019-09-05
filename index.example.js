////console.log('Привет, Мир!')
// Импортировать модуль с использованием синтаксиса CommonJS
////const dep = require('./path/to/dep')
// Импорт модуля с использованием синтаксиса импорта ES6
////import dep from './path/to/dep'
// Импортировать файл CSS
////import './test.css'
// Импортировать файл CSS с помощью CSS-модулей
////import classNames from './test.css'
// Импортировать URL-адрес в файл изображения
////import imageURL from './test.png'

//URL должен быть статически анализируемым
////import fs from 'fs'
// Чтение содержимого в виде строки
////const string = fs.readFileSync(__dirname + '/test.txt', 'utf8')
// Чтение содержимого в качестве Buffer
////const buffer = fs.readFileSync(__dirname + '/test.png')

/* Импортировать другой файл CSS */
////@import './other.css';
/* //Ссылка на файл изображения
    .test {
    background: url('./images/background.png');
    }
*/
////import './custom.scss'

/* //https://ru.parceljs.org/code_splitting.html
    import 'babel-polyfill'
    import './app'
*/


/*
    <!-- production Vue.js
    <script src="./node_modules/vue/dist/vue.min.js"></script> -->
    <!-- Dev Vue.js
    <script src="./node_modules/vue/dist/vue.js"></script> -->
<!-- // this requires the compiler
<script>
        new Vue({
  template: '<div>{{ hi }}</div>'
})
</script>
-->

<!-- // this does not
new Vue({
  render (h) {
    return h('div', this.hi)
  }
}) -->
*/