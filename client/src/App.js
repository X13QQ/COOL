import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './routes/routes'

function App() {
  localStorage.memberNo = '1'
  // console.log(localStorage)
  return (
    <BrowserRouter>
      <>
        <Switch>{renderRoutes(routes)}</Switch>
      </>
    </BrowserRouter>
  )
}

export default App
