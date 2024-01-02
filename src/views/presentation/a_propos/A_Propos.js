/* eslint-disable */

import React from 'react';
import { Helmet } from 'react-helmet';
import './a_propos.css';
import { CCard, CCardHeader, CCardBody, CImage } from '@coreui/react';

import bossImage from 'src/assets/images/portrait_sophie.jpg';
import assistant from 'src/assets/images/portrait_maxime.jpg';
import assistantprod from 'src/assets/images/portrait_mandy.jpg';
import alternante from 'src/assets/images/portrait_tara.jpg';
import comptable from 'src/assets/images/portrait_christine.jpg';

const A_Propos = () => {
  return (
    <>
    <Helmet>
          <title>À Propos - Astharté & Compagnie</title>
          <meta name="description" content="Découvrez plus sur Astharté & Compagnie, une société indépendante de production de films de fiction. Rencontrez notre équipe et apprenez notre philosophie." />
          <meta name="keywords" content="production de films, séries télévisées, cinéma, fiction, Astharté & Compagnie, production cinématographique, créativité cinématographique, production de séries, diversité des genres" />
          <meta name="author" content="Astharté & Compagnie" />
          {/* Open Graph Tags */}
          <meta property="og:title" content="À Propos - Astharté & Compagnie" />
          <meta property="og:description" content="En savoir plus sur Astharté & Compagnie, une société de production de films de fiction innovante." />
          <meta property="og:url" content="https://astharte.com/a_propos" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://astharte.com/A.png" />
          
          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="À Propos - Astharté & Compagnie" />
          <meta name="twitter:description" content="En savoir plus sur Astharté & Compagnie, une société de production de films de fiction innovante." />
          <meta name="twitter:image" content="https://astharte.com/A.png" />

          {/* Schema.org JSON-LD */}
          <script type="application/ld+json">
              {JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "AboutPage",
                  "name": "À Propos - Astharté & Compagnie",
                  "description": "Page à propos d'Astharté & Compagnie, société de production de films de fiction.",
                  "url": "https://astharte.com/a_propos",
                  // ... Autres propriétés pertinentes ...
              })}
          </script>
          <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="A.ico" type="image/x-icon" />
    <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <CCard className="mb-4">
        <CCardHeader>À propos d'Astharté</CCardHeader>
        <CCardBody>
        Astharté & cie est une société indépendante de production de films de fiction tous formats, tous
        genres, tous styles. Nous produisons des séries, en 90’, en 45‘, en 3’ et des unitaires sur de multiples sujets.
        On peut tout raconter, tous les sujets sont possibles, dans le respect de nos contemporains, en
        nous mettant, grâce à la fiction, en empathie avec les protagonistes pour nous proposer un autre
        regard, un autre point de vue sur un sujet, du moment que la petite histoire nous touche et nous ramène à
        l’universel.
        <br></br> <br></br>
        Astharté & cie c’est aussi l’association avec des co-producteurs - Philippe Braunstein -Avalon ;
        Maria Sério - Magnolia ; Mbatio Diaw Ndiaye - Raes production. Nous associons nos forces
        pour faire exister des projets coups de cœur.
        <br></br> <br></br>
        Astharté & cie c’est aussi toute une équipe ; des productions partagées pendant de
        nombreuses années avec Baptiste Rinaldi et à présent avec Maxime Hervouet.
        C’est un suivi rigoureux de l’administration de production par Christine Custudio. Et une
        organisation et un accueil attentif de Mandy Gelpi.
        <br></br> <br></br>
        Avec Astharté & cie, Sophie Deloche fait le choix de défendre des projets singuliers, aux
        univers forts, portés par le quatuor scénariste – réalisateur – acteur – producteur.       
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
    <CCardHeader>Notre équipe</CCardHeader>
    <CCardBody>
    <div className="team-members-container">
        {[
            { src: bossImage, alt: "Mme. Astharte", name: "Sophie Deloche", title: "Productrice et Gérante" },
            { src: assistant, alt: "Max", name: "Maxime Hervouet", title: "Chargé de développement et de production", description: "maxime@astharte.com" },
            { src: assistantprod, alt: "Mandy", name: "Mandy Gelpi", title: "Assistante de production", description: "mandy@astharte.com" },
            { src: comptable, alt: "Christine", name: "Christine Custodio", title: "Administratrice de production", description: "christine@astharte.com" },
            { src: alternante, alt: "Tara", name: "Tara Constantin Wastiaux", title: "Alternante assistanat de production et de développement", description: "tara@astharte.com" }
          ].map(member => (
            <div className="team-member mb-4" key={member.name}>
                <CImage src={member.src} alt={member.alt} className="team-photo mr-4" width={100} />
                <div>
                    <h2 className="team-member-name">{member.name}</h2>
                    <h3 className="team-member-title">{member.title}</h3>
                    <p className="team-member-description">{member.description}</p>
                </div>
            </div>
        ))}
        </div>
    </CCardBody>
</CCard>


      {/* Vous pouvez ajouter des sections similaires pour l'Histoire, les Valeurs, etc. si nécessaire */}

      {/* <CCard className="mb-4">
        <CCardHeader>Contactez-nous</CCardHeader>
        <CCardBody>
          <p>
            Si vous avez des questions ou souhaitez collaborer avec nous, n'hésitez pas à <a href="[lien_vers_page_contact]">nous contacter</a>.
          </p>
        </CCardBody>
      </CCard> */}
    </>
  )
}

export default A_Propos;
