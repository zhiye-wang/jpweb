import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import change from '../components/change'
import shoppingcart from '../components/shoppingcart.vue'
import mine from '../components/mine.vue'
import detail from '../components/detail.vue'
import femaleclothes from '../components/femaleclothes'
import maleclothes from '../components/maleclothes'
import sidebar from '../components/sidebar.vue'
import bag from '../components/bag.vue'
import xiekuabao from '../components/xiekuabao.vue'
import shoutibao from '../components/shoutibao.vue'
import laganxiang from '../components/laganxiang.vue'
import yurongfu from '../components/yurongfu.vue'
import maoshan from '../components/maoshan.vue'
import weiyi from '../components/weiyi.vue'
import jeans from '../components/jeans.vue'
import jiake from '../components/jiake.vue'
import timeLimit from '../components/timeLimit.vue'
import Login from '../components/login.vue'
import mobileLogin from '../components/mobileLogin.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:home
    },
     {
      path:'/home',
      component:home
    },
    {
      path:'/change',
      component:change,
    },
    {
      path:'/shoppingcart',
      component:shoppingcart
    },
    {
      path:'/mine',
      component:mine
    },
    {
      path:'/detail/:id',
      component:detail
    },
    {
      path:'/sidebar',
      component:sidebar,
      children:[{
        path:'femaleclothes',
        component:femaleclothes
      },{
         path:'maleclothes',
        component:maleclothes
      },{
        path:'bag',
        component:bag
      }]
    },{
      path:'/xiekuabao',
      component:xiekuabao
    },{
      path:'/shoutibao',
      component:shoutibao
    },{
      path:'/laganxiang',
      component:laganxiang
    },{
      path:'/yurongfu',
      component:yurongfu
    },{
      path:'/maoshan',
      component:maoshan
    },{
      path:'/weiyi',
      component:weiyi
    },{
      path:'/jeans',
      component:jeans
    },{
      path:'/jiake',
      component:jiake
    },{
      path:'/timeLimit',
      component:timeLimit
    },,{
      path:'/login',
      component:Login,
      children:[
        {
        path:'mobileLogin',
        component:mobileLogin
      },
      {
        path:'mobileLogin',
        component:mobileLogin
      }
      ]
    }
  ]
})
