import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.axios = axios;
import Vuex from 'vuex'
Vue.use(Vuex)

import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

import './mui/css/mui.min.css'
import './mui/css/icons-extra.css'

var store=new Vuex.Store({
  state:{
      data:[],
  },
  mutations:{
      add(state,i){
        state.data.push(i)
      }
  }
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
  
})

