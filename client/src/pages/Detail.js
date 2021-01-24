import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import DetailContent from '../components/DetailContent'
import Topbtn from '../components/Topbtn'
import Footer from '../components/Footer'
import HeaderOther from '../components/HeaderOther'

// 尚未導入header
function Detail() {
  // 測試
  const [detailToHeaderCart, setDetailToHeaderCart] = useState(!!localStorage.getItem('cartList'))
  return (
    <>
      <HeaderOther detailToHeaderCart={detailToHeaderCart}></HeaderOther>
      <Route path="/detail/:brand?/:id?">
        <DetailContent setDetailToHeaderCart={setDetailToHeaderCart}></DetailContent>
      </Route>
      <Topbtn />
      <Footer />
    </>
  )
}

export default Detail
