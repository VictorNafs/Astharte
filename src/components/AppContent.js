import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import './appcontent.css'

// routes config
import routes from '../routes'

const AppContent = () => {
  return (
    <CContainer lg className="app-content-container">
      <div className="overlay-content">
        <Suspense fallback={<CSpinner color="primary" />}>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              )
            })}
            <Route path="/" element={<Navigate to="accueil" replace />} />
          </Routes>
        </Suspense>
      </div>
    </CContainer>
  )
}

export default React.memo(AppContent)
