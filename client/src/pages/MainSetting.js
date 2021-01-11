import React from 'react'
import Setting from '../components/Setting'

function MainSetting(props) {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 my-2">退款申請</div>
        <div className="mx-2 border border-top-0">
          <Setting />
        </div>
      </div>
    </>
  )
}

export default MainSetting
