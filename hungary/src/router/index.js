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
import Shop_detail from '../components/elema/shop/shop_detail'
import Shop_activity from '../components/elema/shop/shop_activity'
import Shop_business from '../components/elema/shop/shop_business'
import Tian from '../components/elema/food/tian'
import Food from '../components/elema/food/food'
import Money from '../components/elema/food/money'
import New from '../components/elema/food/new'
import Ontime from '../components/elema/food/ontime'
import Reservation from '../components/elema/food/reservation'
import Simple from '../components/elema/food/simple'
import Chuan from '../components/elema/food/chuan'
import Spicy from '../components/elema/food/spicy'
import Baozi from '../components/elema/food/baozi'
import Cake from '../components/elema/food/cake'
import Japan from '../components/elema/food/japan'
import Fruit from '../components/elema/food/fruit'
import Hamburg from '../components/elema/food/hamburg'
import Pizza from '../components/elema/food/pizza'
import Register from '../components/mine/register/register'
import Service from '../components/mine/serviceCenter/service'
import Question from '../components/mine/serviceCenter/question'
import Information from '../components/mine/information/information'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/elema',
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
      path: '/tian',
      name: "tian",
      component: Tian
  },
  {
      path: '/food',
      name: "food",
      component: Food
  },
  {
      path: '/money',
      name: "money",
      component: Money
  },
  {
      path: '/new',
      name: "new",
      component: New
  },
  {
      path: '/ontime',
      name: "ontmie",
      component: Ontime
  },
  {
      path: '/reservation',
      name: "reservation",
      component: Reservation
  },
  {
      path: '/simple',
      name: "simple",
      component: Simple
  },
  {
      path: '/chuan',
      name: "chuan",
      component: Chuan
  },
  {
      path: '/spicy',
      name: "spicy",
      component: Spicy
  },
  {
      path: '/baozi',
      name: "baozi",
      component: Baozi
  },
  {
      path: '/cake',
      name: "cake",
      component: Cake
  },
  {
      path: '/japan',
      name: "japan",
      component: Japan
  },
  {
      path: '/fruit',
      name: "fruit",
      component: Fruit
  },
  {
      path: '/hamburg',
      name: "hamburg",
      component: Hamburg
  },
  {
      path: '/pizza',
      name: "pizza",
      component: Pizza
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
      path:'/shop',
      name:"shop",
      component:Shop
    },{
        path:"/shop_business",
        name:"shop_business",
        component:Shop_business
    },{
      path:'/business/:id/:usename/:Image/:dataname/:rate/:count/:rating/:month/:price',
      name:"business",
      component:Business,
    },{
        path:'/shop_detail',
        name:"shop_detail",
        component:Shop_detail,
    },{
        path:'/shop_activity',
        name:"shop_activity",
        component:Shop_activity,
    },
    {path: '/register',component: Register},
    {path: '/service',component: Service},
    {path: '/questionDetail',component: Question},
    {path: '/information',name:'information',component: Information}
  ]
})
