import {
  Home,
  Mail,
  Order,
  Member,
  Favorites,
  Coupon,
  Record,
  Setting,
  Contact,
} from '../pages/Member'

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
    breadcrumbName: '會員首頁',
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
    path: '/record',
    component: Record,
    breadcrumbName: '交易紀錄',
  },
  {
    path: '/setting',
    component: Setting,
    breadcrumbName: '帳號設定',
  },
  {
    path: '/contact',
    component: Contact,
    breadcrumbName: '聯絡我們',
  },
]

export default routes
