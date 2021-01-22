import React, { useState } from 'react'

function MainCoupon() {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 mb-2 font-weight-bold">優惠券</div>
        <div className="mx-2 coupon-wrap">
          <div className="row mx-5 text-center d-flex align-items-center">
            <div className="titleIcon"></div>
            <div className="titleContent">共有1/1優惠券</div>
          </div>
          <div className="linkTop"></div>
          <div
            className="mx-auto border border-0"
            style={{ width: '95%' }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default MainCoupon
