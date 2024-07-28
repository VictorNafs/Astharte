/* eslint-disable */

import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './les_saisons_meurtrieres.css'
import { CCol, CRow } from '@coreui/react'

const Les_Saisons_Meurtrieres = () => {
  return (
    <>
    <Helmet>
        <title>Les Saisons Meurtrières - Astharté & Compagnie</title>
        <meta name="description" content="Découvrez la série 'Les Saisons Meurtrières', des téléfilms policiers captivants produits par Astharté & Compagnie." />
        <meta name="keywords" content="Hiver Rouge, Bleu Catacombes, Jaune Iris, Noir Enigma, séries télévisées, Astharté & Compagnie, fiction, téléfilms policiers" />
        <meta name="author" content="Astharté & Compagnie" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Les Saisons Meurtrières - Astharté & Compagnie" />
        <meta property="og:description" content="Explorez la série 'Les Saisons Meurtrières', une collection de téléfilms policiers produits par Astharté & Compagnie." />
        <meta property="og:url" content="https://astharte.com/les_saisons_meurtrieres" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://astharte.com/favicon.ico" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Les Saisons Meurtrières - Astharté & Compagnie" />
        <meta name="twitter:description" content="Explorez la série 'Les Saisons Meurtrières', une collection de téléfilms policiers produits par Astharté & Compagnie." />
        <meta name="twitter:image" content="https://astharte.com/favicon.ico" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "TVSeries",
              "name": "Les Saisons Meurtrières",
              "description": "Une série de téléfilms policiers produits par Astharté & Compagnie.",
              "url": "https://astharte.com/les_saisons_meurtrieres",
              // ... Autres propriétés pertinentes ...
          })}
        </script>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
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
    </>
  )
}

export default Les_Saisons_Meurtrieres
