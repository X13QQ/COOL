import React from 'react'
import { Link } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import routes from '../routes/routes'

function Breadcrumb({ locationPath, onMatchedRoutes }) {
  let matchedRoutes = matchRoutes(routes, locationPath)

  if (typeof onMatchedRoutes === 'function') {
    matchedRoutes = onMatchedRoutes(matchedRoutes)
  }

  return (
    <nav aria-label="breadcrumb" className="w-100 pl-5">
      <ol className="breadcrumb  m-0">
        {matchedRoutes.map((matchRoute, i) => {
          const { path, breadcrumbName } = matchRoute.route
          const isActive = path === locationPath

          return isActive ? (
            <li key={i} className="breadcrumb-item active">
              {breadcrumbName}
            </li>
          ) : (
            <li key={i} className="breadcrumb-item active">
              <Link to={path}>{breadcrumbName} </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
