  import React, { useContext} from "react";
  import MyContext from "../my_context";

  const Favorites = () => {
    const { photos, favorites } = useContext(MyContext)

    //filtro de fotos
    const favoritePhotos = photos.filter((photo,index) => favorites[index])

    return (
      <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.length > 0 ? (
          favoritePhotos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.src.tiny} alt={photo.alt} />
            </div>
          ))
        ) : (
          <p>No se han seleccionado fotos favoritas.</p>  //Cuando se ejecuta la app y al no seleccionar ninguna foto aparece este mensaje
        )}
      </div>
    </div>
    );
  };
  export default Favorites;