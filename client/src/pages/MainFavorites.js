import React from 'react'
import { InputGroup, FormControl, Button, Form, Row } from 'react-bootstrap'
import Favorites from '../components/Favorites'

function MainFavorites(props) {
  return (
    <>
      <div className="main">
        <div className="title ml-3 my-2">蒐藏清單</div>
        <Row>
          <InputGroup className="mx-3">
            <FormControl placeholder="搜尋蒐藏清單商品" />
            <InputGroup.Append className="col-3 px-0">
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
            <Form.Control className="col-3" as="select" custom>
              <option>依加入順序</option>
            </Form.Control>
          </InputGroup>
        </Row>
        <div className="favorites d-flex flex-wrap mx-1">
          <Favorites />
        </div>
      </div>
    </>
  )
}

export default MainFavorites
