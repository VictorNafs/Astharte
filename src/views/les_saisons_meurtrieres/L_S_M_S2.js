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

import bleucatacombeWord1 from 'src/assets/images/bleucatacombeword1.jpg';
import affichebleucatacombe2 from 'src/assets/images/affiche-bleu-catacombe2.jpg';
import bleucatacombeWord2 from 'src/assets/images/bleucatacombeword2.jpg';
import bleucatacombebottom1 from 'src/assets/images/bleucatacombebottom1.jpg';
import bleucatacombebottom2 from 'src/assets/images/bleucatacombebottom2.jpg';
import bleucatacombebottom3 from 'src/assets/images/bleucatacombebottom3.jpg';

const L_S_M_S2 = () => {
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
                <title>Bleu Catacombes - Les Saisons Meurtrières - Astharté & Compagnie</title>
                <meta name="description" content="Bleu Catacombes, un épisode de la série 'Les Saisons Meurtrières', est un téléfilm policier français réalisé par Charlotte Brandström." />
                <meta name="keywords" content="production de films, séries télévisées, cinéma, fiction, Astharté & Compagnie, production cinématographique, créativité cinématographique, production de séries, diversité des genres" />
            <meta name="author" content="Astharté & Compagnie" />
                {/* Open Graph Tags */}
                <meta property="og:title" content="Bleu Catacombes - Les Saisons Meurtrières - Astharté & Compagnie" />
                <meta property="og:description" content="Découvrez 'Bleu Catacombes', un épisode captivant de la série 'Les Saisons Meurtrières'." />
                <meta property="og:url" content="https://astharte.com/l_s_m_s2" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://astharte.com/favicon.ico" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bleu Catacombes - Les Saisons Meurtrières - Astharté & Compagnie" />
                <meta name="twitter:description" content="Découvrez 'Bleu Catacombes', un épisode captivant de la série 'Les Saisons Meurtrières'." />
                <meta name="twitter:image" content="https://astharte.com/favicon.ico" />

                {/* Schema.org JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "TVSeries",
                        "name": "Bleu Catacombes",
                        "description": "Bleu Catacombes, un épisode de la série 'Les Saisons Meurtrières'.",
                        "url": "https://astharte.com/l_s_m_s2",
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
                    <h1 className="wara-title mtwt">Bleu catacombes</h1>
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
                            Bleu catacombes est un téléfilm policier français réalisé par Charlotte Brandström diffusé pour la première fois le 31 janvier 2014 sur France 2.
                            C'est l'adaptation du roman policier éponyme de Gilda Piersanti1.
                            </p>
                            <br></br>
                            <p className="text-left text-bg texte">
                            Une tête est retrouvée dans les catacombes de Paris. Le commissaire Rousseau et son équipe trouvent rapidement l'identité de la victime. Il s'agit de Maximilien Müller, un artiste renommé. Mais où est le corps ? L'enquête mène la police dans l'atelier du peintre où elle retrouve non seulement le corps nu de l'artiste mais aussi celui d'une femme d'une soixantaine d'années également décapitée. Une tête est retrouvée plus tard mais elle ne peut appartenir au corps retrouvé dans l'appartement. Est-ce un tueur en série ? Les victimes sont-elles liées ?                            
                            </p>
                      </div>
                        <img src={affichebleucatacombe2} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 200 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={bleucatacombeWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                <h3 className="white-title">Acteurs</h3>   
                                    <ul>
                                        <li>Patrick Chesnais : le commissaire Rousseau</li>
                                        <li>Camille Panonacle : Mariella De Luca</li>
                                        <li>Jane Birkin : Lili Rousseau, la femme du commissaire</li>
                                        <li>Ludmila Mikaël : Lydia Müller</li>
                                        <li>Ruth Vega Fernandez : Cathy Grosjean</li>
                                        <li>Kenny Douala : Luc Blissol</li>
                                        <li>Cathy Amaizo : la mère de Luc Blissol</li>
                                        <li>Michel Bompoil : François Montalembert</li>
                                        <li>Gaëlle Bona : Eva Lebouc</li>
                                        <li>Marie Collins : la mère d'Eva Lebouc</li>
                                        <li>Christiane Millet : Delphine Fauvet</li>
                                        <li>Jean-Pierre Cormarie : Maximilien Müller</li>
                                        <li>Jules Dousset : l'inconnu</li>
                                        <li>Valérie Flan : la gardienne</li>
                                        <li>Éric Frey : le légiste</li>
                                        <li>Jean-Michel Fête : Alexandre de Montalembert</li>
                                        <li>Marc Léonian : le serrurier</li>
                                        <li>Bruno López : Borel</li>
                                        <li>Yvonnick Muller : l'employé d'Alexandre</li>
                                        <li>Serge Onteniente : le prêtre</li>
                                        <li>Laurence Roy : Noémie Marchand</li>
                                        <li>Vincent Vermignon : Ringo</li>
                                        <li>Emmanuel Vieilly : Jérôme Duarte</li>
                                    </ul>
                                </div>
                        </div>
                    </ScrollTrigger>


                    <ScrollTrigger 
                    onEnter={() => setImageClass3("slide-from-left wara-slide-in")} 
                    offset={{ top: 200 }}>
                    <div className={`wara-flex-container ${imageClass3}`}>
                        <div className="wara-text-left text-bg">
                        <h3 className="white-title">Équipe artistique et technique</h3>   
                            <ul>
                                <li>Réalisation : Charlotte Branström</li>
                                <li>Scénario : Gianguido Spinelli et Gilda Piersanti (d'après le roman de Gilda Piersanti)</li>
                                <li>Production : Sophie Deloche</li>
                                <li>Musique : Frans Bak</li>
                                <li>Directeur de production : Pascal Metge</li>
                                <li>Directeur de la photographie : Pascal Gennesseaux</li>
                                <li>Chef opérateur son : Bernard Bats</li>
                                <li>1er assistant réalisateur : Franck Delpech</li>
                                <li>Directrice de casting : Françoise Menidrey</li>
                                <li>Chef décorateur : Eric Durringer</li>
                            </ul>
                        </div>
                        <img src={bleucatacombeWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={bleucatacombebottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={bleucatacombebottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={bleucatacombebottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    </>
    );
}

export default L_S_M_S2;
