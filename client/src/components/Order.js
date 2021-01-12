import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Accordion, Card, useAccordionToggle } from 'react-bootstrap'
import { ArrowDown, ArrowUp } from './icons'

function CustomToggle({ children, eventKey }) {
  const [up, setUp] = useState(true)
  const open = () => setUp(!up)
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    open()
  })
  return (
    <button type="button" onClick={decoratedOnClick}>
      {up ? <ArrowDown className="mx-2" /> : <ArrowUp className="mx-2" />}
      {children}
    </button>
  )
}

const Order = (props) => {
  const [OrderDataProcessing, setOrderDataProcessing] = useState([])
  const [OrderDataSolved, setOrderDataSolved] = useState([])
  const [OrderDataRefundlist, setOrderDataRefundlist] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/member/order/processing')
      .then((res) => res.json())
      .then((data) => setOrderDataProcessing(data))
      .catch((err) => console.log('錯誤:', err))
    fetch('http://localhost:3001/member/order/solved')
      .then((res) => res.json())
      .then((data) => setOrderDataSolved(data))
      .catch((err) => console.log('錯誤:', err))
    fetch('http://localhost:3001/member/order/refundlist')
      .then((res) => res.json())
      .then((data) => setOrderDataRefundlist(data))
      .catch((err) => console.log('錯誤:', err))
  }, [])

  return (
    <>
      <Tabs
        className="m-2"
        defaultActiveKey="processing"
        transition={false}
        id=""
      >
        <Tab
          className="orders overflow-auto"
          eventKey="processing"
          title="處理中"
        >
          {OrderDataProcessing.map((val, key) => {
            return (
              <div className="orderlist m-3" key={key} id={key}>
                <ul className="m-2 d-flex flex-row list-unstyled d-flex justify-content-around">
                  <li className="">訂單編號:　{val.no}</li>
                  <li className="">購買日期:　{val.date}</li>
                  <li className="">付款金額:　{val.price}</li>
                </ul>
                <p className="solid-bottom"></p>
                <div className="m-0">
                  <Accordion defaultActiveKey="">
                    <Card>
                      <CustomToggle eventKey="0">檢視完整訂單</CustomToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>{val.amount}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            )
          })}
        </Tab>

        <Tab className="orders overflow-auto" eventKey="solved" title="已完成">
          {OrderDataSolved.map((val, key) => {
            return (
              <div className="orderlist m-3" key={key} id={key}>
                <ul className="m-2 d-flex flex-row list-unstyled d-flex justify-content-around">
                  <li className="">訂單編號:　{val.no}</li>
                  <li className="">購買日期:　{val.date}</li>
                  <li className="">付款金額:　{val.price}</li>
                </ul>
                <p className="solid-bottom"></p>
                <div className="m-0">
                  <Accordion defaultActiveKey="">
                    <Card>
                      <CustomToggle eventKey="0">檢視完整訂單</CustomToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>{val.amount}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            )
          })}
        </Tab>

        <Tab
          className="orders overflow-auto"
          eventKey="orderlist"
          title="退款紀錄"
        >
          {OrderDataRefundlist.map((val, key) => {
            return (
              <div className="orderlist m-3" key={key} id={key}>
                <ul className="m-2 d-flex flex-row list-unstyled d-flex justify-content-around">
                  <li className="">訂單編號:　{val.no}</li>
                  <li className="">購買日期:　{val.date}</li>
                  <li className="">付款金額:　{val.price}</li>
                </ul>
                <p className="solid-bottom"></p>
                <div className="m-0">
                  <Accordion defaultActiveKey="">
                    <Card>
                      <CustomToggle eventKey="0">檢視完整訂單</CustomToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>{val.amount}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            )
          })}
        </Tab>
      </Tabs>
    </>
  )
}

export default Order
