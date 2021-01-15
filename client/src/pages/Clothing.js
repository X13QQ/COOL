<<<<<<< HEAD
import React from 'react'
import Header1 from '../components/Header1'

function Clothing() {
  return (
    <>
      <Header1 />
    </>
  )
}

export default Clothing
=======
import React from 'react'

function Clothing() {
  return (
    <>
      <main style={{ marginTop: '24px' }}>
        <div>
          <div className="row headerwrapper">
            <div
              className="col-10 h_box h_box1"
              style={{ paddingRight: '0px', paddingLeft: '0px' }}
            >
              <div
                className="text-center h_box1_title1"
                style={{ width: '25%' }}
              >
                <span>Do what</span>
              </div>
              <div
                className="text-center h_box1_title2"
                style={{ width: '40%' }}
              >
                <span>you want to do</span>
              </div>
            </div>
            <div
              className="col-2 h_box2"
              style={{ paddingRight: '0px', paddingLeft: '0px' }}
            >
              <div className="h_box h_box2-1" style={{ width: '100%' }}></div>
              <div className="h_box h_box2-2 " style={{ width: '100%' }}>
                <h5 className="text-center title_text ">
                  {' '}
                  The best clothes of the year are here
                </h5>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="clothing-modal d-none justify-content-center align-items-center">
          <div className="clothing-content p-5 position-relative">
            <a
              href="/#"
              className="close-button position-absolute text-decoration-none "
            >
              CLOSE
              <span>X</span>
            </a>
            <h3 className="text-center font-weight-bold mb-4">產品詳情</h3>
            <div className="row mb-4">
              <div className="col-6">
                <img
                  className="btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  src="images/穿搭集/內容視覺/JUNE_EDITED-8-v1590602563975.jpg"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  alt={' '}
                />
              </div>
              <div className="col-6">
                <div className="pb-3">
                  <a
                    href="/#"
                    className="d-flex mb-4 justify-content-between align-items-center font-weight-bold text-decoration-none h5"
                    style={{ color: '#353c1d' }}
                  >
                    帽子
                    <img
                      src="images/素材/icon/arrow_G.svg"
                      style={{
                        width: '20px',
                        transform: 'rotate(-90deg)',
                        position: 'relative',
                        top: '-3.5px',
                      }}
                      alt={' '}
                    />
                  </a>
                  <ul className="list-unstyled">
                    <li className="px-5">
                      <p
                        style={{
                          fontSize: '12px',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          display: 'block',
                        }}
                      >
                        YEEZY BOOST 350 V2 - CBLACK/ RED
                      </p>
                      <p style={{ fontSize: '12px' }}>NT$6,800</p>
                      <div className="d-flex justify-content-end">
                        <a
                          className="d-block text-right"
                          style={{ fontSize: '12px' }}
                          href="/#"
                        >
                          加入購物車
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pb-3">
                  <a
                    href="/#"
                    className="d-flex mb-4 justify-content-between align-items-center font-weight-bold text-decoration-none h5"
                    style={{ color: '#353c1d' }}
                  >
                    外套
                    <img
                      src="images/素材/icon/arrow_G.svg"
                      style={{
                        width: '20px',
                        transform: 'rotate(-90deg)',
                        position: 'relative',
                        top: '-3.5px',
                      }}
                      alt={' '}
                    />
                  </a>
                  <ul className="list-unstyled">
                    <li className="px-5">
                      <p
                        style={{
                          fontSize: '12px',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          display: 'block',
                        }}
                      >
                        YEEZY BOOST 350 V2 - CBLACK/ RED
                      </p>
                      <p style={{ fontSize: '12px' }}>NT$6,800</p>
                      <div className="d-flex justify-content-end">
                        <a
                          className="d-block text-right"
                          style={{ fontSize: '12px' }}
                          href="/#"
                        >
                          加入購物車
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pb-3">
                  <a
                    href="/#"
                    className="d-flex mb-4 justify-content-between align-items-center font-weight-bold text-decoration-none h5"
                    style={{ color: '#353c1d' }}
                  >
                    上衣
                    <img
                      src="images/素材/icon/arrow_G.svg"
                      style={{
                        width: '20px',
                        transform: 'rotate(-90deg)',
                        position: 'relative',
                        top: '-3.5px',
                      }}
                      alt={' '}
                    />
                  </a>
                </div>
                <div className="pb-3">
                  <a
                    href="/#"
                    className="d-flex mb-4 justify-content-between align-items-center font-weight-bold text-decoration-none h5"
                    style={{ color: '#353c1d' }}
                  >
                    長褲
                    <img
                      src="images/素材/icon/arrow_G.svg"
                      style={{
                        width: '20px',
                        transform: 'rotate(-90deg)',
                        position: 'relative',
                        top: '-3.5px',
                      }}
                      alt={' '}
                    />
                  </a>
                </div>
                <div className="pb-3">
                  <a
                    href="/#"
                    className="d-flex mb-4 justify-content-between align-items-center font-weight-bold text-decoration-none h5"
                    style={{ color: '#353c1d' }}
                  >
                    鞋款
                    <img
                      src="images/素材/icon/arrow_G.svg"
                      style={{
                        width: '20px',
                        transform: 'rotate(-90deg)',
                        position: 'relative',
                        top: '-3.5px',
                      }}
                      alt={' '}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-center py-3"
              style={{ backgroundColor: 'rgba(53, 60, 29, 0.2)' }}
            >
              <a
                href="/#"
                className="d-inline-block font-weight-bold text-decoration-none py-2 px-5"
                style={{
                  border: '3px solid #353c1d',
                  color: '#353c1d',
                  backgroundColor: 'white',
                }}
              >
                查看全部商品
              </a>
            </div>
          </div>
        </div>
        <div
          className="horizon-line-sm position-relative my-5 mx-auto text-center h6"
          style={{ letterSpacing: '10px' }}
        >
          <span className="font-weight-bold position-relative">2020 春/夏</span>
        </div>
        <div>
          <div className="row wrapper px-5 mx-0">
            <div className="col-6 box1 mx-0"></div>
            <div className="col-3 box2 pl-0">
              <div className="box2-1 box mx-0" style={{ width: '100%' }}></div>
              <div className="box2-2 box mx-0" style={{ width: '100%' }}></div>
            </div>
            <div className="col-3 box3 pl-0">
              <div className="box3-1 box ml-0" style={{ width: '100%' }}></div>
              <div className="box3-2 box ml-0" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        <br />
        <div
          className="horizon-line-sm position-relative my-5 mx-auto text-center h6"
          style={{ letterSpacing: '10px' }}
        >
          <span
            className="font-weight-bold position-relative"
            style={{ top: '-9.5px' }}
          >
            2020 秋/冬
          </span>
        </div>
        <div>
          <div className="row wrapper2 px-5 mx-0 ">
            <div className="col-6 dwbox1  mx-0 pl-0"></div>
            <div className="row col-6 mx-0 pr-0">
              <div className="col-6 dwbox2 px-0">
                <div
                  className="dwbox2-1 box mx-0"
                  style={{ width: '100%' }}
                ></div>
                <div
                  className="dwbox2-2 box mx-0 mb-0"
                  style={{ width: '100%' }}
                ></div>
              </div>
              <div className="col-6 dwbox3 pr-0">
                <div
                  className="dwbox3-1 box mx-0 "
                  style={{ width: '100%' }}
                ></div>
                <div
                  className="dwbox3-2 box mx-0 mb-0"
                  style={{ width: '100%' }}
                ></div>
              </div>
              <div className="col-12 px-0">
                <div
                  className="dwbox4 box mx-0"
                  style={{ width: '100%', margin: '10px auto' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Clothing
>>>>>>> pinciao
