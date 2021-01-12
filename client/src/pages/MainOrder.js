import React from 'react'
import Order from '../components/Order'

function MainOrder(props) {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 my-2">訂單紀錄</div>
        <div className="mx-2 border border-top-0">
          <Order />
        </div>
      </div>
    </>
  )
}

export default MainOrder
