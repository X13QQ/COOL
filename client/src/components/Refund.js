import React, { useState } from 'react'
import { Tabs, Tab, Accordion, Card, useAccordionToggle } from 'react-bootstrap'
import { RefundData } from './RefundData'
import { ArrowDown, ArrowUp } from '../components/icons'

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

const Refund = (props) => {
  return (
    <>
      <Tabs
        className="m-2"
        defaultActiveKey="processing"
        transition={false}
        id=""
      >
        <Tab
          className="refunds overflow-auto"
          eventKey="processing"
          title="處理中"
        >
          {RefundData.map((val, key) => {
            return (
              <div className="refundlist m-3" key={key} id={key}>
                <ul className="m-2 d-flex flex-row list-unstyled d-flex justify-content-around">
                  <li className="">訂單編號:　{val.order}</li>
                  <li className="">購買日期:　{val.date}</li>
                  <li className="">付款金額:　{val.amount}</li>
                </ul>
                <p className="solid-bottom"></p>
                <div className="m-0">
                  <Accordion defaultActiveKey="">
                    <Card>
                      <CustomToggle eventKey="0">檢視完整訂單</CustomToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>{val.list}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            )
          })}
        </Tab>

        <Tab eventKey="solved" title="已退款">
          <div className="m-3">2</div>
        </Tab>
        <Tab eventKey="rejected" title="不同意退款">
          <div className="m-3">3</div>
        </Tab>
      </Tabs>
    </>
  )
}

export default Refund
