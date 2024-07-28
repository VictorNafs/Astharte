/* eslint-disable */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './comme_un_air.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import commeunairWord1 from 'src/assets/images/commeunair-word1.jpg';
import affichecommeunair from 'src/assets/images/affiche-comme-un-air.jpg';
import commeunairWord2 from 'src/assets/images/commeunair-word2.jpg';
import commeunairbottom1 from 'src/assets/images/commeunair-bottom1.jpg';
import commeunairbottom2 from 'src/assets/images/commeunair-bottom2.jpg';
import commeunairbottom3 from 'src/assets/images/commeunair-bottom3.jpg';

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
        <>
        <Helmet>
            <title>Comme Un Air d'Autoroute - Astharté & Compagnie</title>
            <meta name="description" content="Découvrez 'Comme Un Air d'Autoroute', une comédie musicale déjantée produite par Astharté & Compagnie." />
            <meta name="keywords" content="production de films, séries télévisées, cinéma, fiction, Astharté & Compagnie, production cinématographique, créativité cinématographique, production de séries, diversité des genres" />
            <meta name="author" content="Astharté & Compagnie" />
            {/* Open Graph Tags */}
            <meta property="og:title" content="Comme Un Air d'Autoroute - Astharté & Compagnie" />
            <meta property="og:description" content="Une comédie musicale déjantée produite par Astharté & Compagnie." />
            <meta property="og:url" content="https://astharte.com/comme_un_air" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://astharte.com/favicon.ico" />
            
            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Comme Un Air d'Autoroute - Astharté & Compagnie" />
            <meta name="twitter:description" content="Une comédie musicale déjantée produite par Astharté & Compagnie." />
            <meta name="twitter:image" content="https://astharte.com/favicon.ico" />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "Movie",
                    "name": "Comme Un Air d'Autoroute",
                    "description": "Une comédie musicale déjantée produite par Astharté & Compagnie.",
                    "url": "https://astharte.com/comme_un_air",
                    // ... Autres propriétés pertinentes ...
                })}
            </script>
            <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <meta name="theme-color" content="#FFFFFF" />
        </Helmet>
        <CRow className="bg-image-s-cua">
            <CCol xs={12}>
                <div className="container">
                    {/* <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div> */}
                    <h1 className="wara-title mtwt">Comme Un Air d'Autoroute</h1>
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
                            Nourrisson abandonné à la naissance, Peter a fait de l'aire d'autoroute qui l'a vu grandir un havre de paix, joyeux et extravagant. Entouré par une tribu d'employés loufoques et fantasques, il résiste aux assauts du groupe pétrolier Degrand, dont le patron ambitionne de devenir le maître incontesté de l'autoroute 440 en récupérant la dernière aire qui lui échappe encore. L'arrivée de la belle Marie, fille de l'industriel envoyée pour l'espionner, va remettre en question le quotidien de Peter...
                            </p>
                            <br></br>
                            <p className="text-left text-bg texte">
                            Les réalisateurs <a 
                                href="https://www.boriginal-music.com/compositeur/franck-lebon/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: 'white', textDecoration: 'underline' }}>
                                Franck Lebon</a> et Vincent Burgevin signent ici une nouvelle comédie musicale déjantée, produite par Sophie Deloche et Philippe Braunstein. Boris Vigneron, compère et acteur fétiche des deux cinéastes, y interprète un propriétaire d'aire d'autoroute au grand cœur qui gère avec bienveillance ce petit village gaulois résistant encore à l'envahisseur. Pour lui donner la réplique, la pétillante Maryvette Lair campe le rôle d'une fille à papa potiche, naïve et maladroite, missionnée par son père pour le séduire et le faire plier. Dans la peau de l'industriel machiavélique, Didier Bourdon n'a rien perdu de son pouvoir comique. Une intrigue qui sert de prétexte au duo de réalisateurs pour mettre en scène une galerie de personnages hauts en couleur, au rythme de scènes de comédies musicales décalées, aux faux airs de Broadway.
                            </p>
                      </div>
                        <img src={affichecommeunair} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 50 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={commeunairWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                    <h3 className="white-title">Acteurs</h3>   
                                        <ul>
                                            <li>Boris Vigneron : Peter</li>
                                            <li>Maryvette Lair : Marie</li>
                                            <li>Didier Bourdon : Degrand</li>
                                            <li>Catherine Hosmalin : Francette</li>
                                            <li>Jérôme Bruno : Tac -Tac</li>
                                            <li>Jean Vocat : Luc</li>
                                            <li>Patrick de Valette : Joe</li>
                                            <li>Yanik Vabre : John</li>
                                            <li>Amélie Yves Massari : Petrova</li>
                                            <li>Yves Massari : Jean-Pierre</li>
                                            <li>Éva Pardalis : Liliane</li>
                                            <li>Ornella Bes : Marina</li>
                                            <li>Adeline Brossard : Francette 30 ans</li>
                                            <li>Eddy Del Pino : Aimé</li>
                                            <li>Nicolas Devort : Le négociateur</li>
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
                                <li>Production : Sophie Deloche et Philippe Braunstein</li>
                                <li>Réalisation : Vincent Burgevin et <a 
                                        href="https://www.boriginal-music.com/compositeur/franck-lebon/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ color: 'white', textDecoration: 'underline' }}>
                                        Franck Lebon</a></li>
                                <li>Scénario et dialogues : Jérôme Bruno, Vincent Burgevin, Edgard F. Grima, <a 
                                        href="https://www.boriginal-music.com/compositeur/franck-lebon/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ color: 'white', textDecoration: 'underline' }}>
                                        Franck Lebon</a>, Boris Vigneron et Jean Vocat</li>
                                <li>Photographie : Marc Romani</li>
                                <li>Chorégraphies : Sandrine Chaoulli</li>
                                <li>Musique originale : <a 
                                        href="https://www.boriginal-music.com/compositeur/franck-lebon/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ color: 'white', textDecoration: 'underline' }}>
                                        Franck Lebon</a></li>
                                <li>Son : Eddy Laurent, Samy Bardet et Thierry Lebon</li>
                                <li>Montage : Antoine Vareille et Nathan Delannoy</li>
                                <li>Costumes : Laure Villemer</li>
                                <li>Décors : Marie-Hélène Sulmoni</li>
                            </ul>
                        </div>
                        <img src={commeunairWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={commeunairbottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={commeunairbottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={commeunairbottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    </>
    );
}

export default Wara_S1;
