// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {getCookie} from './module/cookie.js'

//pc端ui注册
/*import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';*/

//懒加载 引入
import { InfiniteScroll } from 'mint-ui';


//移动端ui引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import {getCookie,setCookie} from "./module/cookie.js"


//懒加载
Vue.use(InfiniteScroll);
//移动端ui注册
Vue.use(MintUI)



/*Vue.use(ElementUI);
*/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
