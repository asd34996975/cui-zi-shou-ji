import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
import home from '@/components/home.vue'
import news from '@/components/news.vue'
import set from '@/components/set.vue'
import shop from '@/components/shop.vue'
import mobile from '@/components/mobile.vue'
import commoditydetails from '@/components/commodityDetails.vue'


export default new Router({
 routes: [
     {path:'/home',
      name:'home',
      component: home
    },
      {path:'/news',
      name:'news',
      component: news
    },
      {path:'/set',
      name:'set',
      component: set
    },
      {path:'/shop',
      name:'shop',
      component: shop
    },
    {path:'/64',
    name:'mobile',
    component: mobile
    },
    {path:'/77',
    name:'air',
    component: mobile
    },
    {path:'/60',
    name:'parts',
    component: mobile
    },
    {path:'/69',
    name:'rim',
    component: mobile
    },
    {path:'/61',
    name:'excellent',
    component: mobile
    },
    {path:'/commoditydetails',
    name:'commoditydetails',
    component: commoditydetails
    },
    {path:'*',
    redirect:'/home'}],
 linkActiveClass:'mui-active'
})
