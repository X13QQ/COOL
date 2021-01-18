import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import ScrollToTop from './components/ScrollToTop'
import routes from './routes/routes'

function App() {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop>
          <Switch>{renderRoutes(routes)}</Switch>
        </ScrollToTop>
<<<<<<< HEAD
        {/* <Footer /> */}
=======
>>>>>>> 77942f6a09fa4b4dc9f657324f6c1758d67b6b7a
      </>
    </BrowserRouter>
  )
}

export default App
