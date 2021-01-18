import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import HeaderOther from '../components/HeaderOther'
import Footer from '../components/Footer'

function ShoppingCart(props) {
  const [status, setStatus] = useState(1)
  const OrderSummary = () => {
    return (
      <div className="col-3 order-summary border">
        <h4 className="m-3">訂單摘要</h4>
        <hr />
        <label for="">商品總計 NT$ </label>
        <span> {props.price} </span>
        <br />
        <label for="">運費總計 NT$ </label>
        <span> 0 </span>
        <br />
        <br />
        <a href="#!">使用優惠券</a>
        <hr />
        <label for="">結帳總金額 NT$ </label>
        <span> 0 </span>
        <br />
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            setStatus(status + 1)
          }}
        >
          前往結帳
        </button>
      </div>
    )
  }
  const checkout = () => {
    return (
      <>
        <div className="container mt-5">
          <div>
            <div className="row">
              <div className="d-flex col-4 set-line-height">
                <div className="rounded-circle text-center nowpage">
                  <span>1</span>
                </div>
                <span>確認訂單</span>
              </div>

              <div className="d-flex col-4 set-line-height">
                <div className="rounded-circle text-center otherpage">
                  <span>2</span>
                </div>
                <span>地址與付款方式</span>
              </div>
              <div className="d-flex col-4 set-line-height">
                <div className="rounded-circle text-center otherpage">
                  <span>3</span>
                </div>
                <span>完成訂單</span>
              </div>
            </div>
          </div>
          <div className="select-all border m-2">
            <input type="checkbox" />
            <label className="title-fontsize">選擇全部</label>
          </div>
          <div className="row">
            <div className="col-9 order-product border">
              <div className=" brand border m-2">
                <input type="checkbox" />
                <label for="brand-name">Adidas</label>
                <hr />
                <div className="product row">
                  <div className="col-3">
                    <div className="img-box">
                      <img src="./img/product1.jpg" alt={''}></img>
                    </div>
                  </div>
                  <div className="col-3">GOFE兩雙一組/右手超人襪</div>
                  <div className="col-3">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="col-3">NT$ 3,000</div>
                </div>
              </div>

              <div className="brand border m-2">
                <input type="checkbox" />
                <label>Adidas2</label>
                <hr />
                <div className="product row">
                  <div className="col-3">
                    <div className="img-box">
                      <img src="./img/product1.jpg" alt={''}></img>
                    </div>
                  </div>
                  <div className="col-3">GOFE兩雙一組/右手超人襪</div>
                  <div className="col-3">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="col-3">NT$ 3,000</div>
                </div>
                <div className="product row">
                  <div className="col-3">
                    <div className="img-box">
                      <img src="./img/product1.jpg" alt={''} />
                    </div>
                  </div>
                  <div className="col-3">GOFE兩雙一組/右手超人襪</div>
                  <div className="col-3">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="col-3">NT$ 3,000</div>
                </div>
              </div>
            </div>
            {OrderSummary()}
          </div>
        </div>
      </>
    )
  }
  const PaymentMethodByCash = () => {
    return (
      <>
        <div className="container">
          <div>
            <div className="row">
              <div className="d-flex col-4 set-line-height">
                <div className="rounded-circle text-center otherpage">
                  <span>1</span>
                </div>
                <span>確認訂單</span>
              </div>

              <div className="d-flex col-4 set-line-height">
                <div className="rounded-circle text-center nowpage">
                  <span>2</span>
                </div>
                <span>地址與付款方式</span>
              </div>
              <div className="d-flex col-4 set-line-height">
                <div className="rounded-circle text-center otherpage">
                  <span>3</span>
                </div>
                <span>完成訂單</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-9 order-info border">
              <div>
                <div className="select-all d-flex border-dark border-bottom m-2">
                  <div className="title-template"></div>
                  <label className="title-fontsize">選擇付款方式</label>
                </div>

                <div>
                  <Tabs
                    className="row container p-0 m-0"
                    defaultActiveKey="processing"
                    id=""
                  >
                    <Tab title="VISA(宅配)" eventKey="processing">
                      <div className="choosing">
                        <div className="container">
                          <div className="d-flex">
                            <div className="title-template"></div>
                            <label className="title-fontsize">
                              填寫信用卡資訊
                            </label>
                          </div>
                          <div>
                            <div className="d-flex credit-card-info justify-content-between">
                              <input
                                className="credit-card-info-num"
                                type="text"
                                maxlength="4"
                                placeholder="xxxx"
                              />
                              <input
                                className="credit-card-info-num"
                                type="text"
                                maxlength="4"
                                placeholder="xxxx"
                              />
                              <input
                                className="credit-card-info-num"
                                type="text"
                                maxlength="4"
                                placeholder="xxxx"
                              />
                              <input
                                className="credit-card-info-num"
                                type="text"
                                maxlength="4"
                                placeholder="xxxx"
                              />
                            </div>
                            <div className="d-flex credit-card-info justify-content-between">
                              <input
                                className="credit-card-info-date"
                                type="text"
                                placeholder="MM/YY"
                              />
                              <input
                                className="credit-card-info-savecode"
                                type="text"
                                placeholder="安全碼"
                              />
                              <input
                                className="credit-card-info-owner"
                                type="text"
                                placeholder="卡片持有人"
                              />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="container">
                          <div className="d-flex">
                            <div className="title-template"></div>
                            <label className="title-fontsize">收件人資訊</label>
                          </div>
                        </div>
                        <hr />
                        <div className="container">
                          <div className="d-flex">
                            <div className="title-template"></div>
                            <label className="title-fontsize">發票資訊</label>
                          </div>
                          <div className="invoice-info">
                            <input type="radio" name="invoice" />
                            <span>捐贈</span>
                            <input type="radio" name="invoice" />
                            <span>二聯式電子發票</span>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </Tab>
                    <Tab
                      className="choosing"
                      title="超商取付 OOO門市"
                      eventKey="solved"
                    >
                      <div className="choosing">
                        <div className="container">
                          <div className="d-flex">
                            <div className="title-template"></div>
                            <label className="title-fontsize">
                              選擇城市/地區
                            </label>
                          </div>
                          <hr />
                          <select required className="choose-city-dropdown">
                            <option
                              value=""
                              disabled="disabled"
                              selected
                              hidden
                            >
                              請選擇城市
                            </option>
                            <option value="1">桃園市</option>
                            <option value="2">台中市</option>
                            <option value="3">高雄市</option>
                          </select>
                          <select required className="choose-city-dropdown">
                            <option
                              value=""
                              disabled="disabled"
                              selected
                              hidden
                            >
                              請選擇區域
                            </option>
                            <option value="1">請先選擇城市</option>
                          </select>
                          <select required className="choose-city-dropdown">
                            <option
                              value=""
                              disabled="disabled"
                              selected
                              hidden
                            >
                              請選擇門市
                            </option>
                            <option value="1">請先選擇區域</option>
                          </select>
                        </div>

                        <hr />

                        <div className="container">
                          <div className="d-flex">
                            <div className="title-template"></div>
                            <label className="title-fontsize">選擇門市</label>
                          </div>
                          <hr />
                          <input
                            type="text"
                            placeholder="收件人姓名"
                            className="store-info-textbox"
                          />
                          <input
                            type="text"
                            placeholder="行動電話"
                            className="store-info-textbox"
                          />
                          <input
                            type="text"
                            placeholder="電子郵件地址"
                            className="store-info-textbox"
                          />
                        </div>
                        <hr />
                        <div className="container">
                          <div className="d-flex">
                            <div className="title-template"></div>
                            <label className="title-fontsize">發票資訊</label>
                          </div>
                          <hr />
                          <div className="invoice-info">
                            <input type="radio" name="invoice" />
                            <span>捐贈</span>
                            <input type="radio" name="invoice" />
                            <span>二聯式電子發票</span>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
              <hr />
            </div>
            {OrderSummary()}
          </div>
        </div>
      </>
    )
  }
  const CompleteOrder = () => {
    return (
      <>
        <div className="container mt-5">
          <div>
            <div className="row">
              <div className="d-flex col-4 set-line-height">
                <div className="rounded-circle text-center otherpage">
                  <span>1</span>
                </div>
                <span>確認訂單</span>
              </div>

              <div className="d-flex col-4 set-line-height">
                <div className="rounded-circle text-center otherpage">
                  <span>2</span>
                </div>
                <span>地址與付款方式</span>
              </div>
              <div className="d-flex col-4 set-line-height">
                <div className="rounded-circle text-center nowpage">
                  <span>3</span>
                </div>
                <span>完成訂單</span>
              </div>
            </div>
          </div>
          <div className=" brand border m-2">
            <div className="d-flex set-line-height">
              <div className="tick">
                <img src="./img/check_small.svg" alt={''} />
              </div>
              <span className="title-fontsize">訂單完成</span>
            </div>
            <p className="font-color-gray">
              感謝購酷飛鳥服飾，預定憑證及使用詳情將寄至您的電子信箱
            </p>
            <div className="select-all d-flex border-dark border-bottom m-2">
              <div className="title-template"></div>
              <label className="title-fontsize">訂單明細</label>
            </div>
            <div className="border-left border-dark p-3 m-2">
              <span className="order-info-smalltitle">訂單狀態</span>
              <br />
              <span className="font-color-gray">訂單日期:</span>
              <br />
              <span className="font-color-gray">訂單號碼:</span>
              <br />
              <span className="font-color-gray">狀態:</span>
              <br />
            </div>
            <div className="border-left border-dark p-3 m-2">
              <span className="order-info-smalltitle">收件人資訊</span>
              <br />
              <span className="font-color-gray">收件人姓名:</span>
              <br />
              <span className="font-color-gray">收寄人電話:</span>
              <br />
              <span className="font-color-gray">電子郵件:</span>
              <br />
            </div>
            <div className="border-left border-dark p-3 m-2">
              <span className="order-info-smalltitle">運送方式</span>
              <br />
              <span className="font-color-gray">超商取貨付款:</span>
              <br />
              <span className="font-color-gray">付款方式:</span>
              <span className="font-color-gray">超商取貨付款</span>
              <br />
              <span className="font-color-gray">門市名稱:</span>
              <span id="store_name" className="font-color-gray">
                XX門市
              </span>
              <br />
            </div>
            <div className="select-all d-flex border-dark border-bottom m-2">
              <div className="title-template"></div>
              <label className="title-fontsize">商品明細</label>
            </div>
            <div className="m-3">
              <span>Adidas</span>
            </div>
            <div className="row ml-1">
              <div className="col-3">
                <div className="img-box">
                  <img src="./img/product1.jpg" alt={''} />
                </div>
              </div>
              <div className="col-6">
                <span>GOFE兩雙一組/右手超人襪</span>
                <br />
                <span>價格：NT$</span> 3,000 <br />
                <span>數量：</span> 1 <br />
                <span>預計到貨日期：</span> 2020/12/15 <br />
              </div>
              <div className="col-3">
                <span>小計：NT$ </span>3,000
              </div>
            </div>
            <div className="select-all d-flex border-dark border-bottom m-2"></div>
            <div className="m-2">
              <div className="d-flex justify-content-between">
                <span>總計：</span>
                <span>NT$ 3,000</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>運費：</span>
                <span>NT$ 60</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>優惠券(未使用)：</span>
                <span>-NT$ 0</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>結帳金額：</span>
                <span className="final-price">NT$ 3,060</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <HeaderOther />
      {status === 1
        ? checkout()
        : status === 2
        ? PaymentMethodByCash()
        : status === 3
        ? CompleteOrder()
        : ''}

      <Footer />
    </>
  )
}

export default ShoppingCart
