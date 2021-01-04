import React from 'react'
import { Container } from 'react-bootstrap'
import { MemberSidebarData } from './MemberSidebarData'

function MemberSidebar() {
  return (
    <>
      <Container>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">我的首頁</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">會員管理</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              我的信箱
            </li>
          </ol>
        </nav>

        <div className="Sidebar">
          <ul className="SidebarList">
            <div className="my-3">我的COOL</div>
            <p class="solid-bottom"></p>
            {MemberSidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="row w-100 d-flex flex-row justify-content-center align-items-center"
                >
                  <div className="col-2">{val.icon}</div>
                  <div>{val.title}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </>
  )
}

export default MemberSidebar
