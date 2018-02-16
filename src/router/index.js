import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignOut from '@/components/SignOut'
import Return from '@/components/Return'
import ManageItems from '@/components/ManageItems'
import NewUser from '@/components/NewUser'
import Login from '@/components/Login'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signOut',
      name: 'SignOut',
      component: SignOut
    },
    {
      path: '/return',
      name: 'Return',
      component: Return
    },
    {
      path: '/items',
      name: 'ManageItems',
      component: ManageItems
    },
    {
      path: '/newuser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
