import React from 'react'
import { FavoritesData } from './FavoritesData'
import img from '../images/product-0001.png'
import { Heart } from '../components/icons'

function Favorites(props) {
  return (
    <>
      <div className="row">
        {FavoritesData.map((val, key) => {
          return (
            <>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="text-center border position-relative">
                  <img src={img} alt=""></img>
                  <Heart
                    className="position-absolute"
                    style={{ bottom: '6%', right: '12%' }}
                  />
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
            </>
          )
        })}
      </div>
    </>
  )
}

export default Favorites
