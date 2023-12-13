/* eslint-disable */

import React, { useState } from 'react';
import './en_plein_coeur.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import enpleincoeurWord1 from 'src/assets/images/en-plein-coeur-word-1.jpg';
import afficheenpleincoeur from 'src/assets/images/affiche-en-plein-coeur.jpg';
import enpleincoeurWord2 from 'src/assets/images/en-plein-coeur-word-2.jpg';
import enpleincoeurbottom1 from 'src/assets/images/en-plein-coeur-bottom-1.jpg';
import enpleincoeurbottom2 from 'src/assets/images/en-plein-coeur-bottom-2.jpg';
import enpleincoeurbottom3 from 'src/assets/images/en-plein-coeur-bottom-3.jpg';

const En_Plein_Coeur = () => {
    const navigate = useNavigate();
    const [imageClass1, setImageClass1] = useState("slide-initial");
    const [imageClass2, setImageClass2] = useState("slide-initial");
    const [imageClass3, setImageClass3] = useState("slide-initial");
    const [imageClass4, setImageClass4] = useState("slide-initial");

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <CRow className="bg-image-s-epc">
            <CCol xs={12}>
                <div className="container">
                    {/* <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div> */}
                    <h1 className="wara-title mtwt">En Plein Coeur</h1>
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
                            Fred Leprince, un jeune élève, est retrouvé mort au sein même de l’école de police. Emilie, 
                            soeur de la victime et également élève, n’accepte pas à la thèse du suicide. La Commandante 
                            Anne Voreppe et la capitaine Chrystel Chesnot sont en charge de l’affaire. Pour Chrystel 
                            Chesnot, retrouver certains instructeurs ravive des blessures anciennes. Enquêter parmi leurs 
                            pairs sera une épreuve délicate pour nos deux enquêtrices… Être flic, pour le meilleur et pour 
                            le pire.                            </p>
                            <br></br>
                            <h3 className="wara-syn">Acteurs principaux</h3>
                            <p className="text-left text-bg texte">
                            <ul>
                                <li>Réalisé par Bruno GARCIA</li> 
                                <li>Ecrit par Emmanuel BEZIER & Christophe GAVAT, en collaboration avec Yann LE GAL</li>
                                <li>Sur une idée originale de Maria SERIO et Christophe GAVAT</li>
                                <li>Adaptation et dialogues Maria SERIO </li>
                                <li>Produit par Sophie DELOCHE & Maria SERIO</li>
                            </ul>
                            </p>
                      </div>
                        <img src={afficheenpleincoeur} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 50 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={enpleincoeurWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                <h3 className="white-title">Acteurs</h3>   
                                    <ul>
                                        <li>Fatou N’DIAYE</li>
                                        <li>Annie GREGORIO</li>
                                        <li>Sam KARMANN</li>
                                        <li>Alexandre BRASSEUR</li>
                                        <li>Léa LEVIANT</li>
                                        <li>Stéphane DEBAC</li>
                                        <li>Sophie LETELLIER</li>
                                        <li>Perkins LYAUTEY</li>
                                        <li>Baptiste GONTHIER</li>
                                        <li>Lawrence DAVIS</li>
                                        <li>Marion TRAGER</li>
                                        <li>Oscar ZOUZOUT</li>
                                        <li>Cédric LEFFRAY</li>
                                        <li>Max GELLER</li>
                                        <li>Brigitte AUBRY</li>
                                        <li>Jean CORDIER</li>
                                        <li>avec la participation d’Annick BLANCHETEAU</li>
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
                                    <li>Directrice de production Astharté : Sophie COUECOU</li>
                                    <li>Directrice de production : Brigitte CHAUSSADE</li>
                                    <li>Directeur de la photographie : Dominique FAUSSET</li>
                                    <li>Chef opérateur du son : Yann LE MAPIHAN</li>
                                    <li>1er assistant réalisateur : Rodolphe KRIEGEL</li>
                                    <li>Scripte : Magali MOULIN</li>
                                    <li>Directeur de casting Paris : Stéphane GAILLARD</li>
                                    <li>Directeur de casting Bordeaux : Joël GARRIGOU</li>
                                    <li>Chef décorateur : Régis NICOLINO</li>
                                    <li>Chef costumier : François JUGE</li>
                                    <li>Cheffe maquilleuse : Valérie CANCALON</li>
                                    <li>Chef coiffeuse : Delphine LACAZE</li>
                                    <li>Chef électricien : Yves LEROY-DAVESNE</li>
                                    <li>Chef machiniste : Alain GAUTHERIN</li>
                                    <li>Chef constructeur : Julien COMPAGNON</li>
                                    <li>Régisseur général : Jean-Marie LANGLOIS</li>
                                    <li>Chef monteur image : Mickaël LAVIGNAC</li>
                                    <li>Chef monteur son : Matthieu CATHELINEAU</li>
                                </ul>
                        </div>
                        <img src={enpleincoeurWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={enpleincoeurbottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={enpleincoeurbottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={enpleincoeurbottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    );
}

export default En_Plein_Coeur;
