import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './accueil.css'

import lesEngages from 'src/assets/images/img-hor3.jpg'
import vestiaire12 from 'src/assets/images/vestiaire12.jpg'
import wara from 'src/assets/images/wara.jpg'
import afficheXaox from 'src/assets/images/affiche-xaox.png'
import vestAlbum from 'src/assets/images/img-hor2.jpg'
import wara2 from 'src/assets/images/img-hor1.jpg'
import bgImage1 from 'src/assets/images/rue.jpg'
import bgImage2 from 'src/assets/images/bg_pic211.jpg'
import bgImage3 from 'src/assets/images/Fond-casier.jpg'

const Accueil = () => {
  const images = [
    { bg: lesEngages, overlay: afficheXaox, background: bgImage1 },
    { bg: vestAlbum, overlay: vestiaire12, background: bgImage3 },
    { bg: wara2, overlay: wara, background: bgImage2 },
  ]

  return (
    <div className="container-fluid mt-5">
      <Carousel fade interval={2000} pause={false} indicators={false}>
        {images.map((img, idx) => (
          <Carousel.Item
            key={idx}
            style={{
              backgroundImage: `url(${img.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <img className="d-block" src={img.bg} alt="Background slide" />
            <img className="sharp-image" src={img.overlay} alt="Overlay slide" />
            <Carousel.Caption>
              {/* <h5>Titre {idx + 1}</h5>
              <p>Description {idx + 1}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Accueil
