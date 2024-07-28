/* eslint-disable */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './l_e.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import S3lesengagesWord1 from 'src/assets/images/S3-les-engages-word-1.jpg';
import affichele3 from 'src/assets/images/affiche-l-e3.jpeg';
import S3lesengagesWord2 from 'src/assets/images/S3-les-engages-word-2.jpg';
import S3lesengagesbottom1 from 'src/assets/images/S3-les-engages-bottom-1.jpg';
import S3lesengagesbottom2 from 'src/assets/images/xaoc-bottom-2.jpg';
import S3lesengagesbottom3 from 'src/assets/images/S3-les-engages-bottom-3.jpg';

const L_E_S3 = () => {
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
            <title>Les Engagés - Saison 3 - Astharté & Compagnie</title>
            <meta name="description" content="Découvrez 'Les Engagés', la troisième saison de la série captivante produite par Astharté & Compagnie." />
            <meta name="keywords" content="production de films, séries télévisées, cinéma, fiction, Astharté & Compagnie, production cinématographique, créativité cinématographique, production de séries, diversité des genres" />
            <meta name="author" content="Astharté & Compagnie" />
            {/* Open Graph Tags */}
            <meta property="og:title" content="Les Engagés - Saison 3 - Astharté & Compagnie" />
            <meta property="og:description" content="La troisième saison de la série 'Les Engagés', produite par Astharté & Compagnie." />
            <meta property="og:url" content="https://astharte.com/les_engages_s3" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://astharte.com/favicon.ico" />
            
            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Les Engagés - Saison 3 - Astharté & Compagnie" />
            <meta name="twitter:description" content="La troisième saison de la série 'Les Engagés', produite par Astharté & Compagnie." />
            <meta name="twitter:image" content="https://astharte.com/favicon.ico" />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "TVSeries",
                    "name": "Les Engagés - Saison 3",
                    "description": "La troisième saison de la série 'Les Engagés', produite par Astharté & Compagnie.",
                    "url": "https://astharte.com/les_engages_s3",
                    // ... Autres propriétés pertinentes ...
                })}
            </script>
            <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <meta name="theme-color" content="#FFFFFF" />
        </Helmet>
        <CRow className="bg-image-s-le">
            <CCol xs={12}>
                <div className="container">
                    <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div>
                    <h1 className="wara-title mtwt">Les Engagés</h1>
                    <h3 className="wara-title-h3">Saison 3</h3>
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
                        <div className="text-container-S3 special-text-container">
                          <h1 className="wara-syn">Synopsis</h1>
                            <p className="text-left text-bg texte">
                                Les Engagés est une web-série française créée et écrite par Sullivan Le Postec. La première saison est co-réalisée par Jules Thénier et Maxime Potherat, la deuxième par Slimane-Baptiste Berhoun.
                                La série est coproduite par Astharté & Compagnie et France Télévisions Nouvelles Écritures, et diffusée à l’origine sur la plateforme Studio 4 à partir du 17 mai 2017. Depuis la refonte de l’offre numérique de France Télévisions, Les Engagés est reprise sur France.tv Slash1.
                            </p>
                            <br></br>
                            <p className="text-left text-bg texte">
                            Thibaut en secourant un refugié Tchétchène d’un piège qui aurait pu être mortel va découvrir l’existence d’un programme pilote d’accueil et de protection des droits de l’homme qui a permis de mettre à l’abri plusieurs personnes en Europe. Hicham de son côté doit retourner dans sa cité à Saint Etienne, suite au décès d’un proche dans une altercation avec la police. Tous deux vont être pris dans une course contre la montre : sauver de la mort les protégés du programme Européen en découvrant la taupe au sein même des Instances Européennes pour Thibaut ; faire éclater la vérité pour Hicham sur la mort de son cousin et les fake news qui ont circulées sur ce sujet et qui entravent leurs actions.                             </p>
                            <br></br>
                            <p className="text-left text-bg texte">
                                Une série créée et développée par Sullivan LE POSTEC 
                                Réalisée par Sullivan LE POSTEC (réal différent en fonction des épisodes) 
                                Produit par Sophie DELOCHE & Baptiste RINALDI
                            </p>
                      </div>
                        <img src={affichele3} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 50 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={S3lesengagesWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                <h3 className="white-title">Acteurs</h3>   
                                    <ul>
                                        <li>Mehdi MESKAR</li>
                                        <li>Eric PUCHEU</li>
                                        <li>Denis D’ARCANGELO</li>
                                        <li>Adrian DE LA VEGA</li>
                                        <li>Nanou HARRY</li>
                                        <li>Ishtvan NEKRASOV</li>
                                        <li>Franck FARGIER</li>
                                        <li>Clémentine VERDIER</li>
                                        <li>Nacéra ZAIDI</li>
                                        <li>Claudius PAN </li>
                                        <li>avec la participation d’Alex RAMIRES et Pauline CHALAMET</li>
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
                                        <li>Réalisation : Sullivan Le Postec et William Samaha</li>
                                        <li>Scenario : Sullivan Le Postec</li>
                                        <li>Producteurs : Sophie Deloche et Baptiste Rinaldi (Astharté & Compagnie)</li>
                                        <li>Directeur de production : Noël MAGIS </li>
                                        <li>Directeur de la photographie : Matthieu ANDRIEUX</li>
                                        <li>Chef opérateur du son : David FERRAL</li>
                                        <li>1er assistant réalisateur :Ronnie Franco</li>
                                        <li>Scripte : Alexia MONTEGU</li>
                                        <li>Directeur de casting : Stéphane GAILLARD </li>
                                        <li>Chef décorateur : Marie Marine NOTTE</li>
                                        <li>Cheffe costumière : Marine PEYRAUD</li>
                                        <li>Cheffe maquilleuse : Faustina DE SOUSA</li>
                                        <li>Chef électricien : Théo FARAMA </li>
                                        <li>Chef machiniste : Thibault LAGARDE</li>
                                        <li>Régisseur général : Pierre ADAM</li>
                                        <li>Chefs monteurs image : Nathan DELANNOY & Nicolas BONNET</li>
                                        <li>Etalonneur : Nicolas LOSSEC</li>
                                        <li>Chef monteur son / Mixeur : Charli CIRCUS </li>
                                        <li>Musique originale : <a 
                                                href="https://www.boriginal-music.com/compositeur/franck-lebon/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={{ color: 'white', textDecoration: 'underline' }}>
                                                Franck Lebon</a></li>
                                    </ul>
                        </div>
                        <img src={S3lesengagesWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={S3lesengagesbottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={S3lesengagesbottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={S3lesengagesbottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    </>
    );
}

export default L_E_S3;