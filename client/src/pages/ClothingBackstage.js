import React, { useEffect, useState } from 'react'
import {
  Form,
  Accordion,
  Card,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

function ClothingBackstage() {
  const [status, setStatus] = useState(0)
  // const [accordionActived, setAccordionActived] = useState(false)

  const [clothingImages, setClothingImages] = useState([])
  const [clothingData, setClothingData] = useState([])

  const [choose, setChoose] = useState(0)

  const [image, setImage] = useState(defaultSrc)
  const [cropData, setCropData] = useState('#')
  const [cropper, setCropper] = useState<any>();
  // const onChange = (e:any) => {
  //   e.preventDefault();
  //   let files;
  //   if (e.dataTransfer) {
  //     files = e.dataTransfer.files;
  //   } else if (e.target) {
  //     files = e.target.files;
  //   }
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result as any);
  //   };
  //   reader.readAsDataURL(files[0]);

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL())
    }
  }

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
        className="clothingbackstage clothing-modal d-flex justify-content-center align-items-center"
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
              <div className="row">
                <input type="file" onChange={onChange} />
                <button style={{ float: 'right' }} onClick={getCropData}>
                  確定
                </button>
              </div>

              <Cropper
                className="btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                src={clothingImages[choose].src}
                style={{
                  width: '100%',
                  height: '80%',
                  objectFit: 'cover',
                }}
                initialAspectRatio={16 / 9}
                guides={false}
                crop={onCrop}
                ref={cropperRef}
                alt={' '}
              />
            </div>
            <div className="col-6">
              {clothingData.map((val, key) => {
                return (
                  <Accordion defaultActiveKey="0">
                    <Card className="pb-3">
                      {/* 帽子標籤 ↓ */}
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="row justify-content-between"
                      >
                        <a
                          href="#!"
                          className="clothing-accordion-a  d-flex align-items-center font-weight-bold text-decoration-none h5"
                          style={{ color: '#353c1d' }}
                        >
                          上衣
                          {/* {val.category === '1'
                          ? '上衣'
                          : val.category === '2'
                          ? '帽子'
                          : val.category === '3'
                          ? '外套'
                          : val.category === '4'
                          ? '褲子'
                          : val.category === '5'
                          ? '鞋款'
                          : val.category === '6'
                          ? '配件'
                          : ''} */}
                          {/* 帽子右邊的箭頭 ↓ */}
                          <img
                            src="images/素材/icon/arrow_G.svg"
                            style={{
                              width: '20px',
                              transform: 'rotate(-90deg)',
                              position: 'relative',
                              top: '-3.5px',
                              margin: '0 0 0 15px',
                            }}
                            alt={' '}
                          />
                        </a>
                        <a>
                          <FontAwesomeIcon
                            className="mx-3"
                            style={{ cursor: 'pointer' }}
                            icon={faPlusCircle}
                          />
                          <FontAwesomeIcon
                            className="mx-3"
                            style={{ cursor: 'pointer' }}
                            icon={faTrash}
                          />
                        </a>
                      </Accordion.Toggle>

                      <Accordion.Collapse
                        eventKey="0"
                        id={`sort${val.id}`}
                        // className={
                        //   'clothing-accordion-ul list-unstyled mb-0 ' +
                        //   (accordionActived ? 'accordion-actived' : '')
                        // }
                      >
                        <li className="px-5">
                          <div className="">
                            <DropdownButton
                              id="dropdown-basic-button"
                              className="mx-2 my-2"
                              title="品牌"
                            >
                              <Dropdown.Item href="#/action-1">
                                黑
                              </Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton
                              id="dropdown-basic-button"
                              className="mx-2 my-2"
                              title="品名"
                            >
                              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                            </DropdownButton>

                            <Form.Group controlId="amount" className="row">
                              <Form.Label
                                style={{
                                  fontSize: '16px',
                                  padding: '0 0 0 28px',
                                }}
                                className="mx-2 my-2"
                              >
                                金額
                              </Form.Label>
                              <Form.Control
                                type="number"
                                // placeholder="amount"
                                className="col-4 mx-2 col-4"
                              />
                            </Form.Group>
                          </div>
                        </li>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                )
              })}
            </div>
          </div>
          <div
            className="d-flex justify-content-center py-3 row "
            style={{ backgroundColor: 'rgba(53, 60, 29, 0.2)' }}
          >
            <button
              href="#!"
              className="d-inline-block font-weight-bold text-decoration-none py-2 px-5 allProductbtn mx-2"
            >
              確認
            </button>
            <button
              className="d-inline-block font-weight-bold text-decoration-none py-2 px-5 allProductbtn mx-2"
              onClick={(e) => {
                e.preventDefault()
                setStatus(0)
              }}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <main style={{ marginTop: '24px' }}>
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
            <div
              className="d-flex justify-content-center py-3 row "
              style={{ backgroundColor: 'rgba(53, 60, 29, 0.2)' }}
            >
              <button
                href="#!"
                className="d-inline-block font-weight-bold text-decoration-none py-2 px-5 allProductbtn mx-2"
              >
                確認
              </button>
              <button
                className="d-inline-block font-weight-bold text-decoration-none py-2 px-5 allProductbtn mx-2"
                onClick={(e) => {
                  e.preventDefault()
                  setStatus(0)
                }}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </main>
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
    </>
  )
}
export default ClothingBackstage
