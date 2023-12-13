/* eslint-disable */

import React, { useState } from 'react';
import './l_s_m.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import hiverrougeWord1 from 'src/assets/images/hiverrougeword1.jpg';
import affichehiverrouge1 from 'src/assets/images/affiche-hiver-rouge1.jpg';
import hiverrougeWord2 from 'src/assets/images/hiverrougeword2.jpg';
import hiverrougebottom1 from 'src/assets/images/hiverrougebottom1.jpg';
import hiverrougebottom2 from 'src/assets/images/hiverrougebottom2.jpg';
import hiverrougebottom3 from 'src/assets/images/hiverrougebottom3.jpg';

const L_S_M_S1 = () => {
    const navigate = useNavigate();
    const [imageClass1, setImageClass1] = useState("slide-initial");
    const [imageClass2, setImageClass2] = useState("slide-initial");
    const [imageClass3, setImageClass3] = useState("slide-initial");
    const [imageClass4, setImageClass4] = useState("slide-initial");

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <CRow className="bg-image-s-lsm">
            <CCol xs={12}>
                <div className="container">
                    <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div>
                    <h1 className="wara-title mtwt">Hiver Rouge</h1>
                    {/* <div className="video-button-container">
                        <CButton color="link" className="mr-3 video-button" onClick={() => window.open('URL_DE_LA_VIDEO', '_blank')}>
                            Voir la vidéo
                        </CButton>
                        <CButton color="link" className="ml-3 video-button" onClick={() => window.open('URL_DU_SITE', '_blank')}>
                            Site officiel
                        </CButton>
                    </div> */}

                    <ScrollTrigger onEnter={() => setImageClass1("slide-from-left")}>
                      <div className={`flex-container ${imageClass1}`}>
                        <div className="text-container special-text-container">
                          <h1 className="wara-syn">Synopsis</h1>
                            <p className="text-left text-bg">
                            Hiver rouge est un téléfilm policier français, le premier de la collection Les Saisons meurtrières. Il a été réalisé par Xavier Durringer en 2011 et diffusé pour la première fois le 6 janvier 2012 sur France 2.
                            C'est l'adaptation du polar de Gilda Piersanti Rouge Abattoir1. Il a reçu le prix de la meilleure musique au 13e Festival de la fiction TV de La Rochelle2.
                            </p>
                            <br></br>
                            <p className="text-left text-bg">
                            Le jour de Noël, à Paris, Place de Bitche, une main découpée à la scie et accrochée à un sapin est retrouvée par l'équipe du commissaire Rousseau. Pour résoudre cette sombre enquête, sa hiérarchie lui impose l'aide d'une profileuse atypique, Mariella De Luca. Rousseau, réticent à ce partenariat, semble convaincu que cette mise en scène macabre signe le troisième meurtre d'un tueur en série.                            </p>
                      </div>
                        <img src={affichehiverrouge1} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 50 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={hiverrougeWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                <h3 className="white-title">Acteurs</h3>   
                                    <ul>
                                        <li>Patrick Chesnais : le commissaire Rousseau</li>
                                        <li>Camille Panonacle : Mariella De Luca, la profileuse</li>
                                        <li>Jane Birkin : Lily Rousseau, la femme du commissaire</li>
                                        <li>Brigitte Catillon : Françoise Berthier</li>
                                        <li>Grégory Fitoussi : Fabrice Berthier</li>
                                        <li>Gérald Laroche : Roubaix, un subordonné du commissaire</li>
                                        <li>Bruno López : lieutenant Borel, un subordonné du commissaire</li>
                                        <li>Thomas Coumans : David Fauvet</li>
                                        <li>Michel Bompoil : le procureur François Montalembert</li>
                                        <li>Christiane Millet : Delphine Fauvet</li>
                                        <li>Vincent Jouan : Cortez</li>
                                        <li>Frédéric Duff-Barbé : Miller</li>
                                        <li>Christophe Rouzaud : Mario</li>
                                        <li>Juliet Lemonnier : Véronica</li>
                                        <li>Jean Miez : Leroux</li>
                                        <li>ainsi que, dans des rôles de policiers :
                                        Tadrina Hocking, Thomas Arnaud, Bun Daravirak, Clément Parmentier, Frédéric Platti, Christophe Thuillier et Fabrice Colson (non confirmé).</li>
                                    </ul>
                                </div>
                        </div>
                    </ScrollTrigger>


                    <ScrollTrigger 
                    onEnter={() => setImageClass3("slide-from-left wara-slide-in")} 
                    offset={{ top: 50 }}>
                    <div className={`wara-flex-container ${imageClass3}`}>
                        <div className="wara-text-left text-bg">
                        <h3 className="white-title">Équipe artistique et technique</h3>   
                            <ul>
                                <li>Réalisation : Xavier Durringer</li>
                                <li>Scénario : Gianguido Spinelli et Gilda Piersanti (d'après le roman de Gilda Piersanti)</li>
                                <li>Production : Sophie Deloche</li>
                                <li>Musique : Siegfried</li>
                                <li>Directeur de production : Pascal Storennat</li>
                                <li>Directeur de la photographie : Manuel Téran</li>
                                <li>Chef opérateur son : Madone Charpall</li>
                                <li>1re assistante réalisateur : Ambre Valade</li>
                                <li>Directrice de casting : Françoise Menidrey</li>
                                <li>Scripte : Véronique Heuchenne</li>
                                <li>Chef décorateur : Éric Durringer</li>
                            </ul>
                        </div>
                        <img src={hiverrougeWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={hiverrougebottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={hiverrougebottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={hiverrougebottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    );
}

export default L_S_M_S1;
