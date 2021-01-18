import React from 'react'
import HomeContent from '../components/HomeContent'
import Topbtn from '../components/Topbtn'
import Footer from '../components/Footer'
import HeaderHome from '../components/HeaderHome'

function Home() {
  return (
    <>
      <HeaderHome></HeaderHome>
      <HomeContent></HomeContent>
      <Topbtn />
      <Footer />
    </>
  )
}

export default Home
