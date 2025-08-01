/* eslint-disable */

import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import './accueil.css'

import ip from 'src/assets/images/ip-word-1.jpg'
import vestiaire13 from 'src/assets/images/affiche-vestiaires13.jpg'
import afficheHiverRouge from 'src/assets/images/affiche-jaune-iris3.jpg'
import wara from 'src/assets/images/wara.jpg'
import afficheIp from 'src/assets/images/affiche-ip.jpg'
import vestAlbum from 'src/assets/images/img-hor2.jpg'
import LsmJi from 'src/assets/images/lsm_Ji.jpg'
import wara2 from 'src/assets/images/img-hor1.jpg'
import bgImage1 from 'src/assets/images/fond-ip.jpg'
import bgImage2 from 'src/assets/images/bg_pic211.jpg'
import viragefond from 'src/assets/images/virage_fond.jpg'
import affichevirage from 'src/assets/images/affiche-virage.jpg';
import virage1 from 'src/assets/images/virage_prem_plan.jpg';
import bgImage3 from 'src/assets/images/Fond-casier.jpg'
import fond_Lsm from 'src/assets/images/lsm_Hr.jpg'

const Accueil = () => {

  const navigate = useNavigate();

  const handleCarouselClick = (path) => {
    navigate(path);
  }
  const images = [
        {
      bg: ip,
      overlay: afficheIp,
      background: bgImage1,
      link: '/ip',
      title: 'Immeuble Partagé',
      text: `A venir, une série écrite par Adda Abdelli et Fabrice Chanut, co-produite avec Les Films d'Avalon et Auvergne-Rhône-Alpes-Cinéma, avec la participation de France Télévisions`,
    },
    {
      bg: virage1,
      overlay: affichevirage,
      background: viragefond,
      link: '/virage',
      title: 'Virage',
      text: `Unitaire écrit par Virginie Peignien & Philippe Bérenger, réalisé par Delphine Lemoine diffusé sur France 3 et actuellement disponible en replay sur France TV.`,
    },
    {
      bg: vestAlbum,
      overlay: vestiaire13,
      background: bgImage3,
      link: '/vestiaires',
      title: 'Vestiaires - Saison 13',
      text: `Diffusée sur France 2 en prime time, rediffusée sur TV5Monde, reprise sur les réseaux sociaux, et bientôt adaptée au Québec, la série « Vestiaires » propose depuis treize ans à ses spectateurs un environnement familier dans lequel le handicap est inclus, l’autodérision bienvenue, et la satire sociale jouissive et tous azimuts.`,
    },
    {
      bg: LsmJi,
      overlay: afficheHiverRouge,
      background: fond_Lsm,
      link: '/les_saisons_meurtrieres',
      title: 'Les Saisons Meurtrières',
      text: `Adaptation des polars de Gilda Piersanti`,
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
    <meta property="og:image" content="https://astharte.com/favicon.ico" />
    
    {/* Twitter Card Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Astharté & Compagnie - Production de Films de Fiction" />
    <meta name="twitter:description" content="Astharté & cie est une société indépendante de production de films de fiction, produisant des séries et des unitaires dans tous formats, genres et styles." />
    <meta name="twitter:image" content="https://astharte.com/favicon.ico" />

    {/* Schema.org JSON-LD */}
    <script type="application/ld+json">
        {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Astharté & Compagnie",
            "url": "https://astharte.com",
            "logo": "https://astharte.com/favicon.ico",
            "sameAs": [
                // URLs de vos profils de réseaux sociaux
            ]
        })}
    </script>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <meta name="theme-color" content="#FFFFFF" />
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