import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import DetailContent from '../components/DetailContent'
import Topbtn from '../components/Topbtn'
import Footer from '../components/Footer'
import HeaderOther from '../components/HeaderOther'

// 尚未導入header
function Detail() {
  return (
    <>
      <HeaderOther></HeaderOther>
      <Route path="/detail/:brand?/:id?">
        <DetailContent></DetailContent>
      </Route>
      <Topbtn />
      <Footer />
    </>
  )
}

export default Detail
