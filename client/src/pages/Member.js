import React from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import routes from '../routes/routes'
import { Container } from 'react-bootstrap'

import Banner from '../components/Banner'
import MainMail from '../components/MainMail'
import MemberSidebar from '../components/MemberSidebar'
import Breadcrumb from '../components/Breadcrumb'
import MainRefund from '../components/MainRefund'

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
      <Banner pagename="會員專區" />
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
      <Banner pagename="蒐藏清單" />
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
      <Banner pagename="帳號設定" />
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
