import React from 'react'
import './basepage.css'

import vestiaire11 from 'src/assets/images/vestiaire11.jpg'
import wara2 from 'src/assets/images/wara2.jpeg'
import enPleinCoeur from 'src/assets/images/en-plein-coeur.jpeg'

const BasePage = () => {
  return (
    <div className="container mt-5">
      <div className="photo-grid">
        <img src={vestiaire11} alt="Vestiaire 11" />
        <img src={wara2} alt="Wara 2" />
        <img src={enPleinCoeur} alt="En Plein Coeur" />
        {/* Si vous souhaitez ajouter d'autres images, ajoutez-les ici */}
      </div>
    </div>
  )
}

export default BasePage
