import React from 'react'

import HeaderOther from '../components/HeaderOther'
import Banner from '../components/Banner'
import MemberSidebar from '../components/MemberSidebar'
import { Row, Container } from 'react-bootstrap'
import Breadcrumb from '../components/Breadcrumb'
import MainMail from './MainMail'
import MainOrder from './MainOrder'
import MainMember from './MainMember'
import MainFavorites from './MainFavorites'
import MainSetting from './MainSetting'
import MainContact from './MainContact'

const id = JSON.parse(localStorage.getItem('user'))[0].id
const onMatchedRoutes = (matchedRoutes) => {
  // console.log(matchedRoutes)

  return [
    {
      route: {
        path: '/setting',
        breadcrumbName: '會員首頁',
      },
    },
    ...matchedRoutes,
  ]
}

const Setting = ({ route, location }) => {
  return (
    <>
      <HeaderOther />
      <Container>
        <Row>
          <Breadcrumb
            locationPath={location.pathname}
            // onMatchedRoutes={onMatchedRoutes}
          />
          <MemberSidebar />
          <MainSetting id={id} />
        </Row>
      </Container>
    </>
  )
}

const Mail = ({ route, location }) => {
  return (
    <>
      <HeaderOther />
      <Container>
        <Row>
          <Breadcrumb
            locationPath={location.pathname}
            onMatchedRoutes={onMatchedRoutes}
          />
          <MemberSidebar />
          <MainMail />
        </Row>
      </Container>
    </>
  )
}

const Order = ({ route, location }) => {
  return (
    <>
      <HeaderOther />
      <Container>
        <Row>
          <Breadcrumb
            locationPath={location.pathname}
            onMatchedRoutes={onMatchedRoutes}
          />
          <MemberSidebar />
          <MainOrder id={id} />
        </Row>
      </Container>
    </>
  )
}

const Member = ({ route, location }) => {
  return (
    <>
      <HeaderOther />
      <Container>
        <Row>
          <Breadcrumb
            locationPath={location.pathname}
            onMatchedRoutes={onMatchedRoutes}
          />
          <MemberSidebar />
          <MainMember id={id} />
        </Row>
      </Container>
    </>
  )
}

const Favorites = ({ route, location }) => {
  return (
    <>
      <HeaderOther />
      <Container>
        <Row>
          <Breadcrumb
            locationPath={location.pathname}
            onMatchedRoutes={onMatchedRoutes}
          />
          <MemberSidebar />
          <MainFavorites id={id} />
        </Row>
      </Container>
    </>
  )
}

const Coupon = ({ route, location }) => {
  return (
    <>
      <HeaderOther />
      <Container>
        <Row>
          <Breadcrumb
            locationPath={location.pathname}
            onMatchedRoutes={onMatchedRoutes}
          />
          <MemberSidebar />
          <Banner pagename="優惠券" />
        </Row>
      </Container>
    </>
  )
}

const Contact = ({ route, location }) => {
  return (
    <>
      <HeaderOther />
      <Container>
        <Row>
          <Breadcrumb
            locationPath={location.pathname}
            onMatchedRoutes={onMatchedRoutes}
          />
          <MemberSidebar />
          <MainContact />
        </Row>
      </Container>
    </>
  )
}

export { Mail, Order, Member, Favorites, Coupon, Setting, Contact }
