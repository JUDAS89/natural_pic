//const Gallery = () => {
//  return <div className="gallery grid-columns-5 p-3"></div>;
//};
//export default Gallery;


import React, { useContext, useState} from "react";
import MyContext from "../my_context";
import IconHeart from "./IconHeart"

const Gallery = () => {
  const photos = useContext(MyContext);

    // Estado para almacenar el estado de favorito de cada imagen
    const [favorites, setFavorites] = useState(Array(photos.length).fill(false));

    // Función para cambiar el estado de favorito de una imagen
    const toggleFavorite = (index) => {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    };

  return (
    <div className="gallery grid-columns-5 p-3" style={{ position: "relative" }}>
      {photos.map((photo, index) => (
        <div key={photo.id} style={{ position: "relative", display: "inline-block" }}>
          <img src={photo.src.tiny} alt={photo.alt}/>  
          <span style={{ position: "absolute", top: 0, right: 0 }}>
            <IconHeart filled={favorites[index]} onClick={() => toggleFavorite(index)}/> {/* Agrega el componente IconHeart y el click*/}
          </span>        
          <span style={{ position: "absolute", bottom: 0, left: 0, width:"100%", textAlign: "left", color:"white", padding: "5px" }}>{photo.alt}</span>
        </div>
        
      ))}
    </div>
  );
};

export default Gallery;