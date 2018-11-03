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
import Pay_money from '../components/elema/shop/pay_money'
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
//新增地址
import Add from '../components/mine/information/add'
import Adddetail from '../components/mine/information/addDetail'
//红包说明，余额说明，积分说明,历史红包,代金券说明
import HongbaoDetail from '../components/mine/balance/Bdetail/hongbaoDetail'
import YetDetail from '../components/mine/balance/Bdetail/yetDetail'
import IntergralDetail from '../components/mine/balance/Bdetail/intergralDetail'
import Overdue from '../components/mine/balance/Bdetail/overdue'
import Coupon from '../components/mine/balance/Bdetail/coupon'
//兑换红包,推荐有奖
import Exchange from '../components/mine/balance/Bdetail/exchange'
import Commend from '../components/mine/balance/commend'
//会员中心
import Vipcard from '../components/mine/vipcard/vipcard'
//会员说明，购买，兑换，开发票
import InvoiceRecord from '../components/mine//vipcard/invoiceRecord'
import UseCard from '../components/mine/vipcard/useCard'
import VipDescription from '../components/mine//vipcard/vipDescription'
import VipPay from "../components/mine/vipcard/pay";
import Citysearch from "../components/elema/city/citysearch";
//下载
import Download from '../components/mine/download/download'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/elema/city',
      children: [{
        path: '/elema',
        name: "elema",
        component: Elema,
      }, {
        path: '/search',
        component: Search
      }, {
        path: '/order',
        component: Order
      }, {
        path: '/mine',
        name:'mine',
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
    },{
      path:'/shop/:id',
      name:"shop",
      component:Shop
    },{
        path:"/shop_business",
        name:"shop_business",
        component:Shop_business
    },{
      path:'/business',
      name:"business",
      component:Business
    },{
        path:'/shop_detail',
        name:"shop_detail",
        component:Shop_detail,
    },{
        path:'/shop_activity',
        name:"shop_activity",
        component:Shop_activity
    },
    {
      path:'/pay_money',
      name:"pay_money",
      component:Pay_money
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/service',
      component: Service
    },
    {
      path: '/questionDetail',
      component: Question
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    //余额，优惠，积分
    {
      path: '/yet',
      component: Yet
    },
    {
      path: '/discount',
      component: Discount
    },
    {
      path: '/integral',
      component: Intergral
    },
    //修改用户名，地址，密码
    {
      path: '/information/setname',
      component: Setname
    },
    {
      path: '/information/address',
      component: Address
    },
    {
      path: '/information/forget',
      component: Forget
    },
    {
      path: "/citysearch",
      name: "citysearch",
      component: Citysearch
    },
    //红包说明，余额说明，积分说明
    {
      path: '/yet/Detail',
      name: 'yd',
      component: YetDetail
    },
    {
      path: '/discount/Detail',
      name: 'hd',
      component: HongbaoDetail
    },
    {
      path: '/integral/Detail',
      name: 'id',
      component: IntergralDetail
    },

    {
      path: '/discount/overdue',
      component: Overdue
    },
    {
      path: '/discount/coupon',
      component: Coupon
    },
    //兑换红包,推荐有奖
    {
      path: '/discount/exchange',
      component: Exchange
    },
    {
      path: '/discount/commend',
      component: Commend
    },
    {
      path: '/information/address/add',
      component: Add
    },
    //历史红包,代金券说明
    {
      path: '/information/address/add/addDetail',
      name: 'addDetail',
      component: Adddetail
    },
    {
      path: '/vipcard',
      component: Vipcard
    },
    //会员说明，购买，兑换，开发票
    {
      path: '/vipcard/pay',
      component: VipPay
    },
    {
      path: '/vipcard/invoiceRecord',
      name: 'invoiceRecord',
      component: InvoiceRecord
    },
    {
      path: '/vipcard/vipDescription',
      name: 'vipDescription',
      component: VipDescription
    },
    {
      path: '/vipcard/useCard',
      name: 'useCard',
      component: UseCard
    },
    //下载
    {path:'/download',component:Download}

    ]
})