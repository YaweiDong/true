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
//余额 ，优惠，积分
import Yet from '../components/mine/balance/yet'
import Discount from '../components/mine/balance/discount'
import Intergral from '../components/mine/balance/integral'
//修改用户名，地址，密码
import Setname from '../components/mine/information/setname'
import Address from '../components/mine/information/address'
import Forget from '../components/mine/information/forget'
import Citysearch from "../components/elema/city/citysearch";

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            redirect: '/elema',
            children: [{
                path: '/elema',
                component: Elema,
            }, {
                path: '/search',
                component: Search
            }, {
                path: '/order',
                component: Order
            }, {
                path: '/mine',
                component: Mine
            }, ]
        }, {
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
        }, {
            path: '/elema/city',
            component: City,
            children: [{
                path: '/mine',
                component: Mine
            }]
        }, {
            path: '/elema/shop',
            component: Shop,
        }, {
            path: '/elema/shop/business',
            component: Business,
        },
        { path: '/register', component: Register },
        { path: '/service', component: Service },
        { path: '/questionDetail', component: Question },
        {
            path: '/information',
            name: 'information',
            component: Information
        },
        //余额，优惠，积分
        { path: '/yet', component: Yet },
        { path: '/discount', component: Discount },
        { path: '/integral', component: Intergral },
        //修改用户名，地址，密码
        { path: '/information/setname', component: Setname },
        { path: '/information/address', component: Address },
        { path: '/information/forget', component: Forget },
        {
            path: "/citysearch",
            name: "citysearch",
            component: Citysearch
        }
    ]
})