import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './les_engages.css'
import { CCol, CRow } from '@coreui/react'
import lesengagesp from 'src/assets/images/les-engages-p.jpg'

const Les_Engages = () => {
  const [imageClass, setImageClass] = useState('slide-from-top')

  useEffect(() => {
    setTimeout(() => {
      setImageClass('slide-to-position')
    }, 500)
  }, [])

  return (
    <CRow className="bg-image">
      <CCol xs={12} className="content-center">
        <div className="wara-content">
          <img src={lesengagesp} alt="Wara Project" className={`les-engages-p ${imageClass}`} />
          <div className="wara-buttons">
            <Link to="/les_engages/saison1" className="wara-button">
              Découvrir la saison 1
            </Link>
            <Link to="/les_engages/saison2" className="wara-button">
              Découvrir la saison 2
            </Link>
            <Link to="/les_engages/saison3" className="wara-button">
              Découvrir la saison 3
            </Link>
          </div>
        </div>
      </CCol>
    </CRow>
  )
}

export default Les_Engages
