import React from 'react'
import AboutContent from '../components/AboutContent'
import Topbtn from '../components/Topbtn'
import Footer from '../components/Footer'
import HeaderAbout from '../components/HeaderAbout'
// 尚未導入header
function About() {
  return (
    <>
      <HeaderAbout></HeaderAbout>
      <AboutContent />
      <Topbtn />
      <Footer />
    </>
  )
}

export default About
