import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/homelist/leftlist.vue'
import Detail from '../components/homelist/details.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
