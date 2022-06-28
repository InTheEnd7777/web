// // 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
// // tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')
//引入资源文件
import './banner';
import './tabs';
import $ from 'jquery';
$('#swiper').css('background-color', 'red');

import './styles/index.css';
// import './styles/index.less';
import imgUrl from './assets/1.gif';
import './assets/fonts/iconfont.css';
let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);
import imgUrl1 from './assets/logo_small.png';
let img1 = document.createElement('img');
img1.src = imgUrl1;
document.body.appendChild(img1);
// import Vue from 'vue'
import { createApp } from 'vue';
import App from './app.vue'
const app = createApp(App);
app.mount('#app');
class zzz {
  static a = 123;
}

console.log(zzz.a);
