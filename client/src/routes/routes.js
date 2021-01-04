import { Home, Mail, Refund } from '../pages/Member'
const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    breadcrumbName: '首頁',
  },
  {
    path: '/mail',
    component: Mail,
    breadcrumbName: '我的信箱',
  },
  {
    path: '/refund',
    component: Refund,
    breadcrumbName: '退款申請',
  },
]

export default routes
