import React from 'react'

function MainSetting(props) {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 my-2">帳號設定</div>
        <div className="mx-2 border border-top-0"></div>
        <div className="mx-2 setting">
          <div className="row mx-5 text-center ">
            <div className="titleIcon"></div>
            <div className="titleContent">聯絡資訊</div>
          </div>
          <div className="linkTop"></div>

          <div className="mb-3 mx-5 col-4 usernamebox">
            <input
              type="text"
              className="form-control form-control-lg"
              id="username1"
              // aria-describedby="emailHelp"
              maxLength="10"
              placeholder="使用者姓名"
              required
            />
          </div>

          <div className="mb-3 mx-5 col-4 useraccountbox">
            <input
              type="text"
              className="form-control form-control-lg"
              id="username2"
              // aria-describedby="emailHelp"
              maxLength="10"
              placeholder="使用者帳號"
              required
            />
          </div>

          <div className="mb-3 mx-5 col-4 userpasswordbox">
            <input
              type="test"
              className="form-control form-control-lg"
              id="username3"
              // aria-describedby="emailHelp"
              maxLength="10"
              placeholder="使用者密碼"
              required
            />
          </div>

          <div className="mb-3 mx-5 col-4 phonebox">
            <input
              type="number"
              className="form-control form-control-lg"
              id="userphone"
              maxLength="30"
              placeholder="連絡電話"
              required
            />
          </div>
          <div className="mb-3 mx-5">
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              placeholder="電子郵件地址"
              required
            />
          </div>
          <div className="mb-3 mx-5">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleInputEmail2"
              placeholder="聯絡地址"
              required
            />
          </div>
          <div className="mb-3 mx-5">
            <input
              type="date"
              className="form-control form-control-lg col-5 datebox"
              id="exampleInputEmail3"
              placeholder="生日"
              required
            />
            <div className="d-grid gap-2 col-3 mx-auto">
              <button className="btn" type="button">
                更新
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSetting
