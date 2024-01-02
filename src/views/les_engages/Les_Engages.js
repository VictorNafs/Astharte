/* eslint-disable */

import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './les_engages.css'
import { CCol, CRow } from '@coreui/react'

const Les_Engages = () => {
  return (
    <>
    <Helmet>
          <title>Les Engagés - Séries - Astharté & Compagnie</title>
          <meta name="description" content="Explorez les différentes saisons de la série 'Les Engagés' produite par Astharté & Compagnie." />
          <meta name="keywords" content="production de films, séries télévisées, cinéma, fiction, Astharté & Compagnie, production cinématographique, créativité cinématographique, production de séries, diversité des genres" />
          <meta name="author" content="Astharté & Compagnie" />
          {/* Open Graph Tags */}
          <meta property="og:title" content="Les Engagés - Séries - Astharté & Compagnie" />
          <meta property="og:description" content="Découvrez les différentes saisons de la série 'Les Engagés'." />
          <meta property="og:url" content="https://astharte.com/les_engages" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://astharte.com/A.png" />
          
          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Les Engagés - Séries - Astharté & Compagnie" />
          <meta name="twitter:description" content="Découvrez les différentes saisons de la série 'Les Engagés'." />
          <meta name="twitter:image" content="https://astharte.com/A.png" />

          {/* Schema.org JSON-LD */}
          <script type="application/ld+json">
              {JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "TVSeries",
                  "name": "Les Engagés",
                  "description": "Série produite par Astharté & Compagnie. Explorez les différentes saisons de 'Les Engagés'.",
                  "url": "https://astharte.com/les_engages",
                  // ... Autres propriétés pertinentes ...
              })}
          </script>
          <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="A.ico" type="image/x-icon" />
    <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
    <CRow className="bg-image-le">
      <CCol xs={12} className="content-center">
        <div className="buttons-le">
          <Link to="/les_engages/saison1" className="button-le">
            Les Engagés Saison 1
          </Link>
          <Link to="/les_engages/saison2" className="button-le">
            Les Engagés Saison 2
          </Link>
          <Link to="/les_engages/saison3" className="button-le">
            Les Engagés XAOC
          </Link>
        </div>
      </CCol>
    </CRow>
    </>
  )
}

export default Les_Engages
