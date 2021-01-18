import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import ScrollToTop from './components/ScrollToTop'

import routes from './routes/routes'

function App() {
  localStorage.memberNo = '1'
  // console.log(localStorage)
  return (
    <BrowserRouter>
      <>
        <ScrollToTop>
          <Switch>{renderRoutes(routes)}</Switch>
        </ScrollToTop>
<<<<<<< HEAD
        {/* <Footer /> */}
=======
>>>>>>> 52761c74dd3861be1df78efecbf01412f43bf114
      </>
    </BrowserRouter>
  )
}

export default App
