import React from 'react'
import HomeContent from '../components/HomeContent'
import Topbtn from '../components/Topbtn'
import Footer from '../components/Footer'
import HeaderHome from '../components/HeaderHome'

// 尚未導入header
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
