import React from 'react'
import ProductContent from '../components/ProductContent'
import Topbtn from '../components/Topbtn'
import Footer from '../components/Footer'
import HeaderProduct from '../components/HeaderProduct'

// 尚未導入header
function Product() {
  return (
    <>
      <HeaderProduct></HeaderProduct>
      <ProductContent></ProductContent>
      <Topbtn />
      <Footer />
    </>
  )
}

export default Product
