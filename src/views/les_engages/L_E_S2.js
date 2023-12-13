/* eslint-disable */

import React, { useState } from 'react';
import './l_e.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import S2lesengagesWord1 from 'src/assets/images/S2-les-engages-word-1.jpg';
import affichele2 from 'src/assets/images/affiche-l-e2.jpg';
import S2lesengagesWord2 from 'src/assets/images/S2-les-engages-word-2.jpg';
import S2lesengagesbottom1 from 'src/assets/images/S2-les-engages-bottom-1.jpg';
import S2lesengagesbottom2 from 'src/assets/images/S2-les-engages-bottom-2.JPG';
import S2lesengagesbottom3 from 'src/assets/images/S2-les-engages-bottom-3.jpg';

const L_E_S2 = () => {
    const navigate = useNavigate();
    const [imageClass1, setImageClass1] = useState("slide-initial");
    const [imageClass2, setImageClass2] = useState("slide-initial");
    const [imageClass3, setImageClass3] = useState("slide-initial");
    const [imageClass4, setImageClass4] = useState("slide-initial");

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <CRow className="bg-image-s-le">
            <CCol xs={12}>
                <div className="container">
                    <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div>
                    <h1 className="wara-title mtwt">Les Engagés</h1>
                    <h3 className="wara-title-h3">Saison 2</h3>
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
                        <div className="text-container-S2 special-text-container">
                          <h1 className="wara-syn">Synopsis</h1>
                            <p className="text-left text-bg texte">
                                Les Engagés est une web-série française créée et écrite par Sullivan Le Postec. La deuxième saison est réalisée par Slimane-Baptiste Berhoun.
                                La série est coproduite par Astharté & Compagnie et France Télévisions Nouvelles Écritures, et diffusée à l’origine sur la plateforme Studio 4 à partir du 17 mai 2017. Depuis la refonte de l’offre numérique de France Télévisions, Les Engagés est reprise sur France.tv Slash1.
                            </p>
                                <br></br>
                            <p className="text-left text-bg texte">
                                Le Point G est un Centre LGBT situé à Lyon. Thibaut est un de ses militants les plus actifs, très engagé dans la lutte pour les droits des homosexuels. Son quotidien est soudain bouleversé par le retour dans sa vie d'Hicham, une connaissance qu'il n'avait pas revue depuis des années et qui vient chercher auprès de lui la force de faire son coming-out et de trouver sa véritable identité. Hicham admire le charisme et l'engagement de Thibaut, mais, jeté brusquement au milieu des luttes politiques du Point G, il va rapidement en percevoir les limites et les contradictions…
                            </p>
                            <br></br>
                            <p className="text-left text-bg texte">
                                Une série créée et développée par Sullivan LE POSTEC 
                                Réalisée par Slimane-Baptiste BERHOUN
                                Produit par Sophie DELOCHE & Baptiste RINALDI</p>
                      </div>
                        <img src={affichele2} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 50 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={S2lesengagesWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                <h3 className="white-title">Acteurs</h3>   
                                    <ul>
                                        <li>Mehdi MESKAR</li>
                                        <li>Eric PUCHEU</li>
                                        <li>Adrian DE LA VEGA</li>
                                        <li>Denis D’ARCANGELO</li>
                                        <li>Nanou HARRY</li>
                                        <li>Claudius PAN</li>
                                        <li>Cyril NECKER</li>
                                        <li>Anaïs FABRE</li>
                                        <li>Sandra PARFAIT</li>
                                        <li>Lady CARBONE </li>
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
                                        <li>Créateur de la série : Sullivan Le Postec</li>
                                        <li>Réalisation : Slimane Baptiste Berhoun</li>
                                        <li>Scenario : Sullivan Le Postec</li>
                                        <li>Producteurs : Sophie Deloche et Baptiste Rinaldi (Astharté & Compagnie)</li>
                                        <li>Musique originale : Franck LEBON</li>
                                        <li>Directeur de production : Jacques BONTOUX</li>
                                        <li>Directeur de la photographie : Matthieu ANDRIEUX</li>
                                        <li>Chef opérateur du son : Marco PASCAL </li>
                                        <li>1er assistant réalisateur : Ronnie Franco</li>
                                        <li>Directeur de casting & coach : Stéphane GAILLARD </li>
                                        <li>Scripte : Pascale RENAUD </li>
                                        <li>Chef décorateur : Marie Marine NOTTE</li>
                                        <li>Cheffe costumière : Julia FOUROUX </li>
                                        <li>Cheffe maquilleuse / coiffeuse : Faustina DE SOUSA </li>
                                        <li>Chef électricien / Machiniste - Théo FARAMA </li>
                                        <li>Régisseur général : Pierre ADAM</li>
                                        <li>Chefs monteurs image : Nathan DELANNOY & Nicolas BONNET</li>
                                        <li>Etalonneur : Nicolas LOSSEC</li>
                                        <li>Chef monteur son / Mixeur : Charli CIRCUS </li>
                                    </ul>
                        </div>
                        <img src={S2lesengagesWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={S2lesengagesbottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={S2lesengagesbottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={S2lesengagesbottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    );
}

export default L_E_S2;
