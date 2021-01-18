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
=======
<<<<<<< HEAD
        {/* <Footer /> */}
=======
>>>>>>> 03bf100090e020a5f5eaea90fd279880892ce959
>>>>>>> f555cf7c16bf61fa3e093e81c62b3088d7cdceb4
      </>
    </BrowserRouter>
  )
}

export default App
