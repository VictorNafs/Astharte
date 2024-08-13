/* eslint-disable */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './vestiairesLiberes.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import vestiairesLWord1 from 'src/assets/images/vestiairesLword1.jpg';
import affichevestiairesL from 'src/assets/images/affiche_vestiaires_liberes.jpg';
import vestiairesLWord2 from 'src/assets/images/vestiairesLword2.jpg';
import vestiairesLbottom1 from 'src/assets/images/vestiairesLbottom1.jpg';
import vestiairesLbottom2 from 'src/assets/images/vestiairesLbottom2.jpg';
import vestiairesLbottom3 from 'src/assets/images/vestiairesLbottom3.jpg';

const VestiairesLiberes = () => {
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
            <title>Vestiaires Libérés - Astharté & Compagnie</title>
            <meta name="description" content="Découvrez 'Vestiaires Libérés', Short com écrite par Adda Abdelli, Fabrice Chanut, Maxime Potherat, réalisée par Maxime Potherat et diffusée sur le Web." />
            <meta name="keywords" content="production de films, séries télévisées, cinéma, fiction, Astharté & Compagnie, production cinématographique, créativité cinématographique, production de séries, diversité des genres" />
            <meta name="author" content="Astharté & Compagnie" />
            {/* Open Graph Tags */}
            <meta property="og:title" content="Vestiaires Libérés - Astharté & Compagnie" />
            <meta property="og:description" content="Une intrigue policière captivante produite par Astharté & Compagnie." />
            <meta property="og:url" content="https://astharte.com/vestiairesLiberes" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://astharte.com/favicon.ico" />
            
            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Vestiaires Libérés - Astharté & Compagnie" />
            <meta name="twitter:description" content="Une intrigue policière captivante produite par Astharté & Compagnie." />
            <meta name="twitter:image" content="https://astharte.com/favicon.ico" />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "Movie",
                    "name": "Vestiaires Libérés",
                    "description": "Une intrigue policière captivante produite par Astharté & Compagnie.",
                    "url": "https://astharte.com/vestiairesLiberes",
                    // ... Autres propriétés pertinentes ...
                })}
            </script>
            <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <meta name="theme-color" content="#FFFFFF" />
        </Helmet>
        <CRow className="bg-image-s-epc">
            <CCol xs={12}>
                <div className="container">
                    {/* <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div> */}
                    <h1 className="wara-title mtwt">Vestiaires Libérés</h1>
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
                            Paris. Un flag. Un coup de fil au mauvais moment. La vie de Louise Heck, capitaine
                            aux Stups, vient de basculer. L’appel de son fils pendant le flag lui a fait perdre l’attention
                            qu’elle aurait dû avoir, faisant échouer le flag. Pas facile de coordonner l’annonce du départ
                            des siens pour une vie loin d’elle et une action aussi tendue. Tandis que l’IGPN enquête au
                            sujet de la disparition de la drogue, Louise rejoint son mari, Martin, et son fils, Yvan, dans
                            une petite ville au bord de la mer d’où Martin est originaire, bien décidée à retrouver les
                            siens et les ramener vivre auprès d’elle.                          </p>
                            <h3 className="wara-syn">Équipe artistique</h3>
                            <p className="text-left text-bg texte">
                            <ul>
                                <li>Scénario de Maxime POTHERAT, Adda ABDELLI, Fabrice CHANUT</li>
                                <li>Réalisation de Maxime POTHERAT</li>
                                <li>Production pour Astharté et Compagnie - Sophie Deloche - & Les Films d’Avalon</li>
                                <li>Philippe Braunstein</li>
                                <li>Musique : <a 
                                    href="https://www.boriginal-music.com/compositeur/franck-lebon/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ color: 'white', textDecoration: 'underline' }}>
                                    Franck Lebon</a></li>
                            </ul>
                            </p>
                      </div>
                        <img src={affichevestiairesL} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 50 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={vestiairesLWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                <h3 className="white-title">Acteurs</h3>   
                                    <ul>
                                        <li>Adda ABDELLI</li>
                                        <li>Fabrice CHANUT</li>
                                        <li>Alexandre PHILIP</li>
                                        <li>Anaïs FABRE</li>
                                        <li>Luc RODRIGUEZ</li>
                                        <li>Philippe CROIZON</li>
                                        <li>Romain LANCRY</li>
                                        <li>Aude GOGNY-GOUBERT</li>
                                        <li>Julien JOSSELIN</li>
                                        <li>Yannick VABRE</li>
                                        <li>Magali MINIAC</li>
                                        <li>Jérôme BRUNO</li>
                                        <li>Nicolas MARTINEZ</li>
                                        <li>Sébastien LALANNE</li>
                                        <li>Arnaud CAUSSON</li>
                                        <li>Vincent BORDES</li>
                                        <li>Olivier PLEINDOUX</li>
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
                                    <li>Directeur de la photographie : Juan SIQUOT</li>
                                    <li>Directeur de production : Vincent BORDES</li>
                                    <li>1er assistante réalisateur : Caroline VANDENBUSSCHE</li>
                                    <li>Chef opérateur son : Valentin VERRIER</li>
                                    <li>Chef monteur : Jeronimo ACERO</li>
                                    <li>Monteur son, mixeur : Charles MASSON</li>
                                    <li>Chef décorateur : Nicolas BOUCHER</li>
                                    <li>Chef costumière : Aminata SOW</li>
                                    <li>Chef maquilleuse : Valentine ERLICH</li>
                                </ul>
                        </div>
                        <img src={vestiairesLWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={vestiairesLbottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={vestiairesLbottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={vestiairesLbottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
        </>
    );
}

export default VestiairesLiberes;
