import React from 'react'
import { Link } from 'react-router-dom'
// 目前會顯示很多prettier warnings，暫時無視
// Link 路由還沒寫的精準
function ProductContent() {
  return (
    <>
      <section className="hot-sale container">
        <div>
          <h2 className="text-center my-5">熱賣商品</h2>
          <div className="list-unstyled row my-5">
            <Link
              to="/detail"
              className="col-6 col-md-3 mb-3  mb-lg-0 d-block "
            >
              <div className="m-3">
                <img
                  className="mb-3"
                  src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                  width="100%"
                  alt={''}
                ></img>
                <p className="m-0 text-center d-none d-sm-block">
                  Honest Delivery
                </p>
                <p className="m-0 text-center">Better Fast Hoodie</p>
                <p className="m-0 text-center font-weight-bold">NT$9999</p>
              </div>
            </Link>
            <Link
              to="/detail"
              className="col-6 col-md-3 mb-3  mb-lg-0 d-block"
            >
              <div className="m-3">
                <img
                  className="mb-3"
                  src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                  width="100%"
                  alt={''}
                ></img>
                <p className="m-0 text-center d-none d-sm-block">
                  Honest Delivery
                </p>
                <p className="m-0 text-center">Better Fast Hoodie</p>
                <p className="m-0 text-center font-weight-bold">NT$9999</p>
              </div>
            </Link>
            <Link
              to="/detail"
              className="col-6 col-md-3 mb-3  mb-lg-0 d-block"
            >
              <div className="m-3">
                <img
                  className="mb-3"
                  src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                  width="100%"
                  alt={''}
                ></img>
                <p className="m-0 text-center d-none d-sm-block">
                  Honest Delivery
                </p>
                <p className="m-0 text-center">Better Fast Hoodie</p>
                <p className="m-0 text-center font-weight-bold">NT$9999</p>
              </div>
            </Link>
            <Link
              to="/detail"
              className="col-6 col-md-3 mb-3 mb-lg-0  d-block"
            >
              <div className="m-3">
                <img
                  className="mb-3"
                  src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                  width="100%"
                  alt={''}
                ></img>
                <p className="m-0 text-center d-none d-sm-block">
                  Honest Delivery
                </p>
                <p className="m-0 text-center">Better Fast Hoodie</p>
                <p className="m-0 text-center font-weight-bold">NT$9999</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="horizon-line-sm position-relative my-4 mx-auto"></div>
      <div className="horizon-line-lg position-relative mt-5 my-lg-5 mx-auto"></div>
      <main className="product-home-main">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb px-0 d-none d-lg-flex">
              <li className="breadcrumb-item">
                <Link to="/">首頁</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                商品
              </li>
            </ol>
          </nav>
          <section className="main-content">
            <div className="row">
              <div className="d-none d-lg-block col-lg-3 position-sticky">
                <ul className="accordion-ul list-unstyled">
                  <li className="h5">
                    <div className="d-flex justify-content-between py-2 font-weight-bold" onClick={() => {
                      document.querySelector('.event-accordion').classList.toggle('accordion-active');
                      if (document.querySelector('.event-span').textContent == '+') {
                        document.querySelector('.event-span').textContent = '-'
                      } else {
                        document.querySelector('.event-span').textContent = '+'
                      };
                    }}>
                      <span>熱銷活動</span>
                      <span className="event-span">-</span>
                    </div>
                    <ul className="event-accordion list-unstyled accordion-active">
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          優惠倒數-超值折扣
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          STUDIO 7-買千送百
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          CANDY-後背包第二件8折
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          換季特賣
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          免運活動
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="h5">
                    <div className="d-flex justify-content-between py-2 font-weight-bold" onClick={() => {
                      document.querySelector('.category-accordion').classList.toggle('accordion-active');
                      if (document.querySelector('.category-span').textContent == '+') {
                        document.querySelector('.category-span').textContent = '-'
                      } else {
                        document.querySelector('.category-span').textContent = '+'
                      };
                    }}>
                      <span>類別</span>
                      <span className="category-span">-</span>
                    </div>
                    <ul className="category-accordion list-unstyled accordion-active">
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          十二月新品上市
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          外套
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          長褲
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          短褲
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          牛仔褲
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          西裝褲
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          衣服
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          褲子
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          鞋子
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          配件
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="h5">
                    <div className="d-flex justify-content-between py-2 font-weight-bold" onClick={() => {
                      document.querySelector('.brand-accordion').classList.toggle('accordion-active');
                      if (document.querySelector('.brand-span').textContent == '+') {
                        document.querySelector('.brand-span').textContent = '-'
                      } else {
                        document.querySelector('.brand-span').textContent = '+'
                      };
                    }}>
                      <span>品牌</span>
                      <span className="brand-span">-</span>
                    </div>
                    <ul className="brand-accordion list-unstyled accordion-active">
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          undefeated
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          OnlyNY
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          NOAH
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          BBCICECREAM
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          Tribal
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          Palace
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          Wckdthghts
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          studio-seven
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="d-inline-block px-3 py-2 font-weight-bold"
                        >
                          424
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-9 py-5 py-lg-0">
                <div className="dropdown d-flex py-2">
                  <div className="position-relative">
                    <a id="product-sort-link"
                      href="#!"
                      className="d-inline-block position-relative px-2 mx-3 text-decoration-none"
                      onMouseEnter={()=>{document.getElementById('product-sort-wrap').style["display"]='block'}}
                      onMouseLeave={(e)=>{
                        if(e.target.id!='product-sort-wrap'){
                          document.getElementById('product-sort-wrap').style["display"]='none'
                        }
                        }
                        }
                    >
                      排序
                      <img
                        className="mx-3"
                        src="images/素材/icon/arrow_G.svg"
                        alt={''}
                      ></img>
                    </a>
                    <div id="product-sort-wrap" className="product-sort-wrap position-absolute"
                    onMouseEnter={()=>{document.getElementById('product-sort-wrap').style["display"]='block'}}
                    onMouseLeave={(e)=>{
                      if(e.target.id!='product-sort-link'){
                        document.getElementById('product-sort-wrap').style["display"]='none'
                      }
                      }
                      }>
                      <div className="product-sort-ul-wrap position-relative py-2 rounded">
                        <ul className="product-sort-ul  list-unstyled mb-0">
                          <li>
                            <a
                              href="#!"
                              className="d-inline-block py-2 px-3"
                            >
                              依上架順序
                          </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="d-inline-block py-2 px-3"
                            >
                              從價格最高
                          </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="d-inline-block py-2 px-3"
                            >
                              從價格最低
                          </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative">
                    <a id="items-per-page-link"
                      href="#!"
                      className="d-inline-block px-2 mx-3 text-decoration-none" 
                      onMouseEnter={()=>{document.getElementById('items-per-page-wrap').style["display"]='block'}}
                      onMouseLeave={(e)=>{
                        if(e.target.id!='items-per-page-wrap'){
                          document.getElementById('items-per-page-wrap').style["display"]='none'
                        }
                        }
                        }
                    >
                      顯示筆數
                      <img
                        className="mx-3"
                        src="images/素材/icon/arrow_G.svg"
                        alt={''}
                      ></img>
                    </a>
                    <div id="items-per-page-wrap" className="items-per-page-wrap position-absolute"
                    onMouseEnter={()=>{document.getElementById('items-per-page-wrap').style["display"]='block'}}
                    onMouseLeave={(e)=>{
                      if(e.target.id!='items-per-page-link'){
                        document.getElementById('items-per-page-wrap').style["display"]='none'
                      }
                      }
                      }>
                      <div className="items-per-page-ul-wrap position-relative py-2 rounded">
                        <ul className="items-per-page-ul  list-unstyled mb-0">
                          <li>
                            <a
                              href="#!"
                              className="d-inline-block py-2 px-3"
                            >
                              40筆
                          </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="d-inline-block py-2 px-3"
                            >
                              60筆
                          </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="d-inline-block py-2 px-3"
                            >
                              80筆
                          </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-list row">
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/detail"
                    className="col-6 col-md-3"
                  >
                    <div className="m-3">
                      <img
                        className="mb-3"
                        src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370_19-1.jpg"
                        width="100%"
                        alt={''}
                      ></img>
                      <p className="m-0 text-center d-none d-sm-block">
                        Honest Delivery
                      </p>
                      <p className="m-0 text-center">Better Fast Hoodie</p>
                      <p className="m-0 text-center font-weight-bold">
                        NY$9999
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="page-select position-relative d-none d-lg-flex justify-content-center align-items-center mt-5" style={{marginBottom:'100px'}}>
                  <a
                    href="#!"
                    className=" font-weight-bold page-previous d-flex justify-content-between align-items-center px-2 mx-2 text-center text-decoration-none"
                  >
                    <img src="images/素材/icon/arrow_W.svg" alt={''}></img>
                    上一頁
                  </a>
                  <a
                    href="#!"
                    className=" font-weight-bold page-number d-inline-block mx-2 text-center text-decoration-none"
                  >
                    1
                  </a>
                  <a
                    href="#!"
                    className=" font-weight-bold page-number d-inline-block mx-2 text-center text-decoration-none"
                  >
                    2
                  </a>
                  <a
                    href="#!"
                    className=" font-weight-bold page-number d-inline-block mx-2 text-center text-decoration-none"
                  >
                    3
                  </a>
                  <a
                    href="#!"
                    className=" font-weight-bold page-next d-flex justify-content-between align-items-center px-3 mx-2 text-center text-decoration-none"
                  >
                    下一頁
                    <img src="images/素材/icon/arrow_W.svg" alt={''}></img>
                  </a>
                  <a
                    href="#!"
                    className=" font-weight-bold position-absolute page-all mx-2 text-center px-3 text-decoration-none"
                  >
                    所有商品
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default ProductContent
