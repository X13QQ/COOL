import React, { useEffect, useState } from 'react'
import HeaderOther from '../components/HeaderOther'
import Topbtn from '../components/Topbtn'
import Footer from '../components/Footer'
import Magnifier from 'react-magnifier'
// clothing
function Clothing() {
  const [status, setStatus] = useState(0)
  // const [accordionActived, setAccordionActived] = useState(false)

  const [clothingImages, setClothingImages] = useState([])
  const [clothingData, setClothingData] = useState([])

  const [choose, setChoose] = useState(0)

  useEffect(() => {
    // async await
    async function getClothing() {
      // 要使用try-catch來作錯誤處理
      try {
        // 從伺服器得到資料
        const response = await fetch('http://localhost:3001/clothing', {
          method: 'get',
        })
        if (response.ok) {
          // 剖析資料為JS的數值
          const data = await response.json()

          // 設定資料到ProductRes狀態
          setClothingImages(data)
          console.log(data)
        }
      } catch (error) {
        // 發生錯誤的處理情況
        alert('無法得到伺服器資料，請稍後再重試')
        console.log(error)
      }
    }
    getClothing()
  }, [])

  function getClothingData(id) {
    // 從伺服器得到資料
    let url = new URL('http://localhost:3001/clothing/' + id)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setClothingData(data)
      })
      .catch((err) => console.log(err))
  }

  const modal = () => {
    return (
      <div
        id="what"
        className="clothing-modal d-flex justify-content-center align-items-center"
        onClick={(e) => {
          // console.log(e.target.id)
          if (e.target.id === 'what') {
            setStatus(0)
          }
        }}
      >
        <div className="clothing-content p-5 position-relative">
          <a
            href="/#"
            className="close-button position-absolute "
            onClick={(e) => {
              e.preventDefault()
              setStatus(0)
            }}
          >
            CLOSE
            <span>X</span>
          </a>
          <h3 className="text-center font-weight-bold mb-4">產品詳情</h3>
          <div className="row mb-4">
            <div className="col-6">
              <Magnifier
                className="btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                src={clothingImages[choose].src}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                alt={' '}
              />
            </div>
            <div className="col-6">
              {clothingData.map((val, key) => {
                return (
                  <div className="pb-3">
                    {/* 帽子標籤 ↓ */}
                    <a
                      href="#!"
                      className="clothing-accordion-a d-flex mb-4 justify-content-between align-items-center font-weight-bold text-decoration-none h5"
                      style={{ color: '#353c1d' }}
                      onClick={(e) => {
                        e.preventDefault()
                        // document.getElementById('top')
                        // setAccordionActived(!accordionActived)
                      }}
                    >
                      {val.category}
                      {/* 帽子右邊的箭頭 ↓ */}
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
                    <ul
                      id={`sort${val.id}`}
                      // className={
                      //   'clothing-accordion-ul list-unstyled mb-0 ' +
                      //   (accordionActived ? 'accordion-actived' : '')
                      // }
                    >
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
                        <div className="row">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle mx-2 my-2"
                              type="button"
                              // id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              onClick={(e) => {
                                e.preventDefault()
                                document
                                  .getElementById(`dropdownMenuButton${val.id}`)
                                  .classList.toggle('clothing-accordion-ul')
                              }}
                            >
                              尺寸
                            </button>
                            <div
                              id={`dropdownMenuButton${val.id}`}
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#!">
                                S
                              </a>
                              <a className="dropdown-item" href="#!">
                                M
                              </a>
                              <a className="dropdown-item" href="#!">
                                L
                              </a>
                              <a className="dropdown-item" href="#!">
                                XL
                              </a>
                            </div>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle mx-2 my-2"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              顏色
                            </button>
                            <div
                              className="dropdown-menu "
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#!">
                                黑
                              </a>
                              <a className="dropdown-item" href="#!">
                                白
                              </a>
                              <a className="dropdown-item" href="#!">
                                藍
                              </a>
                              <a className="dropdown-item" href="#!">
                                紅
                              </a>
                            </div>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle mx-2 my-2"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              數量
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#!">
                                1
                              </a>
                              <a className="dropdown-item" href="#!">
                                2
                              </a>
                              <a className="dropdown-item" href="#!">
                                3
                              </a>
                              <a className="dropdown-item" href="#!">
                                4
                              </a>
                              <a className="dropdown-item" href="#!">
                                5
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end mb-3">
                          <a
                            className="d-block text-right my-2"
                            style={{ fontSize: '12px' }}
                            href="/#"
                          >
                            加入購物車
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                )
              })}
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
    )
  }
  return (
    <>
      <HeaderOther />
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
        {/*  modal */}
        {status === 1 ? modal() : ''}
        <div
          className="horizon-line-sm position-relative my-5 mx-auto text-center h6"
          style={{ letterSpacing: '10px' }}
        >
          <span
            className="font-weight-bold position-relative"
            style={{ top: '-9.5px' }}
          >
            2020 春/夏
          </span>
        </div>
        <div>
          <div className="row wrapper px-5 mx-0">
            <div
              className="col-6 box1 mx-0"
              style={{
                backgroundImage: `url('${
                  clothingImages.length > 0 ? clothingImages[4].src : ''
                }')`,
              }}
              onClick={() => {
                setChoose(4)
                setStatus(1)
                // 抓商品清單
                console.log('5')
                getClothingData('5')
              }}
            ></div>
            <div className="col-3 box2 pl-0">
              <div
                className="box2-1 box mx-0"
                style={{
                  width: '100%',
                  backgroundImage: `url('${
                    clothingImages.length > 0 ? clothingImages[1].src : ''
                  }')`,
                }}
                onClick={() => {
                  setChoose(1)
                  setStatus(1)
                  console.log('2')
                  getClothingData('2')
                }}
              ></div>
              <div
                className="box2-2 box mx-0"
                style={{
                  width: '100%',
                  backgroundImage: `url('${
                    clothingImages.length > 0 ? clothingImages[3].src : ''
                  }')`,
                }}
                onClick={() => {
                  setChoose(3)
                  setStatus(1)
                  console.log('3')
                  getClothingData('3')
                }}
              ></div>
            </div>
            <div className="col-3 box3 pl-0">
              <div
                className="box3-1 box ml-0"
                style={{
                  width: '100%',
                  backgroundImage: `url('${
                    clothingImages.length > 0 ? clothingImages[0].src : ''
                  }')`,
                }}
                onClick={() => {
                  setChoose(0)
                  setStatus(1)
                  console.log('1')
                  getClothingData('1')
                }}
              ></div>
              <div
                className="box3-2 box ml-0"
                style={{
                  width: '100%',
                  backgroundImage: `url('${
                    clothingImages.length > 0 ? clothingImages[2].src : ''
                  }')`,
                }}
                onClick={() => {
                  setChoose(2)
                  setStatus(1)
                  console.log('3')
                  getClothingData('3')
                }}
              ></div>
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
            <div
              className="col-6 dwbox1  mx-0 pl-0"
              style={{
                width: '100%',
                backgroundImage: `url('${
                  clothingImages.length > 0 ? clothingImages[5].src : ''
                }')`,
              }}
              onClick={() => {
                setChoose(5)
                setStatus(1)
                console.log('6')
                getClothingData('6')
              }}
            ></div>
            <div className="row col-6 mx-0 pr-0">
              <div className="col-6 dwbox2 px-0">
                <div
                  className="dwbox2-1 box mx-0"
                  style={{
                    width: '100%',
                    backgroundImage: `url('${
                      clothingImages.length > 0 ? clothingImages[6].src : ''
                    }')`,
                  }}
                  onClick={() => {
                    setChoose(6)
                    setStatus(1)
                    console.log('7')
                    getClothingData('7')
                  }}
                ></div>
                <div
                  className="dwbox2-2 box mx-0 mb-0"
                  style={{
                    width: '100%',
                    backgroundImage: `url('${
                      clothingImages.length > 0 ? clothingImages[8].src : ''
                    }')`,
                  }}
                  onClick={() => {
                    setChoose(8)
                    setStatus(1)
                    console.log('9')
                    getClothingData('9')
                  }}
                ></div>
              </div>
              <div className="col-6 dwbox3 pr-0">
                <div
                  className="dwbox3-1 box mx-0 "
                  style={{
                    width: '100%',
                    backgroundImage: `url('${
                      clothingImages.length > 0 ? clothingImages[7].src : ''
                    }')`,
                  }}
                  onClick={() => {
                    setChoose(7)
                    setStatus(1)
                    console.log('8')
                    getClothingData('8')
                  }}
                ></div>
                <div
                  className="dwbox3-2 box mx-0 mb-0"
                  style={{
                    width: '100%',
                    backgroundImage: `url('${
                      clothingImages.length > 0 ? clothingImages[9].src : ''
                    }')`,
                  }}
                  onClick={() => {
                    setChoose(9)
                    setStatus(1)
                    console.log('10')
                    getClothingData('10')
                  }}
                ></div>
              </div>
              <div className="col-12 px-0">
                <div
                  className="dwbox4 box mx-0"
                  style={{
                    width: '100%',
                    margin: '10px auto',
                    backgroundImage: `url('${
                      clothingImages.length > 0 ? clothingImages[10].src : ''
                    }')`,
                  }}
                  onClick={() => {
                    setChoose(10)
                    setStatus(1)
                    console.log('11')
                    getClothingData('11')
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Topbtn />
      <Footer></Footer>
    </>
  )
}

export default Clothing
