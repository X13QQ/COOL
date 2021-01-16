import Home from '../pages/Home'
import Clothing from '../pages/Clothing'
import About from '../pages/About'
import Product from '../pages/Product'
import Detail from '../pages/Detail'
import News from '../pages/News'

import {
  Mail,
  Order,
  Member,
  Favorites,
  Coupon,
  Setting,
  Contact,
} from '../pages/Member'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/product',
    component: Product,
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/news',
    component: News,
  },
  {
    path: '/clothing',
    component: Clothing,
  },
  {
    path: '/setting',
    component: Setting,
    breadcrumbName: '帳號設定',
  },
  {
    path: '/mail',
    component: Mail,
    breadcrumbName: '我的信箱',
  },
  {
    path: '/order',
    component: Order,
    breadcrumbName: '訂單紀錄',
  },
  {
    path: '/member',
    component: Member,
    breadcrumbName: '會員專區',
  },
  {
    path: '/favorites',
    component: Favorites,
    breadcrumbName: '蒐藏清單',
  },
  {
    path: '/coupon',
    component: Coupon,
    breadcrumbName: '優惠券',
  },
  {
    path: '/contact',
    component: Contact,
    breadcrumbName: '聯絡我們',
  },
]

export default routes
