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
                            <br></br>
                            <p className="text-left text-bg texte">
                            Mais Martin ne veut plus de leur vie parisienne et de leurs métiers chronophages où ils ne
                            font que se croiser, de leur vie qui partait à vau l’eau. Il était infirmier urgentiste, il va
                            reprendre la gérance d’une supérette dans cette petite ville au bord de mer bien décidé à
                            changer de vie. Il espère que Yvan, leur fils, trouvera lui aussi ici son équilibre. Et elle ? Doit-
                            elle arrêter son métier pour le suivre ? Comment peut-il prendre cette décision tout seul ?
                            Louise va se battre pour sauver son couple et sa famille, mais c’est sans compter sur l’affaire
                            de drogue qui va la rattraper et pour laquelle elle devient la principale suspect.
                            </p>
                            <p className="text-left text-bg texte">
                            Pour protéger sa famille et prouver son innocence, Louise va devoir retrouver la drogue.
                            Entre choix familiaux, décisions de couple et enquêtes, les surprises ne manquent pas… et
                            elles ne sont pas toujours bonnes. On ne sait jamais ce qui nous attend derrière un virage.
                            Entre polar et réflexion sur la famille, Virage attend la dernière ligne droite pour dévoiler sa
                            vérité.
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
                                        <li>Caroline Proust : LOUISE</li>
                                        <li>Thomas Jouannet : MARTIN</li>
                                        <li>Andréa Ferreol : FRANCOISE</li>
                                        <li>Simon Zampieri : YVAN</li>
                                        <li>N'Landu Lubansu : ARTHUR</li>
                                        <li>Patrick Ridremont : WAGNER</li>
                                        <li>Frédérique Kamatari : ADDA</li>
                                        <li>Arthur Choisnet : TONY</li>
                                        <li>David Ayala : SANTINI</li>
                                        <li>Yann Tshibola : SAMBA</li>
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
                                    <li>Réalisation : Delphine Lemoine</li>
                                    <li>Production : Sophie Deloche</li>
                                    <li>Scénario de : Virginie Peignien et Philippe Bérenger</li>
                                    <li>Sur une idée originale de : Philippe Bérenger</li>
                                    <li>Chef opérateur : Bruno Privat</li>
                                    <li>1er assistant réalisation : Emmanuel Rondeau Du Noyer</li>
                                    <li>Scriptes : Betty Greffet</li>
                                    <li>Ingénieur du son : Dominique Lacour</li>
                                    <li>Directeur de production : Franck Delaunay</li>
                                    <li>Cheffe costumière : Sophie Puig</li>
                                    <li>Cheffe maquilleuse : Karine Gachon</li>
                                    <li>Cheffe coiffeuse : Julie Grave</li>
                                    <li>Chef éclairagiste : Arnaud Desbuquois</li>
                                    <li>Chef machiniste : François Delaby</li>
                                    <li>Chef constructeur : Benoit Delmeule</li>
                                    <li>Cheffe décoratrice : Sylvie Monbel</li>
                                    <li>Chef monteur Bordeaux : Mickaël Lavignac</li>
                                    <li>Mixage : Stéphanie Roumiguiere</li>
                                    <li>Régisseur général : Frédéric Brouard</li>
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
