import React from 'react'

import Banner from '../components/Banner'
import MemberSidebar from '../components/MemberSidebar'
import Breadcrumb from '../components/Breadcrumb'
import MainMail from './MainMail'
import MainOrder from './MainOrder'
import MainMember from './MainMember'
import MainFavorites from './MainFavorites'
import MainSetting from './MainSetting'
import MainContact from './MainContact'

const onMatchedRoutes = (matchedRoutes) => {
  // console.log(matchedRoutes)

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

const Order = ({ route, location }) => {
  return (
    <>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <MemberSidebar />
      <MainOrder />
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
      <MainContact />
    </>
  )
}

export { Home, Mail, Order, Member, Favorites, Coupon, Setting, Contact }
