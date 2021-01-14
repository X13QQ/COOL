import React from 'react'

function MainContact() {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 my-2">聯絡我們</div>
        <div className="mx-2 contact">
          <div className="row mx-5 text-center">
            <div className="titleIcon"></div>
            <div className="titleContent ">
              請輸入您的Email及問題，我們將會以最快的速度回覆您
            </div>
          </div>
          <div className="linkTop"></div>

          <form>
            <div className="form-group mx-5 my-2 p-0">
              <label htmlFor="email" className="form-label">
                *Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                // aria-describedby="emailHelp"
                placeholder="電子郵件地址"
                required
              />
              <small id="emailHelp" className="form-text">
                為了讓您順利收到 cool 回信，請務必確認 EMAIL
                填寫正確，並避免使用 Yahoo、Hotmail
                等免費信箱，以免發生擋信、漏信的狀況。
              </small>
            </div>
            <div className="form-group mx-5 my-2 p-0">
              <label htmlFor="service" className="form-label">
                *服務類別
              </label>
              <select
                defaultValue={'DEFAULT'}
                id="service"
                className="form-control"
                // aria-label="Default select example"
                required
              >
                <option value="DEFAULT">請選擇服務類別</option>
                <option value="1">系統問題</option>
                <option value="2">商品問題</option>
                <option value="3">其他</option>
              </select>
            </div>
            <div className="form-group mx-5 my-2 p-0">
              <label htmlFor="subject" className="form-label">
                *主旨
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="請輸入您的問題"
                maxLength="200"
                required
              />
            </div>
            <div className="form-group mx-5 my-2 p-0">
              <label htmlFor="content" className="form-label">
                *內容
              </label>
              <textarea
                className="form-control is-invalid"
                id="content"
                placeholder="請敘述您的問題"
                maxLength="2000"
                required
              ></textarea>
              <div className="invalid-feedback">限制字數2000字</div>
            </div>
            <div className="mx-5 p-0 text-center">
              <button className="btn px-5 py-2" type="button">
                確認
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default MainContact
