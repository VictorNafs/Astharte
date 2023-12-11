import React from 'react'
import { Link } from 'react-router-dom'
import './les_saisons_meurtrieres.css'
import { CCol, CRow } from '@coreui/react'

const Les_Saisons_Meurtrieres = () => {
  return (
    <CRow className="bg-image-lsm">
      <CCol xs={12} className="content-center">
        <div className="buttons-lsm">
          <Link to="/les_saisons_meurtrieres/saison1" className="button-lsm">
            Hiver Rouge
          </Link>
          <Link to="/les_saisons_meurtrieres/saison2" className="button-lsm">
            Bleu Catacombes
          </Link>
          <Link to="/les_saisons_meurtrieres/saison3" className="button-lsm">
            Jaune Iris
          </Link>
          <Link to="/les_saisons_meurtrieres/saison4" className="button-lsm">
            Noir Enigma
          </Link>
        </div>
      </CCol>
    </CRow>
  )
}

export default Les_Saisons_Meurtrieres
