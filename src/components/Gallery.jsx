//const Gallery = () => {
//  return <div className="gallery grid-columns-5 p-3"></div>;
//};
//export default Gallery;


import React, { useContext} from "react";
import MyContext from "../my_context";

const Gallery = () => {
  const photos = useContext(MyContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <img key={photo.id} src={photo.src.medium} alt={photo.alt} style={{width:'200px',weight:'150px' }}/>
      ))}
    </div>
  );
};

export default Gallery;