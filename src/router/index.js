import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import userSite from '@/components/userSite'
import everyOneCode from '@/components/everyOneCode'
import everyOneCodeEdit from '@/components/everyOneCodeEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/edit',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/everyOneCode',
      name: 'everyOneCode',
      component: everyOneCode
    },
    {
      path: '/usersite/:siteName',
      name: 'userSite',
      component: userSite
    },
    {
      path: '/everyOneCode/:userSiteName',
      name: 'userSiteName',
      component: everyOneCodeEdit
    }
  ]
})
