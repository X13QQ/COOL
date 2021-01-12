import React from 'react'

function MainContact(props) {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 my-2">聯絡我們</div>
        <div className="mx-2 border border-top-0"></div>
        <div className="mx-2 box1 contact">
          <div className="row mx-5 contentBox text-conter ">
            <div className="titleIcon"></div>
            <div className="titleContent ">
              請輸入您的Email及問題，我們將會以最快的速度回覆您
            </div>
          </div>
          <div className="linkTop"></div>

          <div className="mb-3 mx-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              *Email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              // aria-describedby="emailHelp"
              placeholder="電子郵件地址"
              required
            />
            <div id="emailHelp" className="form-text">
              為了讓您順利收到 cool 回信，請務必確認 EMAIL 填寫正確，並避免使用
              Yahoo、Hotmail 等免費信箱，以免發生擋信、漏信的狀況。
            </div>
          </div>
          <label htmlFor="exampleInputSelect" className="form-label mb-3 mx-5">
            *服務類別
          </label>
          <div className="mb-3 mx-5">
            <select
              defaultValue={'DEFAULT'}
              className="form-select form-control form-control-lg"
              // aria-label="Default select example"
              required
            >
              <option value="DEFAULT">請選擇服務類別</option>
              <option value="1">系統問題</option>
              <option value="2">商品問題</option>
              <option value="3">其他</option>
            </select>
          </div>
          <div className="mb-3  mx-5">
            <label htmlFor="formGroupExampleInput" className="form-label">
              *主旨
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="formGroupExampleInput"
              placeholder="請輸入您的問題"
              maxLength="30"
              required
            />
          </div>
          <div className="mb-3 mx-5 question">
            <label htmlFor="validationTextarea" className="form-label">
              *內容
            </label>
            <textarea
              className="form-control is-invalid questionColumn form-control-lg"
              id="validationTextarea"
              placeholder="請敘述您的問題"
              maxLength="150"
              required
            ></textarea>
            <div className="invalid-feedback">限制字數150字。</div>
            <div className="d-grid gap-2 col-3 mx-auto">
              <button className="btn" type="button">
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContact
