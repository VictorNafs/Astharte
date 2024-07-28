/* eslint-disable */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import './l_s_m.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import noirenigmaWord1 from 'src/assets/images/noirenigmaword1.jpg';
import affichenoirenigma4 from 'src/assets/images/affiche-noir-enigma4.jpg';
import noirenigmaWord2 from 'src/assets/images/noirenigmaword2.jpg';
import noirenigmabottom1 from 'src/assets/images/noirenigmabottom1.jpg';
import noirenigmabottom2 from 'src/assets/images/noirenigmabottom2.jpg';
import noirenigmabottom3 from 'src/assets/images/noirenigmabottom3.jpg';

const L_S_M_S4 = () => {
    const navigate = useNavigate();
    const [imageClass1, setImageClass1] = useState("slide-initial");
    const [imageClass2, setImageClass2] = useState("slide-initial");
    const [imageClass3, setImageClass3] = useState("slide-initial");
    const [imageClass4, setImageClass4] = useState("slide-initial");

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
        <Helmet>
            <title>Noir Enigma - Les Saisons Meurtrières - Astharté & Compagnie</title>
            <meta name="description" content="Noir Enigma, un épisode de la série 'Les Saisons Meurtrières', est un téléfilm policier français réalisé par Manuel Boursinhac." />
            <meta name="keywords" content="production de films, séries télévisées, cinéma, fiction, Astharté & Compagnie, production cinématographique, créativité cinématographique, production de séries, diversité des genres" />
            <meta name="author" content="Astharté & Compagnie" />

            {/* Open Graph Tags */}
            <meta property="og:title" content="Noir Enigma - Les Saisons Meurtrières - Astharté & Compagnie" />
            <meta property="og:description" content="Découvrez 'Noir Enigma', un épisode captivant de la série 'Les Saisons Meurtrières'." />
            <meta property="og:url" content="https://astharte.com/l_s_m_s4" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://astharte.com/favicon.ico" />
            
            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Noir Enigma - Les Saisons Meurtrières - Astharté & Compagnie" />
            <meta name="twitter:description" content="Découvrez 'Noir Enigma', un épisode captivant de la série 'Les Saisons Meurtrières'." />
            <meta name="twitter:image" content="https://astharte.com/favicon.ico" />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "TVSeries",
                    "name": "Noir Enigma",
                    "description": "Noir Enigma, un épisode de la série 'Les Saisons Meurtrières'.",
                    "url": "https://astharte.com/l_s_m_s4",
                    // ... Autres propriétés pertinentes ...
                })}
            </script>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <meta name="theme-color" content="#FFFFFF" />
        </Helmet>
        <CRow className="bg-image-s-lsm">
            <CCol xs={12}>
                <div className="container">
                    <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div>
                    <h1 className="wara-title mtwt">Noir Enigma</h1>
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
                            Noir enigma est un téléfilm policier français réalisé par Manuel Boursinhac et Gianguido Spinelli diffusé sur France 2 le 20 octobre 2017, adaptation du polar de Gilda Piersanti paru en 2010 sous le titre Roma enigma1.                            </p>
                            <br></br>
                            <p className="text-left text-bg texte">
                            Devant une pâtisserie parisienne, une jeune étudiante s'effondre, tuée par balle. Pas d'arme du crime, aucun suspect, rien dans le passé de la victime qui permette de suivre la moindre piste. Un meurtre parfait sans mobile. Une nouvelle enquête du commissaire Rousseau et de la commandante Mariella De Luca.
                            </p>
                      </div>
                        <img src={affichenoirenigma4} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 50 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={noirenigmaWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                <h3 className="white-title">Acteurs</h3>   
                                    <ul>
                                        <li>Patrick Chesnais : le commissaire Jean Rousseau</li>
                                        <li>Camille Panonacle : Mariella De Luca</li>
                                        <li>Manon Bresch : Charlotte Castillon</li>
                                        <li>Andréa Ferréol : Albina Destouches</li>
                                        <li>Rufus : Roger Baudouin</li>
                                        <li>Jean-Michel Fête : Alexandre de Montalembert</li>
                                        <li>Jean Vocat : Jérôme Laurain</li>
                                        <li>Antoine Berry-Roger : Gabriel Destouches</li>
                                        <li>Nicolas Abraham : Franck Zegrani</li>
                                        <li>Hassam Ghancy : Wassim Terrab</li>
                                        <li>Michel Bompoil : le substitut du procureur</li>
                                        <li>Michèle Loubet : Jeanne Destouches</li>
                                        <li>Frédéric Siuen : François Nguyen</li>
                                        <li>Marie Courandière : la boulangère</li>
                                        <li>Cécile Camp : professeur Midant</li>
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
                                <li>Réalisation : Manuel Boursinhac</li>
                                <li>Scénario : Gianguido Spinelli et Gilda Piersanti, d'après le roman Roma enigma de Gilda Piersanti</li>
                                <li>Production : Sophie Deloche</li>
                                <li>Musique : Stéphane Moucha</li>
                                <li>Directeur de production : Jacques Bontoux</li>
                                <li>Directeur de la photographie : Jean-Max Bernard</li>
                                <li>Directrice de casting : Françcoise Menidrey</li>
                                <li>Chef décorateur : Eric Durringer</li>
                            </ul>
                        </div>
                        <img src={noirenigmaWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={noirenigmabottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={noirenigmabottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={noirenigmabottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
        </>
    );
}

export default L_S_M_S4;
