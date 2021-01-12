import React, { useState, useEffect } from 'react'
import { Heart } from '../components/icons'

function Favorites(props) {
  const [FavoritesData, setFavoritesData] = useState([])

  useEffect(() => {
    /* 第一種寫法 */
    // fetch('http://localhost:3001/member/favorites', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     memberNo: localStorage.getItem('memberNo'),
    //   }),
    //   headers: new Headers({
    //     'Content-Type': 'application/json',
    //   }),
    // })

    /* 第二種寫法 */
    let url = new URL('http://localhost:3001/member/favorites')
    let params = {
      memberNo: localStorage.getItem('memberNo'),
      valid: 1,
    }
    url.search = new URLSearchParams(params).toString()

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFavoritesData(data))
      .catch((err) => console.log('錯誤:', err))
  }, [])

  return (
    <>
      <div className="row">
        {FavoritesData.map((val, key) => {
          return (
            <>
              <div key={key} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="text-center border position-relative">
                  <img src={val.image} alt=""></img>
                  <Heart
                    className="position-absolute"
                    style={{ bottom: '6%', right: '12%' }}
                  />
                </div>
                <div key={key} className="card-body p-1">
                  <h5 className="card-title m-0 mx-2 my-1">{val.brand}</h5>
                  <p className="card-text m-0 mx-2 my-1">{val.name}</p>
                  <p className="card-text m-0 mx-2 my-1">價格:{val.price}</p>
                  <a href="/#" className="btn btn-primary w-100">
                    加入購物車
                  </a>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Favorites
