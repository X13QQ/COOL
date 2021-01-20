import React from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import Favorites from '../components/Favorites'
import { Search } from '../components/icons'

function MainFavorites(props) {
  const id = props.id
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 mb-2  font-weight-bold">蒐藏清單</div>
        <div className="mx-2 favorites-wrap ">
          <InputGroup className="favorites-wrap-container mx-auto row justify-content-between">
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
          <Favorites memberNo={id} />
        </div>
      </div>
    </>
  )
}

export default MainFavorites
