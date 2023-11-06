import React from 'react'
import { CFooter } from '@coreui/react'
import './appfooter.css'

const AppFooter = () => {
  return (
    <CFooter className="custom-footer">
      <div>
        <span className="ms-1"></span>
      </div>
      <div className="ms-auto">
        <span className="me-1"></span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
