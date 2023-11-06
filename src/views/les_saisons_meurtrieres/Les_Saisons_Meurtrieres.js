import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './les_saisons_meurtrieres.css'
import { CCol, CRow } from '@coreui/react'
import lsmImage from 'src/assets/images/lsm.jpg'

const Les_Saisons_Meurtrieres = () => {
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
          <img src={lsmImage} alt="Wara Project" className={`lsm ${imageClass}`} />
          <div className="wara-buttons">
            <Link to="/les_saisons_meurtrieres/saison1" className="wara-button">
              Découvrir la saison 1
            </Link>
            <Link to="/les_saisons_meurtrieres/saison2" className="wara-button">
              Découvrir la saison 2
            </Link>
            <Link to="/les_saisons_meurtrieres/saison3" className="wara-button">
              Découvrir la saison 3
            </Link>
            <Link to="/les_saisons_meurtrieres/saison4" className="wara-button">
              Découvrir la saison 4
            </Link>
          </div>
        </div>
      </CCol>
    </CRow>
  )
}

export default Les_Saisons_Meurtrieres
