/* eslint-disable */

import React from 'react'
import { Helmet } from 'react-helmet';
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
    <>
<Helmet>
    <title>Astharté & Compagnie - Production de Films de Fiction</title>
    <meta name="description" content="Astharté & cie est une société indépendante de production de films de fiction, produisant des séries et des unitaires dans tous formats, genres et styles. Nous apportons un regard neuf et empathique sur divers sujets, en collaboration avec des co-producteurs renommés et une équipe dédiée à la création de projets coups de cœur." />
    <meta name="keywords" content="production de films, séries télévisées, cinéma, fiction, Astharté & Compagnie, production cinématographique, créativité cinématographique, production de séries, diversité des genres" />
    <meta name="author" content="Astharté & Compagnie" />
    
    {/* Open Graph Tags */}
    <meta property="og:title" content="Astharté & Compagnie - Production de Films de Fiction" />
    <meta property="og:description" content="Astharté & cie est une société indépendante de production de films de fiction, produisant des séries et des unitaires dans tous formats, genres et styles." />
    <meta property="og:url" content="https://astharte.com" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://astharte.com/A.png" />
    
    {/* Twitter Card Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Astharté & Compagnie - Production de Films de Fiction" />
    <meta name="twitter:description" content="Astharté & cie est une société indépendante de production de films de fiction, produisant des séries et des unitaires dans tous formats, genres et styles." />
    <meta name="twitter:image" content="https://astharte.com/A.png" />

    {/* Schema.org JSON-LD */}
    <script type="application/ld+json">
        {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Astharté & Compagnie",
            "url": "https://astharte.com",
            "logo": "https://astharte.com/A.png",
            "sameAs": [
                // URLs de vos profils de réseaux sociaux
            ]
        })}
    </script>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="A.ico" type="image/x-icon" />
    <meta name="theme-color" content="#FFFFFF" />
    <meta name="google-site-verification" content="mMNhVTW3jnrjJYd-SSDHdaGgvrf1AOCLnWNbcwBDlEw" />
</Helmet>




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
                            {/* Contenu de Carousel.Caption si nécessaire */}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    </>
);
}

export default Accueil;