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
>>>>>>> 03bf100090e020a5f5eaea90fd279880892ce959
      </>
    </BrowserRouter>
  )
}

export default App
