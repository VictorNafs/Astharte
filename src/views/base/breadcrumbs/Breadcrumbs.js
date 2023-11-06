/* eslint-disable */

import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
} from '@coreui/react'

import image1 from 'src/assets/images/wara-word.jpg'
import image2 from 'src/assets/images/wara-word1.jpg'
import image3 from 'src/assets/images/waraword-2.jpg'
import image4 from 'src/assets/images/waraword3.jpg'

const Breadcrumbs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Les Engagés - Informations</strong>
            <div style={{ float: 'right' }}>
              {/* Bouton pour accéder à la vidéo */}
              <CButton color="link" className="mr-3" onClick={() => window.open('URL_DE_LA_VIDEO', '_blank')}>
                Voir la vidéo
              </CButton>
              {/* Bouton pour accéder au site dédié */}
              <CButton color="link" onClick={() => window.open('URL_DU_SITE', '_blank')}>
                Site officiel
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Les Engagés est une web-série française créée et écrite par Sullivan Le Postec. La première saison est co-réalisée par Jules Thénier et Maxime Potherat, la deuxième par Slimane-Baptiste Berhoun.
              <br /><br />
              La série est coproduite par Astharté & Compagnie et France Télévisions Nouvelles Écritures, et diffusée à l’origine sur la plateforme Studio 4 à partir du 17 mai 2017. Depuis la refonte de l’offre numérique de France Télévisions, Les Engagés est reprise sur France.tv Slash1.
              <br /><br />
              Les Engagés est située dans le milieu des activistes LGBT à Lyon2 et chronique la vie de militants du Point G, un centre gay et lesbien fictif situé sur les Pentes de la Croix-Rousse. À l'international, la série est distribuée sous le titre Woke3.
              <br /><br />
              Bien qu'il y ait eu auparavant des web-séries françaises LGBT, celles-ci étaient auto-produites et non financées. En conséquence, Les Engagés est parfois présentée, notamment par le journaliste et directeur de la Queer Palm, Franck Finance-Madureira, dans un article de Têtu, comme la première série LGBT française, c'est-à-dire « dont la majorité des personnages sont issus de la communauté LGBT »4,5.
            </p>
            <CAccordion activeItemKey={1}>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>Synopsis</CAccordionHeader>
                <CAccordionBody>
                  Le Point G est un Centre LGBT situé à Lyon. Thibaut est un de ses militants les plus actifs, très engagé dans la lutte pour les droits des homosexuels. Son quotidien est soudain bouleversé par le retour dans sa vie d'Hicham, une connaissance qu'il n'avait pas revue depuis des années et qui vient chercher auprès de lui la force de faire son coming-out et de trouver sa véritable identité. Hicham admire le charisme et l'engagement de Thibaut, mais, jeté brusquement au milieu des luttes politiques du Point G, il va rapidement en percevoir les limites et les contradictions…
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Album Les Engagés</strong>
          </CCardHeader>
          <CCardBody>
            <div className="photo-album">
              <img src={image1} alt="Image 1" className="img-thumbnail mr-2 mb-2" />
              <img src={image2} alt="Image 2" className="img-thumbnail mr-2 mb-2" />
              <img src={image3} alt="Image 3" className="img-thumbnail mr-2 mb-2" />
              <img src={image4} alt="Image 4" className="img-thumbnail mr-2 mb-2" />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
