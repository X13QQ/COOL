import React from 'react'

import Banner from '../components/Banner'
import MemberSidebar from '../components/MemberSidebar'
import Breadcrumb from '../components/Breadcrumb'
import MainMail from './MainMail'
import MainRefund from './MainRefund'
import MainMember from './MainMember'
import MainFavorites from './MainFavorites'
import MainSetting from './MainSetting'

const onMatchedRoutes = (matchedRoutes) => {
  console.log(matchedRoutes)

  return [
    {
      route: {
        path: '/home',
        breadcrumbName: '會員首頁',
      },
    },
    ...matchedRoutes,
  ]
}

const Home = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        // onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <Banner pagename="會員首頁" />
    </>
  )
}

const Mail = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <MainMail />
    </>
  )
}

const Refund = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <MainRefund />
    </>
  )
}

const Member = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <MainMember />
    </>
  )
}

const Favorites = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <MainFavorites />
    </>
  )
}

const Coupon = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <Banner pagename="優惠券" />
    </>
  )
}

const Record = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <Banner pagename="交易紀錄" />
    </>
  )
}

const Setting = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <MainSetting />
    </>
  )
}

const Contact = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <Banner pagename="聯絡我們" />
    </>
  )
}

export {
  Home,
  Mail,
  Refund,
  Member,
  Favorites,
  Coupon,
  Record,
  Setting,
  Contact,
}
