/* eslint-disable */

import React, { useState } from 'react';
import './l_s_m.css';
import ScrollTrigger from 'react-scroll-trigger';
import {
    CCol,
    CRow,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import jauneirisWord1 from 'src/assets/images/jauneirisword1.jpg';
import affichejauneiris3 from 'src/assets/images/affiche-jaune-iris3.jpg';
import jauneirisWord2 from 'src/assets/images/jauneirisword2.jpg';
import jauneirisbottom1 from 'src/assets/images/jauneirisbottom1.jpg';
import jauneirisbottom2 from 'src/assets/images/jauneirisbottom2.jpg';
import jauneirisbottom3 from 'src/assets/images/jauneirisbottom3.jpg';

const L_S_M_S3 = () => {
    const navigate = useNavigate();
    const [imageClass1, setImageClass1] = useState("slide-initial");
    const [imageClass2, setImageClass2] = useState("slide-initial");
    const [imageClass3, setImageClass3] = useState("slide-initial");
    const [imageClass4, setImageClass4] = useState("slide-initial");

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <CRow className="bg-image-s-lsm">
            <CCol xs={12}>
                <div className="container">
                    <div>
                    <CButton color="secondary" className="btn-previous" onClick={handleGoBack}>← Précédent</CButton>
                    </div>
                    <h1 className="wara-title mtwt">Jaune Iris</h1>
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
                            Jaune iris est un téléfilm policier français réalisé par Didier Bivel diffusé pour la première fois le 23 octobre 2015 sur France 2.
                            C'est l'adaptation du roman policier Jaune caravage de Gilda Piersanti1.                            
                            </p>
                            <br></br>
                            <p className="text-left text-bg texte">À l’université de Tanasanga, les meilleurs étudiants s’invitent au cours d’un brillant professeur Moutari Warra(Issaka Sawadogo ), attirés par son charisme et sa spécialité de Droit Constitutionnel. Une relation privilégiée s’instaure avec la jeune et pétillante Aïcha Diallo(France Nancy Goulian ). Mais leur relation n’est pas un fleuve tranquille, nourrie de rapports conflictuels et d'incompréhensions générationnelles.
</p>
                      </div>
                        <img src={affichejauneiris3} alt="Wara Image 1" className="img-thumbnail-large" />
                    </div>
                    </ScrollTrigger>
                    <div style={{ clear: 'both' }}></div>

                    <ScrollTrigger 
                    onEnter={() => setImageClass2("slide-from-right waraRight-slideAnim")} 
                    offset={{ top: 50 }}>
                        <div className={`waraRight-container ${imageClass2}`}>
                            <img src={jauneirisWord1} alt="Wara Image 2" className="waraRight-imageStyle" />
                                <div className="waraRight-textSection text-bg">
                                <h3 className="white-title">Acteurs</h3>   
                                    <ul>
                                        <li>Patrick Chesnais : le commissaire Rousseau</li>
                                        <li>Camille Panonacle : Mariella De Luca</li>
                                        <li>Natacha Régnier : Katia Ismaïlova</li>
                                        <li>Catherine Marchal : la commissaire Tristani</li>
                                        <li>Pierre Kiwitt : Boris</li>
                                        <li>Bruno López : Borel</li>
                                        <li>Eric Laugerias : le créateur de mode</li>
                                        <li>Fabrice Lelyon : Lecanu</li>
                                        <li>Michel Bompoil : le procureur</li>
                                        <li>Maryne Bertieaux : Léonore</li>
                                        <li>Pauline Brisy : Anna Ismaïlova</li>
                                        <li>Christiane Millet : Delphine Fauvet</li>
                                        <li>Fabienne Mésenge : Mme Beauregard</li>
                                        <li>Patrick Médioni : le gérant Amnésium</li>
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
                                    <li>Réalisation : Didier Bivel</li>
                                    <li>Scénario : Gianguido Spinelli et Gilda Piersanti (d'après le roman de Gilda Piersanti)</li>
                                    <li>Production : Sophie Deloche</li>
                                    <li>Musique : Nicolas Errèra</li>
                                    <li>Directeur de production : Jacques Bontoux</li>
                                    <li>Directeur de la photographie : Marc Falchier</li>
                                    <li>Chef opérateur son : Corinne Rozenberg</li>
                                    <li>1er assistant du réalisateur : Thierry Lecomte</li>
                                    <li>Directrice de casting : Françoise Menidrey</li>
                                    <li>Chef décorateur : Eric Durringer</li>
                                </ul>
                        </div>
                        <img src={jauneirisWord2} alt="Wara Image 3" className="wara-img-thumbnail" />
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={() => setImageClass4("fade-in active")} offset={{ top: 200 }}>
                    <div className={`${imageClass4}`}>
        <img src={jauneirisbottom1} alt="Wara Image 4" className="img-thumbnail" />
        <img src={jauneirisbottom2} alt="Wara Image 4" className="img-thumbnail" />
        <img src={jauneirisbottom3} alt="Wara Image 4" className="img-thumbnail" />

    </div>
</ScrollTrigger>

                </div>
            </CCol>
        </CRow>
    );
}

export default L_S_M_S3;
