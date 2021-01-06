import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { ArrowDown } from '../components/icons'

function MainRefund(props) {
  return (
    <>
      <div className="main">
        <div className="title ml-3 my-2">退款申請</div>
        <div className="mx-2 border border-top-0">
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
              <div className="refundlist m-3">
                <ul className="m-2 d-flex flex-row list-unstyled d-flex justify-content-around">
                  <li className="">訂單編號:　202012150001</li>
                  <li className="">購買日期:　2020/12/15</li>
                  <li className="">付款金額:　$6000</li>
                </ul>
                <p className="solid-bottom"></p>
                <div className="my-2">
                  <ArrowDown className="mx-4" />
                  檢視完整訂單
                </div>
              </div>
            </Tab>
            <Tab eventKey="solved" title="已退款">
              <div className="m-3">2</div>
            </Tab>
            <Tab eventKey="rejected" title="不同意退款">
              <div className="m-3">3</div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default MainRefund
