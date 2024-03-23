//const Gallery = () => {
//  return <div className="gallery grid-columns-5 p-3"></div>;
//};
//export default Gallery;


import React, { useContext} from "react";
import MyContext from "../my_context";

const Gallery = () => {
  const photos = useContext(MyContext);

  return (
    <div className="gallery grid-columns-5 p-3" style={{ position: "relative" }}>
      {photos.map((photo) => (
        <div key={photo.id} style={{ position: "relative", display: "inline-block" }}>
          <img src={photo.src.tiny} alt={photo.alt}/>          
          <span style={{ position: "absolute", bottom: 0, left: 0, width:"100%", textAlign: "left", color:"white", padding: "5px" }}>{photo.alt}</span>
        </div>
        
      ))}
    </div>
  );
};

export default Gallery;