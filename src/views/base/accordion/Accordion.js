/* eslint-disable */

import React, { useState } from 'react'
import './accordion.css'
import ScrollTrigger from 'react-scroll-trigger'
import {
  CCol,
  CRow,
  CButton,
} from '@coreui/react'

import waraWord from 'src/assets/images/wara-word.jpg'
import waraWord1 from 'src/assets/images/wara-word1.jpg'
import waraWord2 from 'src/assets/images/waraword-2.jpg'
import waraWord3 from 'src/assets/images/waraword3.jpg'

const Accordion = () => {
  const [imageClass1, setImageClass1] = useState("slide-initial")
  const [imageClass2, setImageClass2] = useState("slide-initial")
  const [imageClass3, setImageClass3] = useState("slide-initial")
  const [imageClass4, setImageClass4] = useState("slide-initial")

  return (
    <CRow className="bg-image">
      <CCol xs={12}>
        <div className="container">
        <div className="video-button-container">
        <CButton color="link" className="mr-3 video-button" onClick={() => window.open('URL_DE_LA_VIDEO', '_blank')}>
          Voir la vidéo
        </CButton>
        <CButton color="link" className="ml-3 video-button" onClick={() => window.open('URL_DU_SITE', '_blank')}>
          Site officiel
        </CButton>
          </div>          
          <ScrollTrigger onEnter={() => setImageClass1("slide-from-right")} offset={{ top: 200 }}>
    <div className={`flex-container ${imageClass1}`}>
        <img src={waraWord} alt="Wara Image 1" className="img-thumbnail" />
        <div className="text-left">
            <h1 className="wara-title">WARA</h1>
            <p>
                Wara (littéralement « Les Fauves » en bambara2,3) est une série télévisée dramatique politique sénégalo-nigéro-française, créée par Charli Beléteau et diffusée depuis le 10 novembre 2020 sur TV5 Monde. Il s'agit de l'idée originale de Magali Issoufou Sani4.
                Elle est sélectionnée et projetée au festival Séries Mania en mars 20204.        
            </p>
        </div>
    </div>
</ScrollTrigger>



<ScrollTrigger onEnter={() => setImageClass2("slide-from-left")}>
    <div className={imageClass2}>
        <img src={waraWord1} alt="Wara Image 2" className="img-thumbnail" />
        <p className="text-right">
        <h1>Synopsis</h1>
        À l’université de Tanasanga, les meilleurs étudiants s’invitent au cours d’un brillant professeur Moutari Warra(Issaka Sawadogo ), attirés par son charisme et sa spécialité de Droit Constitutionnel. Une relation privilégiée s’instaure avec la jeune et pétillante Aïcha Diallo(France Nancy Goulian ). Mais leur relation n’est pas un fleuve tranquille, nourrie de rapports conflictuels et d'incompréhensions générationnelles.
        </p>
    </div>
</ScrollTrigger>

<ScrollTrigger onEnter={() => setImageClass3("slide-from-right")} offset={{ top: 200 }}>
    <div className={imageClass3}>
        <p className="text-left"> 
        Ce paradoxe en vient à son paroxysme le jour de l’arrestation en plein cours de Mariam Shugger, professeure de sciences physiques à l’URT. Shugger révèle alors de lourds secrets, déstabilisants Moutari et Aïcha. Ils s'opposent longtemps avant d’admettre une vérité qui les réconciliera.        </p>
        <img src={waraWord2} alt="Wara Image 3" className="img-thumbnail" />
    </div>
</ScrollTrigger>

<ScrollTrigger onEnter={() => setImageClass4("slide-from-left")} offset={{ top: 200 }}>
<div className={imageClass4}>
    <img src={waraWord3} alt="Wara Image 4" className="img-thumbnail" />
</div>

</ScrollTrigger>



        </div>
        <div className="table-container">
  <CRow className="table-row">
    <CCol xs={4} className="table-col">
      <h3>Acteurs principaux</h3>
        <ul>
            <li>Issaka Sawadogo : Moutari Wara</li>
            <li>France Nancy Goulian : Aïcha Diallo</li>
            <li>Maimouna N'Diaye : Yasmin Diallo</li>
            <li>Souleymane Sèye Ndiaye : Ganka Barry</li>
            <li>Canabasse : Bachar</li>
        </ul>
    </CCol>
    <CCol xs={4} className="table-col">
      <h3>Équipe technique (1)</h3>
        <ul>
            <li>Création : Charli Beléteau</li>
            <li>Réalisation : Oumar Diack et Toumani Sangaré</li>
            <li>Création : Charli Beléteau, d'après l'idée originale de Magali Issoufou Sani4</li>
            <li>Réalisation : Oumar Diack et Toumani Sangaré4</li>
            <li>Scénario : Charli Beléteau, Aka Assié, Awa Ba, Renaud Beauchard, Aissata Dème, Moussa Diallo, Dialika Sané, Emma Sangaré et Merline Touko Tchoko4</li>
            <li>Musique : Franck Lebon4</li>
            <li>Costumes : Mariam Diop</li>
            </ul>
            </CCol>
    <CCol xs={4} className="table-col">
      <h3>Équipe technique (2)</h3>
        <ul>
            <li>Photographie : Nourou Sarr</li>
            <li>Son : Clément Maléo et Hamza Ouhbi</li>
            <li>Montage : Nicolas Bonnet et Sarah Chartier</li>
            <li>Montage Son : Jf Viguié et Romain Le bras</li>
            <li>Mixage : Benjamin Cabaj</li>
            <li>Production : Sophie Deloche, Mbathio Diaw, Magagi Issoufou, Alexandre Rideau et Baptiste Rinaldi</li>
            <li>Sociétés de production : MJP Productions (Niger), Astharté & Compagnie (France) et Raes Production (Sénégal)3,4 en co-production avec TV5 Monde</li>
            <li>Pays d'origine : Drapeau de la France France / Drapeau du Niger Niger / Drapeau du Sénégal Sénégal4</li>
        </ul>
      </CCol>
    </CRow>
    </div>

      </CCol>
    </CRow>
  )
}

export default Accordion
