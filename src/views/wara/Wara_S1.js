/* eslint-disable */

import React, { useState } from 'react';
import './wara_S.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import waraWord1 from 'src/assets/images/wara-word.jpg';
import affichewara1 from 'src/assets/images/affiche-wara1.jpg';
import waraWord2 from 'src/assets/images/waraword-2.jpg';
import warabottom1 from 'src/assets/images/waraword3.jpg';
import warabottom2 from 'src/assets/images/bottom-2.JPG';
import warabottom3 from 'src/assets/images/bottom-3.jpg';

const Wara_S1 = () => {
    const navigate = useNavigate();
    const [imageClass1, setImageClass1] = useState("slide-initial");
    const [imageClass2, setImageClass2] = useState("slide-initial");
    const [imageClass3, setImageClass3] = useState("slide-initial");
    const [imageClass4, setImageClass4] = useState("slide-initial");

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <CRow className="bg-image-s-w">
            <CCol xs={12}>
                <div className="container">
                    <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div>
                    <h1 className="wara-title mtwt">WARA</h1>
                    <h3 className="wara-title-h3">Et Si Demain</h3>
                    <div className="video-button-container">
                        <CButton color="link" className="mr-3 video-button" onClick={() => window.open('https://www.youtube.com/@WaraLaSerie', '_blank')}>
                            Voir la vidéo
                        </CButton>
                        <CButton color="link" className="ml-3 video-button" onClick={() => window.open('https://wara-laserie.com/', '_blank')}>
                            Site officiel
                        </CButton>
                    </div>

                    <ScrollTrigger onEnter={() => setImageClass1("slide-from-left")}>
                      <div className={`flex-container ${imageClass1}`}>
                        <div className="text-container special-text-container">
                          <h1 className="wara-syn">Synopsis</h1>
                            <p className="text-left text-bg texte">
                            À l’université de Tanasanga, les meilleurs étudiants s’invitent au cours d’un brillant professeur Moutari Warra(Issaka Sawadogo ), attirés par son charisme et sa spécialité de Droit Constitutionnel. Une relation privilégiée s’instaure avec la jeune et pétillante Aïcha Diallo(France Nancy Goulian ). Mais leur relation n’est pas un fleuve tranquille, nourrie de rapports conflictuels et d'incompréhensions générationnelles.
                            </p>
                            <br></br>
                            <h3 className="white-title">Acteurs principaux</h3>
                            <p className="text-left text-bg texte">
                            <ul>
                                <li>Issaka Sawadogo : Moutari Wara</li>
                                <li>France Nancy Goulian : Aïcha Diallo</li>
                                <li>Maimouna N'Diaye : Yasmin Diallo</li>
                                <li>Souleymane Sèye Ndiaye : Ganka Barry</li>
                                <li>Canabasse : Bachar</li>
                            </ul>
                            </p>
                      </div>
                        <img src={affichewara1} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                        onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                        offset={{ top: 50 }}>
    <div className={`waraRight-container ${imageClass2}`}>
        <img src={waraWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
        <div className="waraRight-textSection text-bg">
            <h3 className="white-title">Équipe artistique</h3>   
                <ul>
                    <li>Création : Charli Beléteau, d'après une idée originale de Magagi Issoufou Sani</li>
                    <li>Production : Sophie Deloche, Mbathio Diaw Ndiaye, Magagi Issoufou Sani, Alexandre Rideau et Baptiste Rinaldi</li>
                    <li>Réalisation : Toumani Sangaré et Oumar Diack</li>
                    <li>Scénario : Charli Beléteau, Aka Assié, Awa Ba, Renaud Beauchard, Aissata Dème, Moussa Diallo, Dialika Sané, Emma Sangaré et Merline Touko Tchoko</li>
                    <li>Musique : Franck Lebon</li>
                </ul>
        </div>
    </div>
</ScrollTrigger>


                    <ScrollTrigger 
                    onEnter={() => setImageClass3("slide-from-left wara-slide-in")} 
                    offset={{ top: 50 }}>
                    <div className={`wara-flex-container ${imageClass3}`}>
                        <div className="wara-text-left text-bg">
                            <h3 className="white-title">Équipe technique</h3>   
                                <ul>
                                    <li>Photographie : Nourou Sarr</li>
                                    <li>Chef opérateur son : Clément Maléo et Hamza Ouhbi</li>
                                    <li>Chefs monteurs : Nicolas Bonnet et Sarah Chartier</li>
                                    <li>Montage Son : Jf Viguié et Romain Le bras</li>
                                    <li>Mixage : Benjamin Cabaj</li>
                                    <li>Sociétés de production : MJP Productions (Niger), Astharté & Compagnie (France), Raes Production (Sénégal) et en co-production avec TV5 Monde</li>
                                    <li>Pays d'origine : France / Niger / Sénégal</li>
                                </ul>
                        </div>
                        <img src={waraWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={warabottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={warabottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={warabottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    );
}

export default Wara_S1;