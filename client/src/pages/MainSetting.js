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

  useEffect(() => {
    const getSettingData = () => {
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
    getSettingData()
  }, [id])

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
      .then((res) => alert('update success'))
      .catch((err) => console.log('錯誤:', err))
  }

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

          <div className="mb-3 mx-5 col-4 useraccountbox">
            <input
              type="text"
              className="form-control form-control-lg"
              id="account"
              // aria-describedby="emailHelp"
              maxLength="20"
              placeholder="使用者帳號"
              value={account}
              readOnly
            />
          </div>

          <div className="mb-3 mx-5 col-4 userpasswordbox">
            <input
              type="password"
              className="form-control form-control-lg"
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

          <div className="mb-3 mx-5 col-4 phonebox">
            <input
              type="number"
              className="form-control form-control-lg"
              id="phone"
              maxLength="20"
              placeholder="連絡電話"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value)
              }}
            />
          </div>
          <div className="mb-3 mx-5">
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="電子郵件地址"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
          </div>
          <div className="mb-3 mx-5">
            <input
              type="text"
              className="form-control form-control-lg"
              id="address"
              placeholder="聯絡地址"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value)
              }}
            />
          </div>
          <div className="mb-3 mx-5">
            <input
              type="date"
              className="form-control form-control-lg col-5 datebox"
              id="birth"
              placeholder="生日"
              value={birth}
              onChange={(event) => {
                setBirth(event.target.value)
              }}
            />
            <div className="d-grid gap-2 col-3 mx-auto">
              <button
                className="btn"
                type="button"
                onClick={() => updateSettingData()}
              >
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
