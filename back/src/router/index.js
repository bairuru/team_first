import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import all from '@/components/all'

import alert from '@/components/section/alrticle/alter'
import add from '@/components/section/alrticle/add'
import lists from '@/components/section/alrticle/lists'

import one from '@/components/section/classify/one'
import two from '@/components/section/classify/two'
import listClass from '@/components/section/classify/listClass'

import port from '@/components/section/port/port'
import front from '@/components/section/port/front'
import rear from '@/components/section/port/rear'
import portList from '@/components/section/port/port_list'

import resume from '@/components/section/keepBack/resume'
import stay from '@/components/section/keepBack/stay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/all',
      name: 'all',
      component: all,
      children: [
        {
          path: 'alert',
          name: 'alert',
          component: alert
        },
        {
          path: 'add',
          name: 'add',
          component: add
        },
        {
          path: 'lists',
          name: 'lists',
          component: lists
        },
        {
          path: 'one',
          name: 'one',
          component: one
        },
        {
          path: 'two',
          name: 'two',
          component: two
        },
        {
          path: 'listClass',
          name: 'listClass',
          component: listClass
        },
        {
          path: 'port',
          name: 'port',
          component: port
        },
        {
          path: 'portList',
          name: 'portList',
          component: portList
        },
        {
          path: 'front',
          name: 'front',
          component: front
        },
        {
          path: 'rear',
          name: 'rear',
          component: rear
        },
        {
          path: 'resume',
          name: 'resume',
          component: resume
        },
        {
          path: 'stay',
          name: 'stay',
          component: stay
        }
      ]
    }
  ]
})
