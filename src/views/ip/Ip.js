/* eslint-disable */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './ip.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import ipWord1 from 'src/assets/images/ip-word-1.jpg';
import affichevestiaires13 from 'src/assets/images/affiche-ip.jpg';
import ipWord2 from 'src/assets/images/ip-word-2.jpg';
import ipbottom1 from 'src/assets/images/ip-bottom-1.jpg';
import ipbottom2 from 'src/assets/images/ip-bottom-2.jpg';
import ipbottom3 from 'src/assets/images/ip-bottom-3.jpg';

const Ip = () => {
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
            <title>Immeuble Partagé - Astharté & Compagnie</title>
            <meta name="description" content="Découvrez 'Immeuble Partagé', une série humoristique, insolente et impertinente, de format court, produite par Astharté & Compagnie." />
            <meta name="keywords" content="Immeuble Partagé, série humoristique, Astharté & Compagnie, insolente, comédie, impertinente, inclusion" />
            <meta name="author" content="Astharté & Compagnie" />

            {/* Open Graph Tags */}
            <meta property="og:title" content="Immeuble Partagé - Astharté & Compagnie" />
            <meta property="og:description" content="Explorez 'Immeuble Partagé', une série humoristique, insolente et impertinente, de format court, produite par Astharté & Compagnie." />
            <meta property="og:url" content="https://astharte.com/ip" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://astharte.com/favicon.ico" />
            
            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Immeuble Partagé - Astharté & Compagnie" />
            <meta name="twitter:description" content="Explorez 'Immeuble Partagé', une série humoristique, insolente et impertinente, de format court, produite par Astharté & Compagnie." />
            <meta name="twitter:image" content="https://astharte.com/favicon.ico" />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "TVSeries",
                    "name": "Immeuble Partagé",
                    "description": " 'Immeuble Partagé' une série humoristique, insolente et impertinente, de format court, produite par Astharté & Compagnie.",
                    "url": "https://astharte.com/ip",
                    // ... Autres propriétés pertinentes ...
                })}
            </script>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <meta name="theme-color" content="#FFFFFF" />
        </Helmet>
        <CRow className="bg-image-s-v">
            <CCol xs={12}>
                <div className="container">
                    {/* <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div> */}
                    <h1 className="wara-title mtwt">Immeuble Partagé</h1>
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
                                    Nous sommes Mehdi, Myriam, William, Charlotte, Ondine et tous les autres. Nous vous
                                    invitons à suivre notre quotidien dans notre Immeuble Partagé !
                                    L&#39;objectif pour nous, c’est de vivre dans la gaieté́ et la convivialité́ : dans notre
                                    immeuble, on se dépanne, on établit des relations de confiance, on s&#39;organise.                        
                                </p>
                                    <br></br>
                                <p className="text-left text-bg">
                                    Un moment d’échange autour d’un verre ou d’un repas, dans le jardin ou dans la salle commune, tout en gardant chacun son indépendance avec son appartement. Savoir qu’il y a près de nous une oreille qui peut être attentive, une aide possible, un espace où l’on peut se retrouver. Se croiser, chacun avec ses différences, jeunes et seniors, valides et porteurs de handicap. Contrer la solitude et l’individualisme par le vivre ensemble. 
                                    C’est notre Immeuble Partagé avec toutes ces imperfections avec son humour et son impertinence. 
                                </p>
                            <br></br>
                            <h3 className="wara-syn">Acteurs principaux</h3>
                            <p className="text-left text-bg texte">
                                <ul>
                                    <li>Adda ABDELLI : MEHDI</li>
                                    <li>Andréa FERRÉOL : MYRIAM</li>
                                    <li>Théo CURIN : WILLIAM</li>
                                    <li>Camille AGUILAR : CHARLOTTE</li>
                                    <li>Krystoff FLUDER : JEAN-MARC</li>
                                    <li>Philippe SIVY : MAURICE</li>
                                    <li>Amandine BILLOUX : ONDINE</li>
                                    <li>Léon PLAZOL : BENOIT</li>
                                    <li>Méril LOQUETTE : SAMUEL</li>
                                    <li>Agathe PAULI : ÉLÉA</li>
                                    <li>Nanou HARRY : SANDRA</li>
                                    <li>Ange OBRIOT : ROMUALD</li>
                                    <li>El Ghali BOUAZAOUI : L'OUVRIER</li>
                                    <li>Souleymane TOURÉ : LE GARÇON</li>
                                    <li>Nina BIANCHI : LA FILLE</li>
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
        <img src={ipWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
        <div className="waraRight-textSection text-bg">
        <h3 className="white-title">Équipe artistique</h3>   
                <ul>
                    <li>Une série crée par Adda Abdelli et Fabrice Chanut</li>
                    <li>Réalisation de Fabrice Chanut, Franck Lebon et Vincent Burgevin</li>
                    <li>Scénario de Adda Abdelli, Fabrice Chanut, Franck Lebon, Virginie Peignien, Yanik Vabre, Céline Boidin, Cyrille Latour, Nathan Delannoy, Loïc Nicoloff, Tom Gobart, Shannon Renaudeau, Suzy Dupin</li>
                    <li>Production : Astharté & Compagnie - Sophie Deloche / Avalon - Philippe Braunstein</li>
                    <li>Musique : <a 
                        href="https://www.boriginal-music.com/compositeur/franck-lebon/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'white', textDecoration: 'underline' }}>
                        Franck Lebon</a></li>
                    <li>Unité fiction France Télévisions : Anne Holmes, Emmanuel Garcia, Christophe Louis et Charlotte Roland</li>
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
                                    <li>Directeur de la Photographie : Mathieu Andrieux, Jean Combier</li>
                                    <li>Directeur de Production : Julien Tordjman</li>
                                    <li>1er assistant réalisateur : Patrick Betaillole, Raphaëlle Bruyas</li>
                                    <li>Chef opérateur son : Eddy Laurent, Nirvana Guerra Franchi</li>
                                    <li>Chef monteur : Nathan Delanoy et Nicolas Bonnet</li>
                                    <li>Monteur, son mixeur : Samy Bardet</li>
                                    <li>Chef décorateur : Kim Adoniadis, Florent Chicouard</li>
                                    <li>Cheffe costumière : Léa Bettenfeld</li>
                                    <li>Cheffe maquilleuse : Elsa Gendre</li>
                                </ul>
                        </div>
                        <img src={ipWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={ipbottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={ipbottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={ipbottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    </>
    );
}

export default Ip;

