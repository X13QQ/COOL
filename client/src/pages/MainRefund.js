import React from 'react'
import Refund from '../components/Refund'

function MainRefund(props) {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 my-2">退款申請</div>
        <div className="mx-2 border border-top-0">
          <Refund />
        </div>
      </div>
    </>
  )
}

export default MainRefund
