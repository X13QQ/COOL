import React from 'react'
import HeaderOther from '../components/HeaderOther'
import Topbtn from '../components/Topbtn'
import Footer from '../components/Footer'
function News() {
  return (
    <>
      <HeaderOther />
      <div
        className="horizon-line-sm position-relative mb-5 mx-auto text-center h2"
        style={{ marginTop: '96px' }}
      >
        <span
          className="font-weight-bold position-relative"
          style={{ top: '-16px' }}
        >
          最新新聞
        </span>
      </div>
      {/* <!-- <div>
                            <h3 className="newsTitle newsLetter-Spacing"><span>最新新聞</span></h3>
                          </div> --> */}
      {/* <!-- <div className="newsImageBox"> --> */}
      <div className="container-fluid  ">
        {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
        <div className="row">
          <div className="col-8 px-0">
            <div className="row mx-0">
              <div className="col-8 px-0">
                <div className="newsImageMain1 newsBg-cover newsRow newsBig-pic-mask ">
                  <h3 className="newsBig-pic-text ">
                    Constant dropping wears the stone.
                  </h3>
                  <h5 className="newsBig-pic-text-sm ">勇往直前，絕不放棄</h5>
                </div>
              </div>
              <div className="col-4 px-0">
                <div className="newsImageMain2 newsBg-cover newsBox "></div>
                <div className="newsImageMain4 newsBg-cover newsBox newsBig-pic-mask ">
                  <h3 className="newsBig-pic-text">Believe in yourself.</h3>
                  <h5 className="newsBig-pic-text-sm">相信你自己</h5>
                </div>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-4 px-0">
                <div className="newsImageMain6 newsBg-cover newsBox newsBig-pic-mask ">
                  <h3 className="newsBig-pic-text">Learn & live.</h3>
                  <h5 className="newsBig-pic-text-sm">活著，為了學習</h5>
                </div>
                <div className="newsImageMain8 newsBg-cover newsBox newsBig-pic-mask ">
                  <h3 className="newsBig-pic-text">Believe in yourself.</h3>
                  <h5 className="newsBig-pic-text-sm">相信你自己</h5>
                </div>
              </div>
              <div className="col-8 px-0">
                <div className="newsImageMain7 newsBg-cover newsRow newsBig-pic-mask ">
                  <h3 className="newsBig-pic-text">
                    You think you can, you can .
                  </h3>
                  <h5 className="newsBig-pic-text-sm">我行，因為我相信我行!</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 px-0 d-flex flex-column">
            <div className=" newsImageMain3 newsBg-cover newsBox newsBig-pic-mask ">
              <h3 className="newsBig-pic-text">Never say die.</h3>
              <h5 className="newsBig-pic-text-sm">永不氣餒</h5>
            </div>
            <div
              className="newsImageMain5 newsBg-cover newsBox newsBig-pic-mask "
              style={{ flexGrow: '1' }}
            >
              <h3 className="newsBig-pic-text">never give up.</h3>
              <h5 className="newsBig-pic-text-sm">絕不放棄</h5>
            </div>
            <div className="newsImageMain9 newsBg-cover newsBox newsBig-pic-mask ">
              <h3 className="newsBig-pic-text">Knowledge is power.</h3>
              <h5 className="newsBig-pic-text-sm">知識就是力量</h5>
            </div>
          </div>
        </div>
      </div>

      <div
        className="horizon-line-sm position-relative mb-5 mx-auto text-center h2"
        style={{ marginTop: '96px' }}
      >
        <span
          className="font-weight-bold position-relative"
          style={{ top: '-16px' }}
        >
          推薦新聞
        </span>
      </div>

      <div className="news">
        <div className="container">
          <div className="d-flex justify-content-between ">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb px-0 d-none d-lg-flex">
                <li className="breadcrumb-item">
                  <a href="#!">首頁</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#!">商品首頁</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  新品一覽
                </li>
              </ol>
            </nav>
            <div className="dropdown d-flex py-2">
              <div className="position-relative">
                <a
                  href="#!"
                  className="d-inline-block position-relative px-2 mx-3 text-decoration-none"
                >
                  排序
                  <img
                    className="mx-3"
                    src="images/素材/icon/arrow_G.svg "
                    alt={''}
                  />
                </a>
                <div className="sort-ul-wrap position-absolute py-2 rounded">
                  <ul className="sort-ul  list-unstyled mb-0">
                    <li>
                      <a
                        href="#!"
                        className="d-inline-block py-2 px-3 text-decoration-none"
                      >
                        從日期最新
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="d-inline-block py-2 px-3 text-decoration-none"
                      >
                        從日期最舊
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="news-modal d-none justify-content-center align-items-center">
            <div className="news-content pt-5 position-relative">
              <a
                href="#!"
                className="close-button position-absolute text-decoration-none "
              >
                CLOSE
                <span>X</span>
              </a>
              <div className="row mt-4  position-relative">
                <img
                  src="images/新聞頁/文章頁-主視覺/news1.jpg"
                  className="position-absolute"
                  style={{
                    width: '40%',
                    height: '80%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '50px',
                    zIndex: '1',
                    objectFit: 'cover',
                  }}
                  alt=""
                ></img>
                <div className="row mx-0">
                  <div className="col-6 pr-0">
                    <div
                      className="p-5"
                      style={{ backgroundColor: '#353c1d', color: 'white' }}
                    >
                      <h3 className="font-weight-bold">
                        Constant dropping wears the stone
                      </h3>
                      <p
                        className="font-weight-bold"
                        style={{ fontSize: '16px' }}
                      >
                        有一種衣服，每當穿上它就會心情舒暢，不管去哪裡都想穿。這樣的衣服，你會希望它在你的衣櫥裡能有一席之地。怎麼樣的衣服，能夠貼近生活，並適合任何人穿著？
                      </p>
                    </div>
                  </div>
                  <div className="col-6 pl-0">
                    <div
                      style={{
                        backgroundColor: '#353c1d',
                        color: 'white',
                        width: '100%',
                        height: '100%',
                      }}
                    ></div>
                  </div>
                </div>
                <div className="row mx-0">
                  <div className="col-6 pr-0">
                    <div className="p-5" style={{ backgroundColor: 'white' }}>
                      <a
                        className="font-weight-bold"
                        style={{ fontSize: '14px' }}
                        href="#!"
                      >
                        巴爾瑪肯大衣 NT$2,990 (預計10月下旬販售)
                      </a>
                      <a
                        className="font-weight-bold"
                        style={{ fontSize: '14px' }}
                        href="#!"
                      >
                        喀什米爾圓領毛衣(長袖) NT$2,990
                      </a>
                      <a
                        className="font-weight-bold"
                        style={{ fontSize: '14px' }}
                        href="#!"
                      >
                        HEATTECH SMART SlimFit長褲 NT$1,290
                      </a>
                      <a
                        className="font-weight-bold"
                        style={{ fontSize: '14px' }}
                        href="#!"
                      >
                        麂皮風中筒靴 NT$1,990
                      </a>
                    </div>
                  </div>
                  <div className="col-6 pl-0">
                    <div
                      style={{
                        backgroundColor: 'white',
                        width: ' 100%',
                        height: '100%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-between ">
            {/* <!-- 左邊card 小圖 --> */}
            <div className=" card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖1.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={''}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  右邊card 小圖 -->   */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖2.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {/* <!-- 左邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex  justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖3.png"
                    className="img-fluid news-small-cover-image"
                    alt="{...}"
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  右邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex  justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖4.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {/* <!-- 左邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖5.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  右邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex  justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖6.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {/* <!-- 左邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖7.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  右邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖8.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {/* <!-- 左邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex  justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖9.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  右邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖10.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {/* <!-- 左邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖11.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  右邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖12.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {/* <!-- 左邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖13.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  右邊card 小圖 --> */}
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="images/新聞頁/文章列-小圖/小圖14.jpg"
                    className="img-fluid news-small-cover-image"
                    alt={'...'}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body news-card-body-text">
                    {/* <h5 className="card-title"></h5> */}
                    <p
                      className="news-article card-text font-weight-bold"
                      style={{ color: '#353c1d' }}
                    >
                      普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。普賽爾曾經提到過,所謂企業管理就是解
                      決一連串關係密切的問題,必須有系統地
                      予以解決,否則將會造成損失。
                    </p>
                  </div>
                  <div className="card-body news-card-body-link">
                    <p className="card-text d-flex justify-content-end ">
                      <a
                        href="#!"
                        style={{ color: '#353c1d', fontSize: '12px' }}
                      >
                        繼續閱讀 ...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-select position-relative d-none d-lg-flex justify-content-center align-items-center my-5">
            <a
              href="#!"
              className=" font-weight-bold page-previous d-flex justify-content-between align-items-center px-2 mx-2 text-center text-decoration-none"
            >
              <img src="images/素材/icon/arrow_W.svg" alt=""></img>上一頁
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
              下一頁<img src="images/素材/icon/arrow_W.svg" alt=""></img>
            </a>
          </div>
        </div>
      </div>
      <Topbtn />
      <Footer />
    </>
  )
}

export default News
