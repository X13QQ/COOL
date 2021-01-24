import React, { useEffect, useState } from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import Favorites from '../components/Favorites'
import { Search } from '../components/icons'

function MainFavorites() {
  const [favorites, setFavorites] = useState(
    !!localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : ''
  )
  return (
    <>
      {favorites.length > 0 ? console.log(favorites) : ''}
      <div className="main col-9">
        <div className="title ml-3 mb-2  font-weight-bold">蒐藏清單</div>
        <div className="mx-2 favorites-wrap ">
          <InputGroup
            className="favorites-wrap-container mx-auto row justify-content-between"
            onFocus={(e) => {
              console.log(e.target.value)
              setFavorites(JSON.parse(localStorage.getItem('favorites')))
            }}
          >
            <div className="col-6 d-flex align-items-center pl-0">
              <FormControl placeholder="搜尋商品" />
              <Search style={{ transform: 'translate(-35px, 0px)' }} />
            </div>
            <div className="col-3 pr-0">
              <Form.Control className="" as="select" custom>
                <option>依加入順序</option>
              </Form.Control>
            </div>
          </InputGroup>
          <Favorites />
        </div>
      </div>
    </>
  )
}

export default MainFavorites
