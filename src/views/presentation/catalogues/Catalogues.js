/* eslint-disable */

import React from 'react'
import { Helmet } from 'react-helmet'
import './catalogues.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import affichewara1 from 'src/assets/images/affiche-wara1.jpg'
import affichewara2 from 'src/assets/images/affiche-wara2.jpg'
import affichevestiaires1 from 'src/assets/images/affiche-vestiaires1.png'
import affichevestiaires2 from 'src/assets/images/affiche-vestiaires2.jpg'
import affichevestiaires3 from 'src/assets/images/affiche-vestiaires3.jpg'
import affichevestiaires4 from 'src/assets/images/affiche-vestiaires4.jpg'
import affichevestiaires5 from 'src/assets/images/affiche-vestiaires5.jpg'
import affichevestiaires6 from 'src/assets/images/affiche-vestiaires6.jpg'
import affichevestiaires7 from 'src/assets/images/affiche-vestiaires7.jpg'
import affichevestiaires8 from 'src/assets/images/affiche-vestiaires8.jpg'
import affichevestiaires9 from 'src/assets/images/affiche-vestiaires9.jpg'
import affichevestiaires10 from 'src/assets/images/affiche-vestiaires10.jpg'
import affichevestiaires11 from 'src/assets/images/affiche-vestiaires11.jpg'
import affichevestiaires12 from 'src/assets/images/affiche-vestiaires12.jpg'
import affichevestiaires13 from 'src/assets/images/affiche-vestiaires13.jpg'
import affichevestiairesliberes from 'src/assets/images/affiche_vestiaires_liberes.jpg'

import affichelesengages1 from 'src/assets/images/affiche-l-e1.jpg'
import affichelesengages2 from 'src/assets/images/affiche-l-e2.jpg'
import affichelesengages3 from 'src/assets/images/affiche-xaox.png'

import affichehiverrouge1 from 'src/assets/images/affiche-hiver-rouge1.jpg'
import affichebleucatacombe2 from 'src/assets/images/affiche-bleu-catacombe2.jpg'
import affichejauneiris3 from 'src/assets/images/affiche-jaune-iris3.jpg'
import affichenoirenigma4 from 'src/assets/images/affiche-noir-enigma4.jpg'

import afficheenpleincoeur from 'src/assets/images/affiche-en-plein-coeur.jpg'
import affichevirage from 'src/assets/images/affiche-virage.jpg'
import affichecommeunair from 'src/assets/images/affiche-comme-un-air.jpg'
import afficheparolecontreparole from 'src/assets/images/affiche-parole-contre-parole.jpg'

import afficheIp from 'src/assets/images/affiche-ip.jpg'

const ImageCard = ({ src, alt }) => (
  <>
    <img src={src} alt={alt} />
    <h3>{alt}</h3>
  </>
)

const renderImages = (items) =>
  items.map((item, index) => (
    <div key={index} className="catalogue-card">
      <Link to={item.link}>
        <ImageCard src={item.src} alt={item.alt} />
      </Link>
    </div>
  ))

const Catalogues = () => {

  const filmsUnitaires = [
    { src: affichevirage, alt: "Virage", link: "/virage" },
    { src: afficheparolecontreparole, alt: "Parole Contre Parole", link: "/parole_contre_parole" },
    { src: afficheenpleincoeur, alt: "En Plein Coeur", link: "/en_plein_coeur" },
    { src: affichecommeunair, alt: "Comme Un Air", link: "/comme_un_air" }
  ]

  const wara = [
    { src: affichewara1, alt: "Wara Saison 1", link: "/wara/saison1" },
    { src: affichewara2, alt: "Wara Saison 2", link: "/wara/saison2" }
  ]

  const engages = [
    { src: affichelesengages1, alt: "Les Engagés Saison 1", link: "/les_engages/saison1" },
    { src: affichelesengages2, alt: "Les Engagés Saison 2", link: "/les_engages/saison2" },
    { src: affichelesengages3, alt: "Les Engagés Saison 3", link: "/les_engages/saison3" }
  ]

  const saisonsMeurtrieres = [
    { src: affichehiverrouge1, alt: "Hiver Rouge", link: "/les_saisons_meurtrieres/saison1" },
    { src: affichebleucatacombe2, alt: "Bleu Catacombe", link: "/les_saisons_meurtrieres/saison2" },
    { src: affichejauneiris3, alt: "Jaune Iris", link: "/les_saisons_meurtrieres/saison3" },
    { src: affichenoirenigma4, alt: "Noir Enigma", link: "/les_saisons_meurtrieres/saison4" }
  ]

  const vestiaires = [
    affichevestiaires1,
    affichevestiaires2,
    affichevestiaires3,
    affichevestiaires4,
    affichevestiaires5,
    affichevestiaires6,
    affichevestiaires7,
    affichevestiaires8,
    affichevestiaires9,
    affichevestiaires10,
    affichevestiaires11,
    affichevestiaires12,
    affichevestiaires13
  ].map((src, i) => ({
    src,
    alt: `Vestiaires Saison ${i + 1}`,
    link: "/vestiaires"
  }))

  return (
    <>
      <Helmet>
        <title>Catalogue des Productions - Astharté & Compagnie</title>
        <meta name="description" content="Découvrez notre catalogue de productions, incluant des séries et films unitaires divers." />
        <meta name="keywords" content="production de films, séries télévisées, cinéma, fiction, Astharté & Compagnie" />
        <meta name="author" content="Astharté & Compagnie" />
      </Helmet>

      <div className="container mt-5">

        <h1>Films Unitaires</h1>
        <div className="photo-grid">
          {renderImages(filmsUnitaires)}
        </div>

        <h1 className="h1mt">Séries</h1>

        <h2 className="mt">Wara</h2>
        <div className="photo-grid">
          {renderImages(wara)}
        </div>

        <h2 className="mt">Les Engagés</h2>
        <div className="photo-grid">
          {renderImages(engages)}
        </div>

        <h2 className="mt">Les Saisons Meurtrières</h2>
        <div className="photo-grid">
          {renderImages(saisonsMeurtrieres)}
        </div>

        <h2 className="mt">Vestiaires</h2>
        <div className="photo-grid">
          {renderImages(vestiaires)}
        </div>

        <h2 className="mt">Vestiaires Libérés</h2>
        <div className="photo-grid">
          <div className="catalogue-card">
            <Link to="/vestiairesLiberes">
              <ImageCard src={affichevestiairesliberes} alt="Vestiaires Libérés" />
            </Link>
          </div>
        </div>

        <h2 className="mt">Immeuble Partagé</h2>
        <div className="photo-grid">
          <div className="catalogue-card">
            <Link to="/Ip">
              <ImageCard src={afficheIp} alt="Immeuble Partagé" />
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Catalogues