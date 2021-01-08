import React from 'react'
import { FavoritesData } from './FavoritesData'
import img from '../images/product-0001.png'

function Favorites(props) {
  return (
    <>
      {FavoritesData.map((val, key) => {
        return (
          <>
            <div className="d-flex flex-column my-1">
              <img className="w-75 m-auto" src={img} alt=""></img>
              <div className="card-body p-1">
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
    </>
  )
}

export default Favorites
