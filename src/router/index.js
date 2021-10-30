import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TestAsanaName from '@/components/TestAsanaName'
import Asana from '@/components/Asana'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/asana',
      component: Asana
    },
    {
      path: '/test-asana-name',
      component: TestAsanaName
    }
  ]
})
