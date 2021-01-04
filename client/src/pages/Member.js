import React from 'react'
import Banner from '../components/Banner'
import MemberSidebar from '../components/MemberSidebar'

const Home = (props) => {
  console.log('props in Home', props.route.breadcrumbName)
  return (
    <>
      <MemberSidebar />
      <Banner pagename="首頁" />
    </>
  )
}

const Mail = (props) => {
  console.log('props in Mail', props.route.breadcrumbName)
  return (
    <>
      <MemberSidebar />
      <Banner pagename="我的信箱" />
    </>
  )
}

const Refund = (props) => {
  console.log('props in Refund', props.route.breadcrumbName)
  return (
    <>
      <MemberSidebar />
      <Banner pagename="退款申請" />
    </>
  )
}

export { Home, Mail, Refund }
