import React, { useEffect, useState } from 'react'
import { Heart } from '../components/icons'
import { useLocation, useHistory } from 'react-router-dom'

function Favorites() {
  const loc = useLocation()
  const history = useHistory()
  const id = !!loc.state ? loc.state.id : history.push('/clothing')

  const [FavoritesData, setFavoritesData] = useState([])

  const getFavoritesData = (id) => {
    let url = new URL('http://localhost:3001/member/favorites')
    let params = {
      memberNo: id,
      valid: 1,
    }
    url.search = new URLSearchParams(params).toString()

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFavoritesData(data))
      .catch((err) => console.log('錯誤:', err))
  }

  const deleteFavoritesData = (id) => {
    const data = {
      id: id,
      valid: 0,
    }
    const deleteMethod = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    }
    let url = new URL('http://localhost:3001/member/favorites')
    fetch(url, deleteMethod)
      .then(() => {
        setFavoritesData(FavoritesData.filter((val) => val.id !== id))
      })
      .catch((err) => console.log('錯誤:', err))
  }

  useEffect(() => {
    getFavoritesData(id)
  }, [id])

  return (
    <>
      <div className="row">
        {FavoritesData.map((val, key) => {
          return (
            <div key={val.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="text-center border position-relative">
                <img src={val.image} alt=""></img>
                <a
                  href="#!"
                  onClick={() => {
                    deleteFavoritesData(val.id)
                  }}
                >
                  <Heart
                    className="position-absolute"
                    style={{ fill: '#F37022', bottom: '6%', right: '12%' }}
                  />
                </a>
              </div>
              <div className="card-body p-1">
                <h5 className="card-title m-0 mx-2 my-1">{val.brand}</h5>
                <p className="card-text m-0 mx-2 my-1">{val.name}</p>
                <p className="card-text m-0 mx-2 my-1">價格:{val.price}</p>
                <a href="/#" className="btn btn-primary w-100">
                  加入購物車
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Favorites
