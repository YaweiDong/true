import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Elema from '@/components/elema/elema'
import Search from '@/components/search/search'
import Order from '@/components/order/order'
import Mine from '@/components/mine/mine'
import City from '../components/elema/city/city'
import Shop from '../components/elema/shop/shop'
import Business from '../components/elema/business/business'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'/elema',
          component:Elema,
        },{
          path:'/search', 
          component:Search
        },{
          path:'/order',
          component:Order
        },{
          path:'/mine',
          component:Mine
        },
      ]
    },{
      path:'/elema/city',
      component:City,
      children:[
        {
          path:'/mine',
          component:Mine
        }
      ]
    },{
      path:'/elema/shop',
      component:Shop,
    },{
      path:'/elema/shop/business',
      component:Business,
    }
  ]
})
