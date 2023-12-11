/* eslint-disable */

import React from 'react'
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import './accueil.css'

import lesEngages from 'src/assets/images/img-hor3.jpg'
import vestiaire13 from 'src/assets/images/affiche-vestiaires13.jpg'
import wara from 'src/assets/images/wara.jpg'
import afficheXaox from 'src/assets/images/affiche-xaox.png'
import vestAlbum from 'src/assets/images/img-hor2.jpg'
import wara2 from 'src/assets/images/img-hor1.jpg'
import bgImage1 from 'src/assets/images/rue.jpg'
import bgImage2 from 'src/assets/images/bg_pic211.jpg'
import bgImage3 from 'src/assets/images/Fond-casier.jpg'

const Accueil = () => {

  const navigate = useNavigate();

  const handleCarouselClick = (path) => {
    navigate(path);
  }
  const images = [
    {
      bg: lesEngages,
      overlay: afficheXaox,
      background: bgImage1,
      link: '/les_engages/saison3',
      title: 'Les Engagés XAOC',
      text: `Série écrite par Sullivan LE POSTEC 
      Réalisée par Sullivan LE POSTEC (XAOC), William SAMAHA (XAOC), Jules THENIER
      (S1), Maxime POTHERAT (S1) & Slimane-Baptiste BERHOUN (S2)
      Avec Mehdi MESKAR, Eric PUCHEU, Denis D’ARCANGELO, Adrian DE LA VEGA, Nanou 
      HARRY, Claudine CARREYRE`,
    },
    {
      bg: vestAlbum,
      overlay: vestiaire13,
      background: bgImage3,
      link: '/vestiaires',
      title: 'Vestiaires - Saison 13',
      text: `Diffusée sur France 2 en prime time, rediffusée sur TV5Monde, reprise sur les réseaux sociaux, et bientôt adaptée au Québec, la série « Vestiaires » propose depuis douze ans à ses spectateurs un environnement familier dans lequel le handicap est inclus, l’autodérision bienvenue, et la satire sociale jouissive et tous azimuts.`,
    },
    {
      bg: wara2,
      overlay: wara,
      background: bgImage2,
      link: '/wara/saison2',
      title: 'Wara - La Destinée d’Aïcha',
      text: `Série écrite par Charli BELETEAU, sur une idée originale de Magagi ISSOUFOU SANI 
      Avec Issaka SAWADOGO, Maïmouna NDIAYE, France Nancy GOULIAN, Souleymane 
      SEYE NDIAYE`,
    },
  ]
  return (
    <div className="container-fluid mt-5">
      <Carousel fade interval={2000} pause={false} indicators={false}>
        {images.map((img, idx) => (
          <Carousel.Item
            key={idx}
            onClick={() => handleCarouselClick(img.link)}
            style={{
              backgroundImage: `url(${img.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              cursor: 'pointer',
            }}
          >
            <img className="d-block" src={img.bg} alt="Background slide" />
            <img className="sharp-image" src={img.overlay} alt="Overlay slide" />
            <div className="carousel-text">
              <h3>{img.title}</h3>
              <p>{img.text}</p>
            </div>
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
