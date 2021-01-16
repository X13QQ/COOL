import React from 'react'
import Order from '../components/Order'

function MainOrder() {
  const memberNo = localStorage.getItem('memberNo')
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 mb-2">訂單紀錄</div>
        <div className="mx-2 border border-top-0">
          <Order memberNo={memberNo} />
        </div>
      </div>
    </>
  )
}

export default MainOrder
