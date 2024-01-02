/* eslint-disable */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import './wara_S.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import S2waraWord1 from 'src/assets/images/S2-wara-word1.jpg';
import affichewara2 from 'src/assets/images/affiche-wara2.jpg';
import S2waraWord2 from 'src/assets/images/S2-wara-word2.jpg';
import S2warabottom1 from 'src/assets/images/S2-wara-bottom1.jpg';
import S2warabottom2 from 'src/assets/images/S2-wara-bottom2.jpg';
import S2warabottom3 from 'src/assets/images/S2-wara-bottom3.jpg';

const Wara_S2 = () => {
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
            <title>Wara Saison 2 - Astharté & Compagnie</title>
            <meta name="description" content="Wara Saison 2, La Destinée D'Aïcha, une continuation passionnante de la série Wara, produite par Astharté & Compagnie." />
            <meta name="keywords" content="Wara, série dramatique, saison 2, La Destinée D'Aïcha, Astharté & Compagnie, Afrique, politique, défis personnels" />
            <meta name="author" content="Astharté & Compagnie" />

            {/* Open Graph Tags */}
            <meta property="og:title" content="Wara Saison 2 - Astharté & Compagnie" />
            <meta property="og:description" content="Explorez 'Wara Saison 2 - La Destinée D'Aïcha', une suite captivante de la série dramatique Wara, produite par Astharté & Compagnie." />
            <meta property="og:url" content="https://astharte.com/wara_s2" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://astharte.com/A.png" />
            
            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Wara Saison 2 - Astharté & Compagnie" />
            <meta name="twitter:description" content="Découvrez 'Wara Saison 2 - La Destinée D'Aïcha', une suite passionnante de la série dramatique Wara, produite par Astharté & Compagnie." />
            <meta name="twitter:image" content="https://astharte.com/A.png" />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "TVSeries",
                    "name": "Wara Saison 2",
                    "description": "Wara Saison 2, La Destinée D'Aïcha, une suite captivante de la série dramatique Wara.",
                    "url": "https://astharte.com/wara_s2",
                    // ... Autres propriétés pertinentes ...
                })}
            </script>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="A.ico" type="image/x-icon" />
            <meta name="theme-color" content="#FFFFFF" />
        </Helmet>
        <CRow className="bg-image-s-w">
            <CCol xs={12}>
                <div className="container">
                    <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div>
                    <h1 className="wara-title mtwt">WARA</h1>
                    <h3 className="wara-title-h3-S2">La Destinée D'Aïcha</h3>
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
                            Aïcha Diallo, étudiante en droit, est portée à la tête du mouvement « Et Si Demain » par les jeunes de Tanasanga. Le procès de sa mère, Mariam Shugger, accusée du meurtre de son époux, réactive la cause des mariages forcés. Moutari Wara, mentor d’Aïcha et prof de droit à la faculté la soutient. Il a accepté d’être l’avocat de la défense de Mariam Shugger et de la cause des femmes. 
                            </p>
                            <p className="text-left text-bg texte">
                            Aïcha apprend au cours du procès l'identité de son vrai père, l'ermite Papa Salim. Elle part à sa rencontre et découvre un pan de son histoire. Ce voyage va la changer et lui donner une force nouvelle. À son retour, avec les partisans de « Et Si Demain », elle se lance dans une campagne de proximité auprès des citoyens. Leur popularité va grandissante. Mais Lamine, l’homme de main de El Hadj, manipule Bachar, l’ex amoureux de Aïcha, qui va devenir un fervent opposant à leur mouvement. 
                            <br></br>
                            Moutari est rattrapé par des dossiers accusateurs, construits à charge par Lamine. Il devra se débattre pour faire reconnaître son passé.
                            <br></br>
                            Leur union fera-elle leur force ?
                            </p>
                            <h3 className="white-title">Acteurs</h3>   
                            <p className="text-left text-bg texte">
                                <ul>
                                    <li>MOUTARI WARA : ISSAKA SAWADOGO</li>
                                    <li>AÏCHA DIALLO : France Nancy GOULIAN </li>
                                    <li>GANKA BARRY : Souleymane Seye NDIAYE</li>
                                    <li>SHUGGER : Maimouna Ndiaye</li>
                                    <li>BACHAR KOFFI : Abdou Bass Dia</li>
                                    <li>BINTOU DIOP : Prudence MAIDOU</li>
                                    <li>GAMBO : Oumar SAMB</li>
                                    <li>HONORÉ : Khadime Rassoul DIONGUE</li>
                                    <li>DJIBRIL : Djibril DANSOKHO</li>
                                    <li>LAMINE : Ibrahima MBAYE</li>
                                    <li>FÉLIE : Martine Eva MONNERVILLE</li>
                                    <li>DIDJÉ : Lala NDIAYE</li>
                                    <li>SALIMATA DIALLO : Marie Madeleine DIALLO</li>
                                    <li>ZOÉ PERRIER : EMELINE NSINGI NKOSI</li>
                                    <li>ERMITE / SALIM : THIERNO CIRE BANEL BA</li>
                                </ul>
                            </p>
                      </div>
                        <img src={affichewara2} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
    offset={{ top: 50 }}
>
    <div className={`waraRight-container ${imageClass2}`}>
        <img src={S2waraWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
        <div className="waraRight-textSection text-bg">
        <h3 className="white-title">Équipe artistique</h3>   
        <ul>
                    <li>Création : Charli Beléteau, d'après une idée originale de Magagi Issoufou Sani</li>
                    <li>Production : Mbathio Diaw, Issaka Sawadogo, Sophie Deloche et Maxime Hervouet</li>
                    <li>Réalisation : Oumar Diack et Marc Tchicot</li>
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
                                    <li>Chef opérateur son : Clément Maléo et Abdourahmane ka</li>
                                    <li>Chefs monteurs : Sarah Chartier Nicolas Bonnet</li>
                                    <li>Mixage : Benjamin Cabaj</li>
                                    <li>Sociétés de production : Astharté & Compagnie (France), Raes Production (Sénégal), Christall Productions et en co-production avec TV5 Monde</li>
                                    <li>Pays d'origine : France / Burkina Faso / Sénégal</li>
                                </ul>
                        </div>
                        <img src={S2waraWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={S2warabottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={S2warabottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={S2warabottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    </>
    );
}

export default Wara_S2;
