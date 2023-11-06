import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './wara.css'
import { CCol, CRow } from '@coreui/react'
import waraImage from 'src/assets/images/wara_p.png'

const Wara = () => {
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
          <img src={waraImage} alt="Wara Project" className={`wara-image ${imageClass}`} />
          <div className="wara-buttons">
            <Link to="/wara/saison1" className="wara-button">
              Découvrir la saison 1
            </Link>
            <Link to="/wara/saison2" className="wara-button">
              Découvrir la saison 2
            </Link>
          </div>
        </div>
      </CCol>
    </CRow>
  )
}

export default Wara
