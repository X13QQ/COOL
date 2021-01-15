import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Home from './pages/Home'
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
