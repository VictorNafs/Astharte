/* eslint-disable */

import React from 'react'
import './catalogues.css'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { Link } from 'react-router-dom'
import { HTML5Backend } from 'react-dnd-html5-backend'
import PropTypes from 'prop-types'

import affichewara1 from 'src/assets/images/affiche-wara1.jpg'
import affichewara2 from 'src/assets/images/affiche-wara2.jpg'
// import affichevestiaire1 from 'src/assets/images/affiche-vestiaires1.jpg'
import affichevestiaires2 from 'src/assets/images/affiche-vestiaires2.jpg'
import affichevestiaires3 from 'src/assets/images/affiche-vestiaires3.jpg'
import affichevestiaires4 from 'src/assets/images/affiche-vestiaires4.jpg'
import affichevestiaires5 from 'src/assets/images/affiche-vestiaires5.jpg'
import affichevestiaires6 from 'src/assets/images/affiche-vestiaires6.jpg'
import affichevestiaires7 from 'src/assets/images/affiche-vestiaires7.jpg'
import affichevestiaires8 from 'src/assets/images/affiche-vestiaires8.jpg'
import affichevestiaires9 from 'src/assets/images/affiche-vestiaires9.jpg'
import affichevestiaires10 from 'src/assets/images/affiche-vestiaires10.jpg'
import affichevestiaires11 from 'src/assets/images/affiche-vestiaires11.jpg'
import affichevestiaires12 from 'src/assets/images/affiche-vestiaires12.jpg'
import affichelesengages1 from 'src/assets/images/affiche-l-e1.jpg'
import affichelesengages2 from 'src/assets/images/affiche-l-e2.jpg'
import affichelesengages3 from 'src/assets/images/affiche-xaox.png'
import affichehiverrouge1 from 'src/assets/images/affiche-hiver-rouge1.jpg'
import affichebleucatacombe2 from 'src/assets/images/affiche-bleu-catacombe2.jpg'
import affichejauneiris3 from 'src/assets/images/affiche-jaune-iris3.jpg'
import affichenoirenigma4 from 'src/assets/images/affiche-noir-enigma4.jpg'
import afficheenpleincoeur from 'src/assets/images/affiche-en-plein-coeur.jpg'
import affichecommeunair from 'src/assets/images/affiche-comme-un-air.jpg'
import afficheparolecontreparole from 'src/assets/images/affiche-parole-contre-parole.jpg'

const DraggableImage = ({ src, alt, url }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'IMAGE',
    item: { id: src, url },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return <img ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }} src={src} alt={alt} />
}

const DropZoneComponent = () => {
  const [, dropRef] = useDrop({
    accept: 'IMAGE',
    drop: (item) => {
      console.log("Drop detected with item:", item);
      if (item.url) {
        window.open(item.url, '_blank');
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef} className="dropzone">
      {"Déposez les affiches ici pour voir ce qu'elles cachent"}
    </div>
  );
}



const Catalogues = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mt-5">
        <h1>Production Unitaire</h1>
        <div className="photo-grid">
          <Link to="/parole_contre_parole">
          <DraggableImage
            src={afficheparolecontreparole}
            alt="Parole Contre Parole"
            url="https://youtu.be/YzaelClGE2A?si=y8juf6kmd7t6JMHO"
          />
          </Link>
          <Link to="/en_plein_coeur">
          <DraggableImage src={afficheenpleincoeur} alt="En Plein Coeur" url="https://youtu.be/20oiaCzaKL8?si=e7QIGRV4XoBYzRkS" />
          </Link>
          <Link to="/comme_un_air">
          <DraggableImage src={affichecommeunair} alt="Comme Un Air" url="https://youtu.be/svQGyKYbjD8?si=oX5CL3h8iDlnCZxF" />
          </Link>
          <DropZoneComponent />
        </div>
        <h1 className="h1mt">Production Séries</h1>
        <h2 className="mt">Wara</h2>
        <div className="photo-grid">
          <Link to="/wara/saison1">
          <DraggableImage src={affichewara1} alt="Wara 1" url="https://wara-laserie.com/" />
          </Link>
          <Link to="/wara/saison2">
          <DraggableImage src={affichewara2} alt="Wara 2" url="https://wara-laserie.com/" />
          </Link>
          <DropZoneComponent />
        </div>
        <h2 className="mt">Les Engagés</h2>
        <div className="photo-grid">
          <Link to="/les_engages/saison1">
          <DraggableImage src={affichelesengages1} alt="Les Engagés 1" url="https://youtu.be/26wHsdP3Xtk?si=UyTKYHyZnS69Lvg7" />
          </Link>
          <Link to="/les_engages/saison2">
          <DraggableImage src={affichelesengages2} alt="Les Engagés 2" url="https://youtu.be/muc0CSXNNc0?si=-6oS8jYOEutQd1B8" />
          </Link>
          <Link to="/les_engages/saison3">
          <DraggableImage src={affichelesengages3} alt="Les Engagés 3" url="https://youtu.be/O8wwiGBhw04?si=I-e9E3OKAlskE642" />
          </Link>
          <DropZoneComponent />
        </div>
        <h2 className="mt">Les Saisons Meurtrières</h2>
        <div className="photo-grid">
          <Link to="/les_saisons_meurtrieres/saison1">
          <DraggableImage src={affichehiverrouge1} alt="Hiver Rouge" url="https://youtu.be/n8k818wN2eQ?si=yXMJmArkzQT8Y7Vi" />
          </Link>
          <Link to="/les_saisons_meurtrieres/saison2">
          <DraggableImage src={affichebleucatacombe2} alt="Bleu Catacombe" url="https://youtu.be/OwMUrASGezE?si=Ql8sHY3uLa304sLk" />
          </Link>
          <Link to="/les_saisons_meurtrieres/saison3">
          <DraggableImage src={affichejauneiris3} alt="Jaune Iris" url="https://youtu.be/OwMUrASGezE?si=Mm_Lp_mmdZuaH9CC" />
          </Link>
          <Link to="/les_saisons_meurtrieres/saison4">
          <DraggableImage src={affichenoirenigma4} alt="Noir Enigma" url="https://youtu.be/OwMUrASGezE?si=Mm_Lp_mmdZuaH9CC" />
          </Link>
          <DropZoneComponent />
        </div>
        <h2 className="mt">Vestiaires</h2>
        <div className="photo-grid">
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires2} alt="Vestiaires 2" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires3} alt="Vestiaires 3" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires4} alt="Vestiaires 4" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires5} alt="Vestiaires 5" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires6} alt="Vestiaires 6" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires7} alt="Vestiaires 7" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires8} alt="Vestiaires 8" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires9} alt="Vestiaires 9" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires10} alt="Vestiaires 10" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires11} alt="Vestiaires 11" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrp" />
          </Link>
          <Link to="/vestiaires">
          <DraggableImage src={affichevestiaires12} alt="Vestiaires 12" url="https://youtube.com/@vestiairesfrance2?si=kiLb1RsVttPvRkrpy" />
          </Link>
          <DropZoneComponent />
        </div>
      </div>
    </DndProvider>
  )
}

DraggableImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default Catalogues
