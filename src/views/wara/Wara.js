import React from 'react'
import { Link } from 'react-router-dom'
import './wara.css'
import { CCol, CRow } from '@coreui/react'

const Wara = () => {
  return (
    <CRow className="bg-image-w">
      <CCol xs={12} className="content-center">
        <div className="buttons-w">
          <Link to="/wara/saison1" className="button-w">
            Découvrir la saison 1
          </Link>
          <Link to="/wara/saison2" className="button-w">
            Découvrir la saison 2
          </Link>
        </div>
      </CCol>
    </CRow>
  )
}

export default Wara
