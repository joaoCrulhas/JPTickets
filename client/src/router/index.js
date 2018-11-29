import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CreateUser from '@/components/CreateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/createUser',
      name: 'CreateUser',
      component: CreateUser
    }
  ]
})