import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CreateUser from '@/components/CreateUser'
import CreateEvent from '@/components/CreateEvent'
import UsersList from '@/components/UsersList'
import EventsList from '@/components/EventsList'

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
    },
    {
      path:'/createEvent',
      name: 'CreateEvent',
      component: CreateEvent
    },
    {
      path:'/users',
      name: 'UsersList',
      component: UsersList
    },
    {
      path:'/events',
      name: 'EventsList',
      component: EventsList
    },
  ]
})