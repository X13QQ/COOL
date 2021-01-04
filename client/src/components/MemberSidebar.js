import React from 'react'
import { Container } from 'react-bootstrap'
import { MemberSidebarData } from './MemberSidebarData'

function MemberSidebar() {
  return (
    <>
      <div className="Sidebar">
        <ul className="SidebarList">
          <a href="/">
            <div className="my-3">我的COOL</div>
          </a>
          <p class="solid-bottom"></p>
          {MemberSidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row w-100 m-0 d-flex justify-content-center align-items-center"
                onClick={() => {
                  window.location.pathname = val.link
                }}
              >
                <div className="mr-2 icon">{val.icon}</div>
                <div className="">{val.title}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default MemberSidebar
