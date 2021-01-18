import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function HeaderHome() {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState(1)

  const close = (id) => {
    document.addEventListener('click', function (e) {
      if (e.target.id === id) {
        setShow(false)
        setModal(1)
      }
    })
  }

  const login = () => {
    close('log-in-modal')
    return (
      <>
        <div
          id="log-in-modal"
          className="log-in-modal position-fixed d-flex justify-content-center align-items-center"
        >
          <div className="log-in-content">
            <div className="content-top mb-1 d-flex justify-content-center align-items-center">
              <img
                src="images/cool_logo/LOGO-G.png"
                width="150px"
                alt={''}
              ></img>
            </div>
            <div className="content-bottom py-4">
              <form action="" className="w-75 mx-auto">
                <div className="position-relative mb-4">
                  <label
                    className="font-weight-bold mb-0"
                    htmlFor="log-in-account"
                  >
                    帳號
                  </label>
                  <input
                    id="log-in-account"
                    className="d-block py-1 font-weight-bold"
                    type="text"
                    placeholder="請輸入帳號"
                    style={{ width: '100%', paddingLeft: '38px' }}
                  ></input>
                  <img
                    className="position-absolute"
                    src="images/素材/icon/Profile_G.svg"
                    style={{
                      width: '20px',
                      bottom: '8px',
                      left: '10px',
                    }}
                    alt={''}
                  ></img>
                </div>
                <div className="position-relative mb-2">
                  <label
                    className="font-weight-bold mb-0"
                    htmlFor="log-in-password"
                  >
                    密碼
                  </label>
                  <input
                    id="log-in-password"
                    className="d-block py-1 font-weight-bold"
                    type="text"
                    placeholder="請輸入密碼"
                    style={{ width: '100%', paddingLeft: '38px' }}
                  ></input>
                  <img
                    className="position-absolute"
                    src="images/素材/icon/Attachment_G.svg"
                    style={{
                      width: '20px',
                      bottom: '8px',
                      left: '10px',
                    }}
                    alt={''}
                  ></img>
                </div>
                <div className="forget-password-wrap mb-2">
                  <a
                    href="#!"
                    className="font-weight-bold"
                    style={{ fontSize: '14px' }}
                    onClick={() => setModal(3)}
                  >
                    忘記密碼
                  </a>
                </div>
                <div className="create-account-wrap mb-2">
                  <a
                    href="#!"
                    className="font-weight-bold"
                    style={{ fontSize: '14px' }}
                    onClick={() => setModal(2)}
                  >
                    立即註冊新帳號
                  </a>
                </div>
                <div className="log-in-cancel-btn-wrap d-flex justify-content-between mb-4">
                  <a
                    href="#!"
                    className="font-weight-bold rounded text-center d-inline-block py-2 text-decoration-none"
                    style={{
                      width: '45%',
                      border: '1px solid #353c1d',
                      color: '#353c1d',
                    }}
                    onClick={() => setShow(false)}
                  >
                    取消
                  </a>
                  <a
                    href="#!"
                    className="font-weight-bold rounded text-center d-inline-block py-2 text-decoration-none"
                    style={{
                      width: '45%',
                      border: '1px solid #353c1d',
                      color: 'white',
                      backgroundColor: '#353c1d',
                    }}
                  >
                    登入
                  </a>
                </div>
                <hr
                  className="mt-0 mb-4"
                  style={{ backgroundColor: 'lightgray' }}
                />
                <div className="social-account-wrap">
                  <p
                    className="font-weight-bold text-center mb-2"
                    style={{ fontSize: '12px' }}
                  >
                    使用社群帳號快速註冊
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a
                      href="#!"
                      className="mx-2 rounded d-flex justify-content-center align-items-center"
                      style={{
                        width: '25px',
                        height: '25px',
                        border: '1px solid #353c1d',
                      }}
                    >
                      <img
                        src="images/素材/icon/1004px-Google__G__Logo.svg.png"
                        alt={''}
                        style={{ width: '15px' }}
                      ></img>
                    </a>
                    <a
                      href="#!"
                      className="mx-2 rounded d-flex justify-content-center align-items-center"
                      style={{
                        width: '25px',
                        height: '25px',
                        border: '1px solid #353c1d',
                      }}
                    >
                      <img
                        src="images/素材/icon/Facebook_G.svg"
                        alt={''}
                        style={{ width: '15px' }}
                      ></img>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  const signUp = () => {
    close('sign-up-modal')
    return (
      <>
        <div
          id="sign-up-modal"
          className="sign-up-modal position-fixed d-flex justify-content-center align-items-center"
        >
          <div className="sign-up-content">
            <div className="content-top mb-1 d-flex justify-content-center align-items-center">
              <img
                src="images/cool_logo/LOGO-G.png"
                width="150px"
                alt={''}
              ></img>
            </div>
            <div className="content-bottom py-4">
              <form action="" className="w-75 mx-auto">
                <div className="position-relative mb-4">
                  <label
                    className="font-weight-bold mb-0"
                    htmlFor="sign-up-account"
                  >
                    帳號
                  </label>
                  <input
                    id="sign-up-account"
                    className="d-block py-1 font-weight-bold"
                    type="text"
                    placeholder="請輸入帳號"
                    style={{ width: '100%', paddingLeft: '38px' }}
                  ></input>
                  <img
                    className="position-absolute"
                    src="images/素材/icon/Profile_G.svg"
                    style={{
                      width: '20px',
                      bottom: '8px',
                      left: '10px',
                    }}
                    alt={''}
                  ></img>
                </div>
                <div className="position-relative mb-4">
                  <label
                    className="font-weight-bold mb-0"
                    htmlFor="sign-up-password"
                  >
                    密碼
                  </label>
                  <input
                    id="sign-up-password"
                    className="d-block py-1 font-weight-bold"
                    type="text"
                    placeholder="請輸入密碼"
                    style={{ width: '100%', paddingLeft: '38px' }}
                  ></input>
                  <img
                    className="position-absolute"
                    src="images/素材/icon/Attachment_G.svg"
                    style={{
                      width: '20px',
                      bottom: '8px',
                      left: '10px',
                    }}
                    alt={''}
                  ></img>
                </div>
                <div className="position-relative mb-2">
                  <label
                    className="font-weight-bold mb-0"
                    htmlFor="sign-up-email"
                  >
                    信箱
                  </label>
                  <input
                    id="sign-up-email"
                    className="d-block py-1 font-weight-bold"
                    type="text"
                    placeholder="請輸入信箱"
                    style={{ width: '100%', paddingLeft: '38px' }}
                  ></input>
                  <img
                    className="position-absolute"
                    src="images/素材/icon/Messages_G.svg"
                    style={{
                      width: '20px',
                      bottom: '8px',
                      left: '10px',
                    }}
                    alt={''}
                  ></img>
                </div>
                <div className="subscribe-wrap mb-2 d-flex align-items-center">
                  <input type="checkbox"></input>
                  <span
                    className="font-weight-bold ml-1"
                    style={{ fontSize: '14px' }}
                  >
                    我要訂閱電子報
                  </span>
                </div>
                <div className="already-have-account-wrap mb-2">
                  <a
                    href="#!"
                    className="font-weight-bold"
                    style={{ fontSize: '14px' }}
                    onClick={() => setModal(1)}
                  >
                    已經有帳號了嗎？
                  </a>
                </div>
                <div className="sign-up-cancel-btn-wrap d-flex justify-content-between mb-4">
                  <a
                    href="#!"
                    className="font-weight-bold rounded text-center d-inline-block py-2 text-decoration-none"
                    style={{
                      width: '45%',
                      border: '1px solid #353c1d',
                      color: '#353c1d',
                    }}
                    onClick={() => setModal(1)}
                  >
                    取消
                  </a>
                  <a
                    href="#!"
                    className="font-weight-bold rounded text-center d-inline-block py-2 text-decoration-none"
                    style={{
                      width: '45%',
                      border: '1px solid #353c1d',
                      color: 'white',
                      backgroundColor: '#353c1d',
                    }}
                    onClick={() => setModal(4)}
                  >
                    註冊
                  </a>
                </div>
                <hr
                  className="mt-0 mb-4"
                  style={{ backgroundColor: 'lightgray' }}
                />
                <div className="social-account-wrap">
                  <p
                    className="font-weight-bold text-center mb-2"
                    style={{ fontSize: '12px' }}
                  >
                    使用社群帳號快速註冊
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a
                      href="#!"
                      className="mx-2 rounded d-flex justify-content-center align-items-center"
                      style={{
                        width: '25px',
                        height: '25px',
                        border: '1px solid #353c1d',
                      }}
                    >
                      <img
                        src="images/素材/icon/1004px-Google__G__Logo.svg.png"
                        alt={''}
                        style={{ width: '15px' }}
                      ></img>
                    </a>
                    <a
                      href="#!"
                      className="mx-2 rounded d-flex justify-content-center align-items-center"
                      style={{
                        width: '25px',
                        height: '25px',
                        border: '1px solid #353c1d',
                      }}
                    >
                      <img
                        src="images/素材/icon/Facebook_G.svg"
                        style={{ width: '15px' }}
                        alt={''}
                      ></img>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  const getPassword = () => {
    close('certificate-modal')
    return (
      <>
        {/* 忘記密碼 */}
        <div
          id="certificate-modal"
          className="certificate-modal position-fixed d-flex justify-content-center align-items-center"
        >
          <div className="certificate-content">
            <div className="content-top mb-1 d-flex justify-content-center align-items-center">
              <img
                src="images/cool_logo/LOGO-G.png"
                width="150px"
                alt={''}
              ></img>
            </div>
            <div className="content-bottom py-4">
              <form action="" className="w-75 mx-auto">
                <div className="position-relative mb-4">
                  <label
                    className="font-weight-bold mb-0"
                    htmlFor="certificate-email"
                  >
                    信箱
                  </label>
                  <input
                    id="certificate-email"
                    className="d-block py-1 font-weight-bold"
                    type="text"
                    placeholder="請輸入信箱"
                    style={{ width: '100%', paddingLeft: '38px' }}
                  ></input>
                  <img
                    className="position-absolute"
                    src="images/素材/icon/Messages_G.svg"
                    style={{
                      width: '20px',
                      bottom: '8px',
                      left: '10px',
                    }}
                    alt={''}
                  ></img>
                </div>
                <div className="certificate-cancel-btn-wrap d-flex justify-content-between mb-4">
                  <a
                    href="#!"
                    className="font-weight-bold rounded text-center d-inline-block py-2 text-decoration-none"
                    style={{
                      width: '45%',
                      border: '1px solid #353c1d',
                      color: '#353c1d',
                    }}
                    onClick={() => setModal(1)}
                  >
                    返回
                  </a>
                  <a
                    href="#!"
                    className="font-weight-bold rounded text-center d-inline-block py-2 text-decoration-none"
                    style={{
                      width: '45%',
                      border: '1px solid #353c1d',
                      color: 'white',
                      backgroundColor: '#353c1d',
                    }}
                    onClick={() => setModal(4)}
                  >
                    送出
                  </a>
                </div>
                <hr
                  className="mt-0 mb-4"
                  style={{ backgroundColor: 'lightgray' }}
                />

                <div className="social-account-wrap">
                  <p
                    className="font-weight-bold text-center mb-2"
                    style={{ fontSize: '12px' }}
                  >
                    使用社群帳號快速註冊
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a
                      href="#!"
                      className="mx-2 rounded d-flex justify-content-center align-items-center"
                      style={{
                        width: '25px',
                        height: '25px',
                        border: '1px solid #353c1d',
                      }}
                    >
                      <img
                        src="images/素材/icon/1004px-Google__G__Logo.svg.png"
                        alt={''}
                        style={{ width: '15px' }}
                      ></img>
                    </a>
                    <a
                      href="#!"
                      className="mx-2 rounded d-flex justify-content-center align-items-center"
                      style={{
                        width: '25px',
                        height: '25px',
                        border: '1px solid #353c1d',
                      }}
                    >
                      <img
                        src="images/素材/icon/Facebook_G.svg"
                        alt={''}
                        style={{ width: '15px' }}
                      ></img>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }

  const success = () => {
    close('certificate-send-modal')
    return (
      <>
        <div
          id="certificate-send-modal"
          className="certificate-send-modal position-fixed d-flex justify-content-center align-items-center"
        >
          <div className="certificate-send-content">
            <div className="content-top mb-1 d-flex justify-content-center align-items-center">
              <img
                src="images/cool_logo/LOGO-G.png"
                width="150px"
                alt={''}
              ></img>
            </div>
            <div className="content-bottom py-4">
              <div className="mx-auto d-flex justify-content-center align-items-center flex-column">
                <img
                  className="mb-4"
                  style={{ width: '25%' }}
                  src="images/素材/icon/check_big.svg"
                  alt={''}
                ></img>
                <p
                  className="text-center font-weight-bold"
                  style={{ color: 'green', fontSize: '40px' }}
                >
                  送出成功！
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <header
        className="home-header position-relative"
        style={{ marginBottom: '100px' }}
      >
        <div className="photo-mask">
          <div className="photo-mask-mask d-flex">
            <div className="photo-mask-img1"></div>
            <div className="photo-mask-img2"></div>
          </div>
        </div>
        <div className="container position-relative" style={{ height: '100%' }}>
          <nav className="main-navbar navbar navbar-expand-lg px-0 pt-5">
            <div className="container-fluid p-0 justify-content-start align-items-end">
              <a className="navbar-brand d-inline-block mr-4" href="/">
                <img src={'images/cool_logo/LOGO_W.png'} alt={''}></img>
              </a>
              <ul className="navbar-menu navbar-nav d-flex">
                <li className="nav-item mx-4">
                  <Link
                    to="/product"
                    id="product-navbar-link"
                    className="product-navbar-link nav-link active"
                    aria-current="page"
                    onMouseEnter={() => {
                      document.getElementById('product-hover-menu-wrap').style[
                        'display'
                      ] = 'block'
                    }}
                    onMouseLeave={(e) => {
                      console.log(e.target.id)
                      if (e.target.id !== 'product-hover-menu') {
                        document.getElementById(
                          'product-hover-menu-wrap'
                        ).style['display'] = 'none'
                      }
                    }}
                  >
                    商品
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link to="/about" className="nav-link">
                    關於
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link to="/news" className="nav-link">
                    新聞
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link to="/clothing" className="nav-link">
                    穿搭集
                  </Link>
                </li>
              </ul>

              <ul className="navbar-icon navbar-nav ml-auto flex-row">
                {/* 搜尋欄 */}
                <li className="d-flex nav-item mx-2 mx-sm-3 mx-lg-2">
                  <div className="d-flex align-items-end search-icon-input-wrap mx-2">
                    <input
                      type="text"
                      className="px-2"
                      style={{ color: 'white', borderColor: 'white' }}
                    ></input>
                  </div>
                  <a className="nav-link active" aria-current="page" href="#!">
                    <img src={'images/素材/icon/Search_W.svg'} alt={''}></img>
                  </a>
                </li>

                {/* 購物車 */}
                <li className="cart-navbar-li nav-item mx-2 mx-sm-3 mx-lg-2 position-relative">
                  <a className="cart-navbar-a nav-link" href="#!">
                    <img
                      src={'images/素材/icon/shopping_cart_W.svg'}
                      alt={''}
                    ></img>
                  </a>
                  <div className="cart-icon-wrap position-absolute pt-3">
                    <div
                      className="cart-icon-ul-wrap position-relative rounded"
                      style={{ padding: '8px 15px' }}
                    >
                      <ul className="cart-icon-ul list-unstyled">
                        <li
                          style={{ borderBottom: '1px solid gray' }}
                          className="my-2"
                        >
                          <div className="row m-0 pb-2">
                            <div className="col-3 pl-0 content-img">
                              <div>
                                <a className="d-block" href="#!">
                                  <img
                                    className="img-fluid"
                                    src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                    alt={''}
                                  ></img>
                                </a>
                              </div>
                            </div>
                            <div className="col-9 pr-0 content-word">
                              <div>
                                <p className="m-0 text-left font-weight-bold">
                                  GOFE兩雙一組 / 右手超人襪
                                </p>
                                <p className="m-0 text-left font-weight-bold">
                                  數量
                                  <span
                                    className="mx-2"
                                    style={{
                                      width: '20px',
                                      display: 'inline-block',
                                      textAlign: 'center',
                                      borderBottom: '1px solid black',
                                    }}
                                  >
                                    1
                                  </span>
                                </p>
                                <p className="m-0 text-left font-weight-bold">
                                  NT$3,000
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li
                          style={{ borderBottom: '1px solid gray' }}
                          className="my-2"
                        >
                          <div className="row m-0 pb-2">
                            <div className="col-3 pl-0 content-img">
                              <div>
                                <a className="d-block" href="#!">
                                  <img
                                    className="img-fluid"
                                    src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                    alt={''}
                                  ></img>
                                </a>
                              </div>
                            </div>
                            <div className="col-9 pr-0 content-word">
                              <div>
                                <p className="m-0 text-left font-weight-bold">
                                  GOFE兩雙一組 / 右手超人襪
                                </p>
                                <p className="m-0 text-left font-weight-bold">
                                  數量
                                  <span
                                    className="mx-2"
                                    style={{
                                      width: '20px',
                                      display: 'inline-block',
                                      textAlign: 'center',
                                      borderBottom: '1px solid black',
                                    }}
                                  >
                                    1
                                  </span>
                                </p>
                                <p className="m-0 text-left font-weight-bold">
                                  NT$3,000
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="total-price-wrap">
                        <p className="d-flex justify-content-between font-weight-bold">
                          <span>結帳金額：</span>
                          <span>NT$3,000</span>
                        </p>
                      </div>
                      <div className="checkout-btn-wrap d-flex flex-column">
                        <a
                          href="#!"
                          className="see-cart-btn my-1 py-1 d-block font-weight-bold rounded text-decoration-none"
                        >
                          查看購物車
                        </a>
                        <a
                          href="#!"
                          className="go-check-btn my-1 py-1 d-block font-weight-bold rounded text-decoration-none"
                        >
                          前往結帳
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 會員 */}
                <li className="profile-navbar-li nav-item mx-2 mx-sm-3 mx-lg-2 position-relative">
                  <a
                    className="nav-link"
                    href="#!"
                    onClick={() => setShow(true)}
                  >
                    <img src="images/素材/icon/Profile_W.svg" alt={''}></img>
                  </a>
                  <div className="profile-icon-wrap position-absolute pt-3">
                    <div
                      className="profile-icon-ul-wrap position-relative rounded"
                      style={{ padding: '8px 15px' }}
                    >
                      <ul className="profile-icon-ul  list-unstyled w-100">
                        <li className="d-flex justify-content-start">
                          <Link
                            to="/setting"
                            className="font-weight-bold d-flex justify-content-center align-items-center py-1"
                          >
                            江小明
                            <img
                              src="images/素材/會員等級icon/winner.svg"
                              alt={''}
                              className="ml-2"
                            ></img>
                          </Link>
                        </li>
                        <li className="d-flex justify-content-start">
                          <Link
                            to="/mail"
                            className="font-weight-bold d-inline-block py-1"
                          >
                            我的信箱
                          </Link>
                        </li>
                        <li className="d-flex align-items-start flex-column">
                          <Link
                            to="/member"
                            className="font-weight-bold d-inline-block py-1"
                          >
                            會員專區
                          </Link>
                          <ul className="list-unstyled text-left">
                            <li>
                              <div
                                className="py-1 pr-3 pl-1"
                                style={{ color: 'gray', fontSize: '12px' }}
                              >
                                黃金會員
                              </div>
                            </li>
                            <li>
                              <div
                                className="py-1 pr-3 pl-1"
                                style={{ color: 'gray', fontSize: '12px' }}
                              >
                                累積消費金額
                                <br />
                                <span>1000</span>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="d-flex justify-content-start">
                          <Link
                            to="/coupon"
                            className=" font-weight-bold d-inline-block py-1"
                          >
                            優惠券
                          </Link>
                        </li>
                        <li className="d-flex justify-content-start">
                          <Link
                            to="/order"
                            className="font-weight-bold d-inline-block py-1"
                          >
                            購買紀錄
                          </Link>
                        </li>
                        <li
                          className="d-flex justify-content-start"
                          style={{ borderBottom: '1px solid black' }}
                        >
                          <Link
                            to="/setting"
                            className="font-weight-bold d-inline-block py-1"
                          >
                            帳號設定
                          </Link>
                        </li>
                        <li className="d-flex justify-content-start">
                          <a
                            href="#!"
                            className="font-weight-bold d-inline-block py-1"
                          >
                            登出
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 mx-sm-3 mx-lg-2 d-block d-lg-none">
                  <a className="nav-link" href="#!">
                    <img src="images/素材/icon/Menu_W.svg" alt={''}></img>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {show && modal === 1
          ? login()
          : show && modal === 2
          ? signUp()
          : show && modal === 3
          ? getPassword()
          : show && modal === 4
          ? success()
          : ''}

        {/* mega menu */}
        <div
          id="product-hover-menu-wrap"
          className="product-hover-menu-wrap position-absolute"
          style={{
            left: '0',
            right: '0',
          }}
          onMouseEnter={() => {
            document.getElementById('product-hover-menu-wrap').style[
              'display'
            ] = 'block'
          }}
          onMouseLeave={(e) => {
            if (e.target.id !== 'product-navbar-link') {
              document.getElementById('product-hover-menu-wrap').style[
                'display'
              ] = 'none'
            }
          }}
        >
          <div
            id="product-hover-menu"
            className="product-hover-menu p-5 "
            style={{
              backgroundColor: 'rgba(255,255,255,0.85)',
            }}
          >
            <div className="container">
              <div className="row w-100">
                <div className="col-6">
                  <div className="row">
                    <div className="col-4">
                      <h6 className="font-weight-bold mb-3">商品分類</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#!">新品</a>
                        </li>
                        <li>
                          <a href="#!">外套</a>
                        </li>
                        <li>
                          <a href="#!">長褲</a>
                        </li>
                        <li>
                          <a href="#!">短褲</a>
                        </li>
                        <li>
                          <a href="#!">牛仔褲</a>
                        </li>
                        <li>
                          <a href="#!">西裝褲</a>
                        </li>
                        <li>
                          <a href="#!">衣服</a>
                        </li>
                        <li>
                          <a href="#!">褲子</a>
                        </li>
                        <li>
                          <a href="#!">鞋子</a>
                        </li>
                        <li>
                          <a href="#!">配件</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <h6 className="font-weight-bold mb-3">品牌</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#!">undefeated</a>
                        </li>
                        <li>
                          <a href="#!">OnlyNY</a>
                        </li>
                        <li>
                          <a href="#!">NOAH</a>
                        </li>
                        <li>
                          <a href="#!">BBCICECREAM</a>
                        </li>
                        <li>
                          <a href="#!">Tribal</a>
                        </li>
                        <li>
                          <a href="#!">Palace</a>
                        </li>
                        <li>
                          <a href="#!">Wckdthghts</a>
                        </li>
                        <li>
                          <a href="#!">studio-seven</a>
                        </li>
                        <li>
                          <a href="#!">Products</a>
                        </li>
                        <li>
                          <a href="#!">424</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <h6 className="font-weight-bold mb-3">活動</h6>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#!">十二月新品上市</a>
                        </li>
                        <li>
                          <a href="#!">免運活動</a>
                        </li>
                        <li>
                          <a href="#!">換季出清</a>
                        </li>
                        <li>
                          <a href="#!">VIP商品區</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6">
                      <img
                        className="img-fluid"
                        src="images/navbar/https___hk.hypebeast.com_files_2020_10_fairfax-usa-2020-fall-winter-collection-lookbook-8-scaled.jpg"
                        alt={''}
                        style={{ objectFit: 'cover', height: '300px' }}
                      ></img>
                    </div>
                    <div className="col-6">
                      <img
                        className="img-fluid"
                        src="images/navbar/黑人單人照.JPG"
                        alt={''}
                        style={{ objectFit: 'cover', height: '300px' }}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderHome
