import React from 'react'
import DetailContent from '../components/DetailContent'
import Topbtn from '../components/Topbtn'
import Footer from '../components/Footer'
import HeaderOther from '../components/HeaderOther'

// 尚未導入header
function Detail() {
  return (
    <>
      <HeaderOther></HeaderOther>
      <DetailContent></DetailContent>
      <Topbtn />
      <Footer/>
    </>
  )
}

export default Detail
