/* eslint-disable */

import React, { useState } from 'react';
import './vestiaires.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import vestiairesWord1 from 'src/assets/images/vestiaires-word-1.jpg';
import affichevestiaires12 from 'src/assets/images/affiche-vestiaires12.jpg';
import vestiairesWord2 from 'src/assets/images/vestiaires-word-2.jpg';
import vestiairesbottom1 from 'src/assets/images/vestiaires-bottom-1.jpg';
import vestiairesbottom2 from 'src/assets/images/vestiaires-bottom-2.jpg';
import vestiairesbottom3 from 'src/assets/images/vestiaires-bottom-3.jpg';

const Vestiaires = () => {
    const navigate = useNavigate();
    const [imageClass1, setImageClass1] = useState("slide-initial");
    const [imageClass2, setImageClass2] = useState("slide-initial");
    const [imageClass3, setImageClass3] = useState("slide-initial");
    const [imageClass4, setImageClass4] = useState("slide-initial");

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <CRow className="bg-image-s-v">
            <CCol xs={12}>
                <div className="container">
                    {/* <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div> */}
                    <h1 className="wara-title mtwt">Vestiaires</h1>
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
                                À l’université de Tanasanga, les meilleurs étudiants s’invitent au cours d’un brillant professeur Moutari Warra(Issaka Sawadogo ), attirés par son charisme et sa spécialité de Droit Constitutionnel. Une relation privilégiée s’instaure avec la jeune et pétillante Aïcha Diallo(France Nancy Goulian ). Mais leur relation n’est pas un fleuve tranquille, nourrie de rapports conflictuels et d'incompréhensions générationnelles.
                            </p>
                            <br></br>
                            <p className="text-left text-bg texte">
                                À l’université de Tanasanga, les meilleurs étudiants s’invitent au cours d’un brillant professeur Moutari Warra(Issaka Sawadogo ), attirés par son charisme et sa spécialité de Droit Constitutionnel. Une relation privilégiée s’instaure avec la jeune et pétillante Aïcha Diallo(France Nancy Goulian ). Mais leur relation n’est pas un fleuve tranquille, nourrie de rapports conflictuels et d'incompréhensions générationnelles.
                            </p>
                            <h3 className="wara-syn">Acteurs principaux</h3>
                            <p className="text-left text-bg texte">
                                <ul>
                                    <li>Issaka Sawadogo : Moutari Wara</li>
                                    <li>France Nancy Goulian : Aïcha Diallo</li>
                                    <li>Maimouna N'Diaye : Yasmin Diallo</li>
                                    <li>Souleymane Sèye Ndiaye : Ganka Barry</li>
                                    <li>Canabasse : Bachar</li>
                                </ul>
                            </p>
                      </div>
                        <img src={affichevestiaires12} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
    offset={{ top: 50 }}
>
    <div className={`waraRight-container ${imageClass2}`}>
        <img src={vestiairesWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
        <div className="waraRight-textSection text-bg">
        <h3 className="white-title">Équipe technique</h3>   
                <ul>
                    <li>Création : Charli Beléteau</li>
                    <li>Réalisation : Oumar Diack et Toumani Sangaré</li>
                    <li>Création : Charli Beléteau, d'après l'idée originale de Magali Issoufou Sani4</li>
                    <li>Réalisation : Oumar Diack et Toumani Sangaré4</li>
                    <li>Scénario : Charli Beléteau, Aka Assié, Awa Ba, Renaud Beauchard, Aissata Dème, Moussa Diallo, Dialika Sané, Emma Sangaré et Merline Touko Tchoko4</li>
                    <li>Musique : Franck Lebon4</li>
                    <li>Costumes : Mariam Diop</li>
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
                                    <li>Son : Clément Maléo et Hamza Ouhbi</li>
                                    <li>Montage : Nicolas Bonnet et Sarah Chartier</li>
                                    <li>Montage Son : Jf Viguié et Romain Le bras</li>
                                    <li>Mixage : Benjamin Cabaj</li>
                                    <li>Production : Sophie Deloche, Mbathio Diaw, Magagi Issoufou, Alexandre Rideau et Baptiste Rinaldi</li>
                                    <li>Sociétés de production : MJP Productions (Niger), Astharté & Compagnie (France) et Raes Production (Sénégal)3,4 en co-production avec TV5 Monde</li>
                                    <li>Pays d'origine : France / Niger / Sénégale</li>
                                </ul>
                        </div>
                        <img src={vestiairesWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={vestiairesbottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={vestiairesbottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={vestiairesbottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    );
}

export default Vestiaires;
