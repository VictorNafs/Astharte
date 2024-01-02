/* eslint-disable */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import './parole_contre_parole.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import parolecontreparoleWord1 from 'src/assets/images/parole-contre-parole-word-1.jpg';
import afficheparolecontreparole from 'src/assets/images/affiche-parole-contre-parole.jpg';
import parolecontreparoleWord2 from 'src/assets/images/parole-contre-parole-word-2.jpg';
import parolecontreparolebottom1 from 'src/assets/images/parole-contre-parole-bottom-1.jpg';
import parolecontreparolebottom2 from 'src/assets/images/parole-contre-parole-bottom-2.jpg';
import parolecontreparolebottom3 from 'src/assets/images/parole-contre-parole-bottom-3.jpg';

const Parole_Contre_Parole = () => {
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
            <title>Parole Contre Parole - Astharté & Compagnie</title>
            <meta name="description" content="Découvrez 'Parole Contre Parole', un drame poignant produit par Astharté & Compagnie." />
            <meta name="keywords" content="Parole Contre Parole, film dramatique, Astharté & Compagnie, cinéma, production de films, intrigue, suspense" />
            <meta name="author" content="Astharté & Compagnie" />

            {/* Open Graph Tags */}
            <meta property="og:title" content="Parole Contre Parole - Astharté & Compagnie" />
            <meta property="og:description" content="Plongez dans 'Parole Contre Parole', un drame captivant produit par Astharté & Compagnie." />
            <meta property="og:url" content="https://astharte.com/parole_contre_parole" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://astharte.com/A.png" />
            
            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Parole Contre Parole - Astharté & Compagnie" />
            <meta name="twitter:description" content="Plongez dans 'Parole Contre Parole', un drame captivant produit par Astharté & Compagnie." />
            <meta name="twitter:image" content="https://astharte.com/A.png" />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "Movie",
                    "name": "Parole Contre Parole",
                    "description": "Un film dramatique 'Parole Contre Parole' produit par Astharté & Compagnie.",
                    "url": "https://astharte.com/parole_contre_parole",
                    // ... Autres propriétés pertinentes ...
                })}
            </script>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="A.ico" type="image/x-icon" />
            <meta name="theme-color" content="#FFFFFF" />
        </Helmet>
        <CRow className="bg-image-s-pcp">
            <CCol xs={12}>
                <div className="container">
                    {/* <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div> */}
                    <h1 className="wara-title mtwt">Parole Contre Parole</h1>
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
                                <p className="text-left text-bg">
                                    Laura, jeune commissaire priseur à la carrière prometteuse, voit sa vie basculer 
                                    le jour où elle est victime d’un viol. Le violeur est un galeriste connu et respecté, et le 
                                    viol s’est produit après une soirée arrosée. Laura sait qu’elle a peu de chances d’être 
                                    crue si elle porte plainte. Mais cette même nuit, la femme du galeriste est assassinée 
                                    chez elle. Le mari est suspecté du meurtre. Mais il a un alibi : au moment du meurtre, 
                                    il était en train de violer Laura. Lorsque la police demande à Laura de confirmer 
                                    l’alibi, elle comprend qu’elle peut se venger en laissant condamner son violeur pour 
                                    meurtre...                            
                                </p>
                                    <br></br>
                                <p className="text-left text-bg">
                                Une film réalisé par Didier BIVEL
                                Sur une idée originale de Gianguido SPINELLI 
                                Scénario et dialogues de Gianguido SPINELLI & Gilda PIERSANTI
                                Produit par Sophie DELOCHE
                                </p>
                      </div>
                        <img src={afficheparolecontreparole} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 50 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={parolecontreparoleWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                <h3 className="white-title">Acteurs</h3>   
                                    <ul>
                                        <li>Elsa LUNGHINI</li>
                                        <li>François VINCENTELLI</li>
                                        <li>Patrick RIDREMONT</li>
                                        <li>Sara MARTINS</li>
                                        <li>Nathalie BLANC</li>
                                        <li>Julie BARGETON</li>
                                        <li>Reginald HUGUENIN</li>
                                        <li>Xavier ROBIC</li>
                                        <li>Florence HUIGE</li>
                                        <li>Anne KREISS</li>
                                        <li>Severin BAVAREL</li>
                                        <li>Xavier MUSSEL</li>
                                        <li>Pierre LE FRANC</li>
                                        <li>Julie TAJAN</li>
                                        <li>Léa PELLETANT</li>
                                        <li>Michaël ASSIE</li>
                                        <li>Zaccharie HEINTZ</li>
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
                                        <li>Directeur de production : Pierre DUFOUR </li>
                                        <li>Directeur de la photographie : Marc Falchier</li>
                                        <li>Chef opérateur du son : Yvan Dacquay</li>
                                        <li>1er assistant réalisateur : Thierry Lecomte</li>
                                        <li>Scripte : Claire DUMAZE</li>
                                        <li>Directeur de casting : Stéphane GAILLARD</li> 
                                        <li>Cheffe décoratrice : Stéphane LEVY</li>
                                        <li>Accessoiriste de plateau : Stéphane MOURGUES </li>
                                        <li>Chefs costumiers : Matthieu CAMBLOR et Marion MOULES</li>
                                        <li>Cheffe maquilleuse : Elsa GENDRE</li>
                                        <li>Chef coiffeuse : Géraldine VACELLIER</li>
                                        <li>Chef électricien : Olivier ABELE</li>
                                        <li>Chef machiniste : Michel STRASSER</li>
                                        <li>Régisseuse générale : Sophie COUECOU</li>
                                        <li>Cheffe monteuse image : Catherine SCHWARTZ</li>
                                        <li>Cheffe monteuse son : Corinne ROZENBERG</li>
                                    </ul>
                        </div>
                        <img src={parolecontreparoleWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={parolecontreparolebottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={parolecontreparolebottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={parolecontreparolebottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    </>
    );
}

export default Parole_Contre_Parole;
