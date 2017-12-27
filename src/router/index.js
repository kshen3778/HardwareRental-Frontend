import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignOut from '@/components/SignOut'
import Return from '@/components/Return'

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
    }
  ]
})
