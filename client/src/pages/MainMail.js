import React from 'react'
import { Logo, No } from '../components/icons'

function MainMail() {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 mb-2">我的信箱</div>
        <div className="mailamount ml-3 my-2s">共有1/1信件</div>
        <div className="mx-2 mails overflow-auto">
          <ul className="MailList list-group list-group-flush">
            <li className="MailListItem list-group-item d-flex">
              <div className="w-100 d-flex align-items-center">
                <Logo className="mx-4" />
                <div className="mx-4">酷飛鳥</div>
                <ul className="mx-4 list-unstyled flex-grow-1">
                  <li>最新優惠!!</li>
                  <li>12/30~1/31 購買全站商品滿千折百</li>
                  <li className="newstime">2020/12/15 17:00</li>
                </ul>
                <button type="button" className="close">
                  <No className="ml-auto" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MainMail
