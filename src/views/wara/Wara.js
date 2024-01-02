/* eslint-disable */

import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './wara.css'
import { CCol, CRow } from '@coreui/react'

const Wara = () => {
  return (
    <>
    <Helmet>
        <title>Wara - Les Saisons de la Série - Astharté & Compagnie</title>
        <meta name="description" content="Explorez les saisons de la série dramatique Wara, présentant des histoires captivantes sur les défis politiques et personnels en Afrique, produite par Astharté & Compagnie." />
        <meta name="keywords" content="Wara, série dramatique, Astharté & Compagnie, Afrique, politique, défis personnels, saisons de Wara" />
        <meta name="author" content="Astharté & Compagnie" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Wara - Les Saisons de la Série - Astharté & Compagnie" />
        <meta property="og:description" content="Découvrez les saisons de la série dramatique Wara, présentant des récits captivants sur les défis politiques et personnels en Afrique, produite par Astharté & Compagnie." />
        <meta property="og:url" content="https://astharte.com/wara" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://astharte.com/A.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wara - Les Saisons de la Série - Astharté & Compagnie" />
        <meta name="twitter:description" content="Explorez les saisons de la série dramatique Wara, avec des histoires passionnantes sur les défis politiques et personnels en Afrique, produite par Astharté & Compagnie." />
        <meta name="twitter:image" content="https://astharte.com/A.png" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "http://schema.org",
                "@type": "TVSeries",
                "name": "Wara",
                "description": "Explorez les saisons de la série dramatique Wara, avec des récits captivants sur les défis politiques et personnels en Afrique.",
                "url": "https://astharte.com/wara",
                // ... Autres propriétés pertinentes ...
            })}
        </script>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="A.ico" type="image/x-icon" />
        <meta name="theme-color" content="#FFFFFF" />
    </Helmet>
    <CRow className="bg-image-w">
      <CCol xs={12} className="content-center">
        <div className="buttons-w">
          <Link to="/wara/saison1" className="button-w">
            WARA Et si demain - Saison 1
          </Link>
          <Link to="/wara/saison2" className="button-w">
            WARA La déstinée dAïcha - Saison 2
          </Link>
        </div>
      </CCol>
    </CRow>
    </>
  )
}

export default Wara
