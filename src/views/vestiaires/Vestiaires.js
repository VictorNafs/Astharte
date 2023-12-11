/* eslint-disable */

import React, { useState } from 'react';
import './vestiaires.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import vestiairesWord1 from 'src/assets/images/vestiaires-word-1.jpg';
import affichevestiaires13 from 'src/assets/images/affiche-vestiaires13.jpg';
import vestiairesWord2 from 'src/assets/images/vestiaires-word-2.jpg';
import vestiairesbottom1 from 'src/assets/images/vestiaires-bottom-1.jpg';
import vestiairesbottom2 from 'src/assets/images/vestiaires-bottom-2.jpg';
import vestiairesbottom3 from 'src/assets/images/vestiaires-bottom-3.jpg';

const Vestiaires = () => {
    const navigate = useNavigate();
    const [imageClass1, setImageClass1] = useState("slide-initial");
    const [imageClass2, setImageClass2] = useState("slide-initial");
    const [imageClass3, setImageClass3] = useState("slide-initial");
    const [imageClass4, setImageClass4] = useState("slide-initial");

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <CRow className="bg-image-s-v">
            <CCol xs={12}>
                <div className="container">
                    {/* <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div> */}
                    <h1 className="wara-title mtwt">Vestiaires</h1>
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
                            <p className="text-left text-bg texte">
                            En association avec Paris 2024, Vestiaires propose pour cette treizième saison, une série d'épisodes qui accueillent en Guest-stars 13 athlètes paralympiques choisis parmi les espoirs français des Jeux de 2024, et volontaires pour se prêter à un autre jeu, celui de la comédie. Tony Estanguet, président de Paris 2024, sera lui aussi présent pour un épisode inédit. 
                            </p>
                            <br></br>
                            <h3 className="wara-syn">Acteurs principaux</h3>
                            <p className="text-left text-bg texte">
                                <ul>
                                    <li>Adda ABDELLI : ROMY</li>
                                    <li>Alexandre PHILIP : ORSON</li>
                                    <li>Anaïs FABRE : CARO</li>
                                    <li>Luc RODRIGUEZ : RAMIREZ</li>
                                    <li>Krystoff FLUDER : CHARLES</li>
                                    <li>Yanik VABRE : LE KINE</li>
                                    <li>Clémentine CÉLARIÉ : LA STAR</li>
                                    <li>Pascal LEGITIMUS : MICKAEL</li>
                                    <li>Philippe CROIZON : CROIZON</li>
                                    <li>Josef SCHOVANEC : JOSEF</li>
                                    <li>Théo CURIN : THEO</li>
                                    <li>Cyril MISSONNIER : DIMITRI</li>
                                    <li>Fabrice CHANUT : LUDOVIC</li>
                                    <li>Olivier PLEINDOUX : WILLIAM</li>
                                    <li>Jimmy CONCHOU : JEFF</li>
                                    <li>Sophie MASSIEU : SOPHIE</li>
                                    <li>Boris VIGNERON : EDGAR</li>
                                    <li>Marjolaine POTTLITZER : JUDITH</li>
                                    <li>Malika AZGAG : SABRINA</li>
                                    <li>Ludivine LOISEAU-MUNOS : LULU</li>
                                </ul>
                            </p>
                      </div>
                        <img src={affichevestiaires13} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
    offset={{ top: 50 }}
>
    <div className={`waraRight-container ${imageClass2}`}>
        <img src={vestiairesWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
        <div className="waraRight-textSection text-bg">
        <h3 className="white-title">Équipe Artistique</h3>   
                <ul>
                    <li>Une création de Adda Abdelli et Fabrice Chanut</li>
                    <li>Scénario de Adda Abdelli, Fabrice Chanut, Franck Lebon, Virginie Peignien, Yanik Vabre, Loïc Nicoloff, Céline Boidin, Cyrille Latour et Nathan Delanoy</li>
                    <li>Réalisation de Fabrice Chanut, Franck Lebon et Vincent Burgevin</li>
                    <li>Production pour Astharté & Compagnie - Sophie Deloche et pour Les Films d’Avalon - Philippe Braunstein</li>
                    <li>Unité fiction France télévisions Anne Holmes, Emmanuel Garcia et Christophe Louis</li>
                </ul>
        </div>
    </div>
</ScrollTrigger>


                    <ScrollTrigger 
                    onEnter={() => setImageClass3("slide-from-left wara-slide-in")} 
                    offset={{ top: 50 }}>
                    <div className={`wara-flex-container ${imageClass3}`}>
                        <div className="wara-text-left text-bg">
                        <h3 className="white-title">Équipe technique - SAISON 13</h3>   
                                <ul>
                                    <li> Directeur de la Photographie : Mathieu Andrieux</li>
                                    <li>Directeur de Production : Noël Magis</li>
                                    <li>1er assistant réalisateur : Patrick Betaillole</li>
                                    <li>Chef opérateur son : Alexandre Verwaerde</li>
                                    <li>Chef monteur : Nathan Delanoy et Nicolas Bonnet</li>
                                    <li>Monteur, son mixeur : Samy Bardet</li>
                                    <li>Chef décorateur : Eric Durringer</li>
                                    <li>Accessoiriste : Didier Pons</li>
                                    <li>Chef costumière : Séverine Cales</li>
                                    <li>Chef maquilleuse : Elsa Gendre</li>
                                </ul>
                        </div>
                        <img src={vestiairesWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={vestiairesbottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={vestiairesbottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={vestiairesbottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    );
}

export default Vestiaires;

