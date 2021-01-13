import React from 'react'
import { Row } from 'react-bootstrap'
import { Lv1, LV1, LV2 } from '../components/icons'

function MainMember() {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 my-2">會員專區</div>
        <Row className="member1 mx-2 d-flex justify-content-center align-items-start">
          <div className="memberlist col-4">
            <ul className="m-0 list-unstyled d-flex flex-column align-items-center">
              <li className="listtitle">會員等級</li>
              <li className="listtitle1">一般會員</li>
              <li className="m-1">
                <Lv1 />
              </li>
            </ul>
          </div>
          <div className="memberlist col-4 text-center">
            <div className="listtitle">消費次數</div>
            <div className="listnum mt-3">5</div>
          </div>
          <div className="memberlist col-4 text-center">
            <div className="listtitle">升級還需消費</div>
            <div className="listnum mt-3">$3000</div>
          </div>
        </Row>
        <div className="title ml-3 my-2">會員升級規範</div>
        <div className="m-3">
          <Row className="m-3">
            <div className="circle">
              <LV1 className="circle-icon1" />
            </div>
            <ul className="memberlv m-3 flex-fill list-unstyled d-flex flex-column">
              <li className="mx-4 my-1">一般會員</li>
              <li className="mx-4 my-1">已達成</li>
              <p className="solid-bottom my-1"></p>
            </ul>
          </Row>
          <Row className="m-3 mt-5">
            <div className="circle">
              <LV2 className="circle-icon2" />
            </div>
            <ul className="memberlv m-3 flex-fill list-unstyled d-flex flex-column">
              <li className="mx-4 my-1">尊貴會員</li>
              <li className="mx-4 my-1">未達成</li>
              <li className="mx-4 my-1">享有特定商品優先購買權</li>
              <li className="mx-4 my-1">每次消費運費折免</li>
              <p className="solid-bottom my-1"></p>
              <li className="mx-4 my-1">達成條件：累積實際消費達 NT$ 10,000</li>
            </ul>
          </Row>
        </div>
      </div>
    </>
  )
}

export default MainMember
