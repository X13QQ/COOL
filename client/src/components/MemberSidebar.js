import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { MemberSidebarData } from './MemberSidebarData'

function MemberSidebar(props) {
  const locationPath = props.location.pathname

  return (
    <>
      <div className="Sidebar">
        <ul className="SidebarList">
          <Link to="/home">
            <div className="my-3">我的COOL</div>
          </Link>
          <p className="solid-bottom"></p>
          {MemberSidebarData.map((val, key) => {
            const isActive = val.link === locationPath

            return (
              <Link
                key={key}
                className="row w-100 m-0 d-flex justify-content-center align-items-center"
                to={val.link}
                id={isActive ? 'active' : ''}
              >
                <div className="mr-2 icon">{val.icon}</div>
                <div className="">{val.title}</div>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default withRouter(MemberSidebar)
