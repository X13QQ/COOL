import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './routes/routes'

function App() {
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
