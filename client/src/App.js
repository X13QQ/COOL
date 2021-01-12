import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './routes/routes'

function App() {
  localStorage.memberNo = '1'
  // console.log(localStorage)
  return (
    <BrowserRouter>
      <>
        <Container>
          <Row>
            <Switch>{renderRoutes(routes)}</Switch>
          </Row>
        </Container>
      </>
    </BrowserRouter>
  )
}

export default App
