import React from 'react'
import { Link } from 'react-router-dom'
import './les_engages.css'
import { CCol, CRow } from '@coreui/react'

const Les_Engages = () => {
  return (
    <CRow className="bg-image-le">
      <CCol xs={12} className="content-center">
        <div className="buttons-le">
          <Link to="/les_engages/saison1" className="button-le">
            Les Engagés Saison 1
          </Link>
          <Link to="/les_engages/saison2" className="button-le">
            Les Engagés Saison 2
          </Link>
          <Link to="/les_engages/saison3" className="button-le">
            Les Engagés XAOC
          </Link>
        </div>
      </CCol>
    </CRow>
  )
}

export default Les_Engages
