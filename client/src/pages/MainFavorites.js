import React from 'react'
import { InputGroup, FormControl, Button, Form, Row } from 'react-bootstrap'
import Favorites from '../components/Favorites'
import { Search, Heart } from '../components/icons'

function MainFavorites(props) {
  return (
    <>
      <div className="main col-9">
        <div className="title ml-3 my-2">蒐藏清單</div>
        <Row>
          <InputGroup className="m-2 row justify-content-between">
            <div className="col-6 d-flex align-items-center">
              <FormControl placeholder="搜尋商品" />
              <Search style={{ transform: 'translate(-25px, 0px)' }} />
            </div>
            <div className="col-3">
              <Form.Control className="" as="select" custom>
                <option>依加入順序</option>
              </Form.Control>
            </div>
          </InputGroup>
        </Row>
        <Favorites />
      </div>
    </>
  )
}

export default MainFavorites
