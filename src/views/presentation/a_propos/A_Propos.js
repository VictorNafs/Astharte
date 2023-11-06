/* eslint-disable */

import React from 'react';
import './a_propos.css';
import { CCard, CCardHeader, CCardBody, CImage } from '@coreui/react';

import bossImage from 'src/assets/images/boss.jpeg';
import assistantImage from 'src/assets/images/max.jpeg';

const A_Propos = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>À propos d'Astharte</CCardHeader>
        <CCardBody>
          <p>
            Après avoir travaillé de nombreuses années en cinéma et télévision, avec de grands noms de 
            notre métier, tels Francesca Comencini, Maurice Failevic, Jean-Claude Carrière, Serge Moati, Pierre 
            Schoeller ou encore Christophe Honoré, Sophie Deloche crée sa propre structure en 2007.       </p>
          <p> 
            Avec ASTHARTÉ & COMPAGNIE, Sophie fait le choix de défendre des projets singuliers, aux 
            univers forts, portés par le quatuor scénariste – réalisateur – acteur – producteur.   
          </p>        
</CCardBody>
      </CCard>

      <CCard className="mb-4">
    <CCardHeader>Notre équipe</CCardHeader>
    <CCardBody>
        {[
            { src: bossImage, alt: "Mme. Astharte", name: "SOPHIE DELOCHE", title: "Productrice et Gérante", description: "Lorem ipsum..." },
            { src: assistantImage, alt: "Max", name: "MAXIME HERVOUET", title: "Chargé de développement et de production", description: "Lorem ipsum..." },
            { src: assistantImage, alt: "Mandy", name: "MANDY GELPI", title: "Assistante de production", description: "Lorem ipsum..." },
            { src: assistantImage, alt: "Christine", name: "CHRISTINE CUSTODIO", title: "Comptable", description: "Lorem ipsum..." },
            { src: assistantImage, alt: "Tara", name: "TARA CONSTANTIN WASTIAUX", title: "Alternante assistanat de production et de développement", description: "Lorem ipsum..." }
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
    </CCardBody>
</CCard>


      {/* Vous pouvez ajouter des sections similaires pour l'Histoire, les Valeurs, etc. si nécessaire */}

      <CCard className="mb-4">
        <CCardHeader>Contactez-nous</CCardHeader>
        <CCardBody>
          <p>
            Si vous avez des questions ou souhaitez collaborer avec nous, n'hésitez pas à <a href="[lien_vers_page_contact]">nous contacter</a>.
          </p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default A_Propos;
