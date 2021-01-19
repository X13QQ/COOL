import React, { useState, useEffect } from 'react'

function MainSetting() {
  const id = localStorage.getItem('memberNo')
  const [name, setName] = useState('')
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [birth, setBirth] = useState('')

  const getSettingData = (id) => {
    let url = new URL('http://localhost:3001/member/setting')
    let params = {
      id: id,
    }
    url.search = new URLSearchParams(params).toString()

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name)
        setAccount(data[0].account)
        setPassword(data[0].password)
        setPhone(data[0].phone)
        setEmail(data[0].email)
        setAddress(data[0].address)
        setBirth(data[0].birth)
      })
      .catch((err) => console.log('錯誤:', err))
  }

  const updateSettingData = () => {
    const data = {
      name: name,
      password: password,
      phone: phone,
      email: email,
      address: address,
      birth: birth,
      id: id,
    }
    const updateMethod = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }
    let url = new URL('http://localhost:3001/member/setting')
    fetch(url, updateMethod)
      .then(() => alert('update success'))
      .catch((err) => console.log('錯誤:', err))
  }

  const checkValue = (change) => {
    let bool = true
    if (!!change) {
      document.getElementById(change).classList.remove('is-invalid')
      return false
    }
    const array = ['name', 'password', 'birth', 'phone', 'email', 'address']

    array.forEach((element) => {
      console.log(element)
    })

    return bool
  }

  useEffect(() => {
    getSettingData(id)
  }, [id])

  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 mb-2 font-weight-bold">帳號設定</div>
        <div className="mx-2 setting">
          <div className="row mx-5 text-center d-flex align-items-center">
            <div className="titleIcon"></div>
            <div className="titleContent">聯絡資訊</div>
          </div>
          <div className="linkTop"></div>

          <form className="setting-form ">
            <div className="form-group mx-5 my-2 p-0 col-5">
              <label htmlFor="name" className="form-label">
                *使用者姓名
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                // aria-describedby="emailHelp"
                maxLength="20"
                placeholder="使用者姓名"
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                }}
              />
            </div>

            <div className="form-group mx-5 my-2 p-0 col-5">
              <label htmlFor="account" className="form-label">
                *使用者帳號
              </label>
              <input
                type="text"
                className="form-control"
                id="account"
                // aria-describedby="emailHelp"
                maxLength="20"
                placeholder="使用者帳號"
                value={account}
                readOnly
              />
            </div>

            <div className="form-group mx-5 my-2 p-0 col-5">
              <label htmlFor="password" className="form-label">
                *使用者密碼
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                // aria-describedby="emailHelp"
                maxLength="20"
                placeholder="使用者密碼"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </div>

            <div className="form-row mx-5 my-0 justify-content-between">
              <div className="form-group my-2 px-0 pr-1 col-6">
                <label htmlFor="birth" className="form-label">
                  *生日
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birth"
                  placeholder="生日"
                  value={birth}
                  onChange={(event) => {
                    setBirth(event.target.value)
                  }}
                />
              </div>

              <div className="form-group my-2 px-0 pl-1 col-6">
                <label htmlFor="phone" className="form-label">
                  *連絡電話
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  maxLength="20"
                  placeholder="連絡電話"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value)
                  }}
                />
              </div>
            </div>

            <div className="form-group mx-5 my-2 p-0">
              <label htmlFor="email" className="form-label">
                *電子郵件地址
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="電子郵件地址"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </div>
            <div className="form-group mx-5 my-2 p-0">
              <label htmlFor="address" className="form-label">
                *聯絡地址
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="聯絡地址"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value)
                }}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="my-2 mx-2 p-0 text-center">
                <button
                  className="btn px-5 py-2"
                  type="button"
                  onClick={() => updateSettingData()}
                >
                  更新
                </button>
              </div>

              <div className="my-2 mx-2 p-0 text-center">
                <button
                  className="btn px-5 py-2"
                  type="button"
                  onClick={() => checkValue()}
                >
                  測試
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default MainSetting
