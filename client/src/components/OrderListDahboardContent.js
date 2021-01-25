import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ArrowDown } from '../components/icons'
// 麵包屑要記得改
function OrderListDashboardContent() {
  const [modalState, setModalState] = useState(false)

  return (
    <>
      <div style={{ padding: '12px 16px' }}>
        {/* <h3>訂單記錄</h3> */}
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th className="text-center font-weight-bold" scope="col">
                編號
              </th>
              <th className="text-center font-weight-bold" scope="col">
                品名
              </th>
              <th className="text-center font-weight-bold" scope="col">
                品牌
              </th>
              <th className="text-center font-weight-bold" scope="col">
                價錢
              </th>
              <th className="text-center font-weight-bold" scope="col">
                數量
              </th>
              <th className="text-center font-weight-bold" scope="col">
                狀態
              </th>
              <th className="text-center font-weight-bold" scope="col">
                金額
              </th>
              <th className="text-center font-weight-bold" scope="col">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button
                  className="btn btn-info mx-1"
                  onClick={() => setModalState(true)}
                >
                  查看
                </button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold text-danger"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                未出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold text-warning"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                寄送中
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold text-success"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
            <tr>
              <th
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
                scope="row"
              >
                1
              </th>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                BEACH SHORT
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                UNDEFEATED
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                2350
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                已出貨
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                3000
              </td>
              <td
                className="text-center font-weight-bold"
                style={{ lineHeight: '37.53px', fontSize: '14px' }}
              >
                <button className="btn btn-secondary mx-1">修改</button>
                <button className="btn btn-info mx-1">查看</button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* modal */}
        {modalState ? (
          <div
            id="order-dashboard-modal"
            class="modal d-flex justify-content-center align-content-center"
            style={{ top: '0px', bottom: '0px', left: '0px', right: '0px' }}
            onClick={(e) => {
              if (e.target.id === 'order-dashboard-modal') {
                setModalState(false)
              }
            }}
          >
            <div
              class="modal-dialog d-flex align-items-center"
              style={{ minWidth: '960px' }}
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title font-weight-bold">
                    編號： <span>20123123</span>
                  </h5>
                  <button
                    type="button"
                    class="close"
                    onClick={() => {
                      setModalState(false)
                    }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>內容打在這裡</p>
                  <p>內容打在這裡</p>
                  <p>內容打在這裡</p>
                  <p>內容打在這裡</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary font-weight-bold"
                    onClick={() => {
                      setModalState(false)
                    }}
                  >
                    關閉
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default OrderListDashboardContent
