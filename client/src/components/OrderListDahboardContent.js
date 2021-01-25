import React, { useState, useEffect } from 'react'
// import { Link, withRouter } from 'react-router-dom'
// import { ArrowDown } from '../components/icons'

// 麵包屑要記得改
function OrderListDashboardContent() {
  const [orderlist, setOrderList] = useState([])
  const [modalState, setModalState] = useState(false)

  const getOrderList = (id) => {
    let url = new URL('http://localhost:3001/dashboard/report/orderlist')
    let params = {
      memberNo: id,
      valid: 1,
    }
    url.search = new URLSearchParams(params).toString()

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data)
        console.log(data)
      })
      .catch((err) => console.log('錯誤:', err))
  }
  useEffect(() => {
    getOrderList()
  }, [])

  return (
    <>
      <div style={{ padding: '12px 16px' }}>
        {/* <h3>訂單記錄</h3> */}
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th className="text-center font-weight-bold" scope="col">
                #
              </th>
              <th className="text-center font-weight-bold" scope="col">
                訂單編號
              </th>
              <th className="text-center font-weight-bold" scope="col">
                購買日期
              </th>
              <th className="text-center font-weight-bold" scope="col">
                購買人
              </th>
              <th className="text-center font-weight-bold" scope="col">
                電話
              </th>
              <th className="text-center font-weight-bold" scope="col">
                金額
              </th>
              <th className="text-center font-weight-bold" scope="col">
                狀態
              </th>
              <th className="text-center font-weight-bold" scope="col">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {orderlist.map((v, i) =>
              orderlist.length > 0 ? (
                <tr key={i}>
                  <th
                    className="text-center font-weight-bold"
                    style={{ lineHeight: '37.53px', fontSize: '14px' }}
                    scope="row"
                  >
                    {i + 1}
                  </th>
                  <td
                    className="text-center font-weight-bold"
                    style={{ lineHeight: '37.53px', fontSize: '14px' }}
                  >
                    {v.order_no}
                  </td>
                  <td
                    className="text-center font-weight-bold"
                    style={{ lineHeight: '37.53px', fontSize: '14px' }}
                  >
                    {v.date}
                  </td>
                  <td
                    className="text-center font-weight-bold"
                    style={{ lineHeight: '37.53px', fontSize: '14px' }}
                  >
                    {v.name}
                  </td>
                  <td
                    className="text-center font-weight-bold"
                    style={{ lineHeight: '37.53px', fontSize: '14px' }}
                  >
                    {v.phone}
                  </td>
                  <td
                    className="text-center font-weight-bold"
                    style={{ lineHeight: '37.53px', fontSize: '14px' }}
                  >
                    {v.price}
                  </td>
                  <td
                    className="text-center font-weight-bold"
                    style={{ lineHeight: '37.53px', fontSize: '14px' }}
                  >
                    {v.status}
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
              ) : (
                ''
              )
            )}
          </tbody>
        </table>
        {/* modal */}
        {modalState ? (
          <div
            id="order-dashboard-modal"
            className="modal d-flex justify-content-center align-content-center"
            style={{ top: '0px', bottom: '0px', left: '0px', right: '0px' }}
            onClick={(e) => {
              if (e.target.id === 'order-dashboard-modal') {
                setModalState(false)
              }
            }}
          >
            <div
              className="modal-dialog d-flex align-items-center"
              style={{ minWidth: '960px' }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title font-weight-bold">
                    編號： <span>20123123</span>
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => {
                      setModalState(false)
                    }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>內容打在這裡</p>
                  <p>內容打在這裡</p>
                  <p>內容打在這裡</p>
                  <p>內容打在這裡</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary font-weight-bold"
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
